import { Container, Section } from "@/components/ui/wrappers";
import BlogEntry from "./_components/BlogEntry";
import { BLOG_ENTRIES } from "@/lib/constants/blog";

function Page() {
  return (
    <main className="relative overflow-clip pb-20">
      <Section className="bg-pattern h-[35vh]">
        <Container className="content-end text-center font-serif">
          <h1 className="text-6xl">BLOG</h1>
        </Container>
      </Section>

      <Container>
        <Section className="md:pb-0">
          <div className="flex w-full flex-wrap md:mb-12">
            <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
              <h1 className="title-font mb-2 pr-2 text-2xl font-medium sm:text-3xl">
                El arte de disfrutar la lasaña en esta temporada navideña
              </h1>
              <div className="bg-accent h-1 w-20 rounded"></div>
            </div>
            <p className="text-muted-foreground w-full leading-relaxed lg:w-1/2">
              La lasaña no es solo un platillo, es el corazón de tus
              celebraciones. Por ello, queremos ayudarte a que cada comida sea
              especial. En nuestro blog, encontrarás consejos y recetas para
              disfrutar al máximo tu lasaña.
            </p>
          </div>
        </Section>

        <Section>
          <div className="grid-fill grid grid-rows-[160px,auto,auto,auto] gap-6">
            {BLOG_ENTRIES.map((entry) => (
              <BlogEntry key={entry.title} {...entry} />
            ))}
          </div>
        </Section>
      </Container>
    </main>
  );
}

export default Page;
