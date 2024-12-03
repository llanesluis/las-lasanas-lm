import { Container, Section } from "@/components/ui/wrappers";
import { BLOG_ENTRIES } from "@/lib/constants/blog";
import Image from "next/image";

const BLOG_ENTRY = BLOG_ENTRIES[1];

export default function Page() {
  return (
    <main className="relative overflow-clip pb-20">
      <Section className="bg-pattern relative isolate h-[35vh] p-0 md:py-0">
        <Container className="content-end py-8 text-center md:py-12">
          <div>
            <p className="bg-accent text-primary-foreground 4 mx-auto mb-2 w-fit rounded-full px-2 py-1 text-xs">
              {BLOG_ENTRY.category}
            </p>
            <h1 className="mx-auto max-w-[800px] font-serif text-[clamp(1.4rem,3.8vw,3rem)] text-balance">
              {BLOG_ENTRY.title}
            </h1>
          </div>
        </Container>
      </Section>

      <Container>
        <Section className="text-muted-foreground md:pb-0">
          <div className="mx-auto -mt-5 mb-5 flex w-fit gap-4 text-center text-xs">
            <p>
              Publicado el: <span className="font-bold">{BLOG_ENTRY.date}</span>
            </p>
            <p>
              Autor: <span className="font-bold">{BLOG_ENTRY.author}</span>
            </p>
          </div>

          <p className="mx-auto text-center">
            La lasaña es un platillo completo y sustancioso, pero no hay nada
            mejor que equilibrar su sabor con una ensalada fresca y ligera. Si
            estás buscando ideas para complementar tu lasaña, aquí te enseñamos
            a preparar la ensalada perfecta.
          </p>

          <Image
            width={800}
            height={533}
            src="/images/blog/preparar-ensalada.jpg"
            alt="Lasaña Navideña"
            className="mx-auto my-6 max-h-[400px] rounded-2xl object-cover object-center"
          />

          <div className="mx-auto max-w-[70ch]">
            <h4 className="text-primary mt-8 font-serif text-[clamp(1.4rem,3.8vw,2.2rem)] text-balance">
              1. Elige una base fresca y verde
            </h4>
            <p>
              La base de una buena ensalada son las hojas verdes. Opta por
              mezclas como:
            </p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Espinacas baby:</strong> Suave y con un sabor
                ligeramente dulce.
              </li>
              <li>
                <strong>Lechuga romana:</strong> Crujiente y clásica.
              </li>
              <li>
                <strong>Arúgula:</strong> Ideal si prefieres un toque
                ligeramente picante.
              </li>
            </ul>

            <h4 className="text-primary mt-8 font-serif text-[clamp(1.4rem,3.8vw,2.2rem)] text-balance">
              2. Agrega color y sabor con vegetales
            </h4>
            <p>
              Incorpora ingredientes frescos y vibrantes que contrasten con la
              lasaña:
            </p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Tomates cherry:</strong> Jugosos y dulces, son un
                clásico en las ensaladas.
              </li>
              <li>
                <strong>Pepino:</strong> Aporta frescura y un toque crujiente.
              </li>
              <li>
                <strong>Zanahoria rallada:</strong> Añade un toque dulce y
                colorido.
              </li>
              <li>
                <strong>Pimientos:</strong> Usa pimientos rojos o amarillos
                asados para dar un sabor ahumado.
              </li>
            </ul>
            <h4 className="text-primary mt-8 font-serif text-[clamp(1.4rem,3.8vw,2.2rem)] text-balance">
              3. Incluye algo crujiente
            </h4>
            <p>
              Para darle un toque especial, añade ingredientes crujientes como:
            </p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Nueces o almendras tostadas.</strong>
              </li>
              <li>
                <strong>Crutones caseros</strong> (puedes prepararlos con pan
                viejo y hierbas).
              </li>
              <li>
                <strong>Semillas de girasol o calabaza.</strong>
              </li>
            </ul>

            <h4 className="text-primary mt-8 font-serif text-[clamp(1.4rem,3.8vw,2.2rem)] text-balance">
              4. Equilibra con un ingrediente cremoso
            </h4>
            <p>Agrega un elemento suave que complemente los sabores:</p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Queso feta o mozzarella en cubos.</strong>
              </li>
              <li>
                <strong>Aguacate en rodajas.</strong>
              </li>
              <li>
                <strong>Un huevo cocido cortado en trozos</strong> si buscas
                algo más sustancioso.
              </li>
            </ul>

            <h4 className="text-primary mt-8 font-serif text-[clamp(1.4rem,3.8vw,2.2rem)] text-balance">
              5. Prepara un aderezo ligero
            </h4>
            <p>
              El aderezo es clave para resaltar todos los sabores. Prueba esta
              receta fácil y deliciosa:
            </p>
            <ul className="list-disc pl-8">
              <li>
                <strong>2 cucharadas de aceite de oliva.</strong>
              </li>
              <li>
                <strong>
                  1 cucharada de jugo de limón o vinagre balsámico.
                </strong>
              </li>
              <li>
                <strong>1 cucharadita de miel.</strong>
              </li>
              <li>
                <strong>Sal y pimienta al gusto.</strong>
              </li>
            </ul>
            <p className="mt-2">
              Mezcla bien y vierte sobre la ensalada justo antes de servir.
            </p>

            <h4 className="text-primary mt-8 font-serif text-[clamp(1.4rem,3.8vw,2.2rem)] text-balance">
              6. Opcional: Un toque de fruta
            </h4>
            <p>Para un contraste interesante, puedes añadir frutas como:</p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Rodajas de manzana verde.</strong>
              </li>
              <li>
                <strong>Arándanos secos o frescos.</strong>
              </li>
              <li>
                <strong>Gajos de naranja.</strong>
              </li>
            </ul>

            <h4 className="text-primary mt-8 font-serif text-[clamp(1.4rem,3.8vw,2.2rem)] text-balance">
              7. Montaje y presentación
            </h4>
            <p>
              Por último, coloca todos los ingredientes en un bowl grande,
              mezcla suavemente y sirve en platos individuales o como centro de
              mesa.
            </p>
            <p className="mt-2">
              Con esta ensalada fresca y equilibrada, tu lasaña tendrá el
              acompañamiento ideal para una comida inolvidable.
            </p>

            <Image
              width={800}
              height={533}
              src="/images/blog/ensalada-lista.jpg"
              alt="Lasaña Navideña"
              className="mx-auto my-6 max-h-[450px] rounded-2xl object-cover object-bottom"
            />

            <p className="text-accent mt-12 text-center text-[clamp(1.4rem,3.8vw,1.7rem)] font-bold uppercase">
              <span>¡Disfruta y buen provecho!</span>
            </p>
          </div>
        </Section>
      </Container>
    </main>
  );
}
