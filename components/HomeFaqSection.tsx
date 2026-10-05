import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import FaqItem from "@/components/FaqItem";
import { homeFaqs } from "@/lib/content";

export default function HomeFaqSection() {
  return (
    <SectionShell id="pytania" label="Pytania">
      <h2 className={fraunces.className}>Najczęstsze pytania</h2>
      <div className="mx-auto w-full max-w-[48rem]">
        {homeFaqs.map((faq) => (
          <FaqItem key={faq.question}>
            <h3 className={`${fraunces.className} text-[1.15rem] font-semibold`}>{faq.question}</h3>
            <p className="body-copy">{faq.answer}</p>
          </FaqItem>
        ))}
      </div>
    </SectionShell>
  );
}
