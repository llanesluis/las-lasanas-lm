import { Container, Section } from "@/components/ui/wrappers";
import { BLOG_ENTRIES } from "@/lib/constants/blog";
import Image from "next/image";

const BLOG_ENTRY = BLOG_ENTRIES[0];

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
            La lasaña es un platillo estrella en muchas mesas navideñas, gracias
            a su sabor reconfortante y su versatilidad. Pero para convertirla en
            el centro de una cena inolvidable, es clave elegir los
            acompañamientos adecuados. Aquí te damos algunas ideas para que tu
            lasaña brille como protagonista en esta Navidad.
          </p>

          <Image
            width={800}
            height={533}
            src="/images/blog/cena-navidad.jpg"
            alt="Lasaña Navideña"
            className="mx-auto my-6 rounded-2xl object-cover"
          />

          <div className="mx-auto max-w-[70ch]">
            <h4 className="text-primary mt-8 font-serif text-[clamp(1.4rem,3.8vw,2.2rem)] text-balance">
              1. Entradas ligeras para abrir el apetito
            </h4>
            <p>
              Antes de la lasaña, opta por aperitivos que no saturen el paladar:
            </p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Ensalada fresca:</strong> Una mezcla de hojas verdes,
                nueces y arándanos secos con un aderezo ligero de vinagreta de
                miel y mostaza es ideal.
              </li>
              <li>
                <strong>Sopa cremosa:</strong> Una crema de calabaza o
                espárragos complementará perfectamente el sabor de la lasaña sin
                opacarla.
              </li>
            </ul>
            <h4 className="text-primary mt-8 font-serif text-[clamp(1.4rem,3.8vw,2.2rem)] text-balance">
              2. Guarniciones equilibradas
            </h4>
            <p>
              Para acompañar la lasaña, escoge opciones que añadan texturas y
              sabores contrastantes:
            </p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Pan de ajo o focaccia:</strong> Estos panes con hierbas
                y mantequilla de ajo son un clásico que nunca falla.
              </li>
              <li>
                <strong>Verduras asadas:</strong> Zanahorias, espárragos o coles
                de Bruselas al horno con un toque de aceite de oliva y especias
                resaltarán el plato principal.
              </li>
              <li>
                <strong>Puré de papa o camote:</strong> Su suavidad combina a la
                perfección con la textura de la lasaña.
              </li>
            </ul>
            <h4 className="text-primary mt-8 font-serif text-[clamp(1.4rem,3.8vw,2.2rem)] text-balance">
              3. Bebidas para realzar el sabor
            </h4>
            <p>
              Elige una bebida que complemente los sabores intensos del queso,
              la salsa y la carne o verduras de tu lasaña:
            </p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Vino tinto:</strong> Un Merlot o un Chianti realzará el
                sabor de la lasaña clásica.
              </li>
              <li>
                <strong>Bebida sin alcohol:</strong> Prueba un té helado casero
                con limón o una limonada con romero para un toque fresco.
              </li>
            </ul>
            <h4 className="text-primary mt-8 font-serif text-[clamp(1.4rem,3.8vw,2.2rem)] text-balance">
              4. Postres que cierren con broche de oro
            </h4>
            <p>Una buena cena siempre termina con un dulce final:</p>
            <ul className="list-disc pl-8">
              <li>
                <strong>Tiramisú:</strong> Este postre italiano mantiene la
                temática y es un cierre ligero y elegante.
              </li>
              <li>
                <strong>Buñuelos o galletas navideñas:</strong> Ideales para
                quienes buscan algo más tradicional.
              </li>
              <li>
                <strong>Gelato o helado artesanal:</strong> Acompañado con
                frutos rojos, es una opción fresca y sencilla.
              </li>
            </ul>
            <h4 className="text-primary mt-8 font-serif text-[clamp(1.4rem,3.8vw,2.2rem)] text-balance">
              5. Toques festivos para la mesa
            </h4>
            <p>
              Por último, no olvides que la presentación también importa. Decora
              tu mesa con velas, ramitas de pino y detalles dorados para darle
              un toque navideño.
            </p>
            <p>
              Este año, dale a tu lasaña el lugar que se merece en tu cena de
              Navidad. Con estos acompañamientos, tendrás una comida
              equilibrada, deliciosa y llena de espíritu festivo.
            </p>
            <p className="text-accent mt-12 text-center text-[clamp(1.4rem,3.8vw,1.7rem)] font-bold uppercase">
              <span>¡Felices fiestas y buen provecho!</span>
            </p>
          </div>
        </Section>
      </Container>
    </main>
  );
}
