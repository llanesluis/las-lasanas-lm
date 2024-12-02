import BgCircle from "@/components/ui/bg-circle";
import Hero from "./_sections/hero";
import Menu from "./_sections/menu";
import { Container, Section } from "@/components/ui/wrappers";

export default function Home() {
  return (
    <main className="relative isolate overflow-clip">
      <BgCircle className="-translate-x-[42%] -translate-y-[60%]" />
      <BgCircle className="-translate-x-[38%] -translate-y-[65%]" />
      <BgCircle className="-translate-x-[32%] -translate-y-[55%]" />

      <Hero />

      <Menu />

      <Container>
        <Section className="h-screen inset-ring-4 inset-ring-red-500"></Section>
      </Container>
    </main>
  );
}
