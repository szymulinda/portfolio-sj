import InteriorPage from "@/components/InteriorPage";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Polityka prywatności",
  description: "Polityka prywatności serwisu szymonjurkun.pl. Treść w kolejnej fali.",
  path: "/polityka-prywatnosci",
});

export default function Page() {
  return (
    <InteriorPage
      label="Informacje"
      title="Polityka prywatności"
      stub="Tu będzie treść polityki prywatności."
      path="/polityka-prywatnosci"
    />
  );
}
