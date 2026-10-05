import { fraunces } from "@/lib/fonts";
import { tworzenieStron } from "@/lib/pages/tworzenie-stron";

export default function ComparisonTable() {
  const { headers, rows, note } = tworzenieStron.compare;

  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full min-w-[36rem] border-collapse text-left">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className={`${fraunces.className} border-b border-[var(--line-strong)] py-3 pr-6 text-[1rem] font-semibold`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, index) => (
                <td
                  key={`${row[0]}-${index}`}
                  className="border-b border-[var(--line)] py-4 pr-6 align-top text-[0.95rem] leading-relaxed text-[var(--text-muted)]"
                >
                  {index === 0 ? (
                    <span className="font-medium text-[var(--text)]">{cell}</span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="body-copy mt-6 mx-auto max-w-[70ch]">{note}</p>
    </div>
  );
}
