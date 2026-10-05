import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 3;

const hitsByIp = new Map<string, number[]>();

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hitsByIp.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hitsByIp.set(ip, recent);
    return true;
  }
  recent.push(now);
  hitsByIp.set(ip, recent);
  return false;
}

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Niepoprawne żądanie." }, { status: 400 });
  }

  if (asString(body.company)) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const ip = clientIp(request);
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Zbyt wiele zgłoszeń. Spróbuj za kilka minut." },
      { status: 429 }
    );
  }

  const name = asString(body.name);
  const email = asString(body.email);
  const message = asString(body.message);

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json({ error: "Podaj imię (2-100 znaków)." }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Podaj poprawny adres e-mail." }, { status: 400 });
  }
  if (message.length < 20 || message.length > 5000) {
    return NextResponse.json(
      { error: "Wiadomość musi mieć od 20 do 5000 znaków." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.KONTAKT_EMAIL?.trim();
  if (!apiKey || !to) {
    return NextResponse.json({ error: "Wysyłka jest chwilowo niedostępna." }, { status: 500 });
  }

  const sentAt = new Date().toISOString();
  const resend = new Resend(apiKey);

  try {
    const result = await resend.emails.send({
      from: 'Formularz <formularz@szymonjurkun.pl>',
      to,
      replyTo: email,
      subject: `Zapytanie ze strony: ${name}`,
      text: [
        `Imię: ${name}`,
        `E-mail: ${email}`,
        `Czas: ${sentAt}`,
        "",
        message,
      ].join("\n"),
    });

    if (result.error) {
      return NextResponse.json({ error: "Nie udało się wysłać wiadomości." }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Nie udało się wysłać wiadomości." }, { status: 500 });
  }
}
