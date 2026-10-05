import { fraunces } from "@/lib/fonts";
import SectionShell from "@/components/SectionShell";
import { InlineLink } from "@/components/InlineLink";
import { problem } from "@/lib/content";

const turnSentence = "Buduję inaczej.";

function processNote() {
  return (
    <>
      {" "}
      Cały proces opisuję na osobnej stronie:{" "}
      <InlineLink href="/tworzenie-stron-www-opole">tworzenie stron www w Opolu</InlineLink>.
    </>
  );
}

export default function ProblemSection() {
  return (
    <SectionShell id="dlaczego" label={problem.label}>
      <h2 className={fraunces.className}>
        {problem.heading} <em>{problem.headingAccent}</em>
      </h2>
      <div className="problem-prose">
        {problem.paragraphs.map((paragraph, index) => {
          const note = index === problem.paragraphs.length - 1 ? processNote() : null;
          const isTurn = paragraph.startsWith(turnSentence);

          if (isTurn) {
            return (
              <div key={paragraph}>
                <p className="problem-turn">{turnSentence}</p>
                <p className="problem-copy">
                  {paragraph.slice(turnSentence.length).trim()}
                  {note}
                </p>
              </div>
            );
          }

          return (
            <p key={paragraph} className="problem-copy">
              {paragraph}
              {note}
            </p>
          );
        })}
        <p className="problem-guarantee">{problem.guarantee}</p>
      </div>
    </SectionShell>
  );
}
