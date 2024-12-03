import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASE_URL
    : "http://localhost:3000";

export function RappiEmail() {
  return (
    <Html>
      <Head />
      <Preview>¡Las Lasañas ahora están en Rappi! 🍝✨</Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Section style={styles.center}>
            <div style={styles.logos}>
              <Img
                src={`${baseUrl}/images/logos/logo_black.webp`}
                width="96"
                height="95"
                alt="Logo de Las Lasañas"
                style={styles.logo}
              />
              <span style={styles.collab}>✕</span>
              <Img
                src={`${baseUrl}/images/rappi/rappi-logo-efecto.webp`}
                height="90"
                alt="Logo de Las Lasañas"
                style={styles.logo}
              />
            </div>

            <Heading style={styles.heading}>
              Ahora puedes pedir <br />
              <span style={styles.highlight}>LAS LASAÑAS</span> en{" "}
              <strong>Rappi</strong> 📱✨
            </Heading>
            <Text style={styles.text}>
              Disfruta de nuestras deliciosas lasañas y ensaladas con{" "}
              <strong style={styles.highlight}>sabor casero</strong>, ahora con
              la comodidad de un solo clic.
            </Text>

            <Img
              src={`${baseUrl}/images/rappi/rappi-button-desktop-efecto.webp`}
              width="250"
              style={styles.rappi_button}
            />
          </Section>

          <Img
            src={`${baseUrl}/images/rappi/estamos-en-rappi.webp`}
            style={styles.rappi_banner}
          />

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              ¡Perfectas para satisfacer tu antojo rápido y con sabor casero!
            </Text>
            <Text style={styles.footerText}>
              © {new Date().getFullYear()} LAS LASAÑAS LM. Derechos reservados.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

export default RappiEmail;

const styles = {
  main: {
    backgroundColor: "oklch(23.08% 0 0)", // Color primario.
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  },
  container: {
    margin: "20px auto",
    padding: "20px",
    width: "600px",
    maxWidth: "100%",
    backgroundColor: "#ffffff",
    backgroundImage: `linear-gradient(to bottom,rgba(255, 255, 255, 0.95),rgba(255, 255, 255, 0.95)), url("${baseUrl}/images/lasagna-pattern.webp")`,

    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  center: {
    textAlign: "center",
    padding: "20px 0",
  },
  logo: {},
  logos: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  collab: {
    fontSize: "36px",
    fontWeight: "bold",
  },
  rappi_button: {
    width: "80%",
    height: "auto",
    maxWidth: "250px",
    margin: "auto",
  },
  rappi_banner: {
    width: "100%",
    height: "auto",
    maxWidth: "700px",
  },
  heading: {
    fontSize: "24px",
    color: "oklch(45.33% 0.1523 25.71)", // Color accent.
    fontWeight: "bold",
    margin: "20px 0",
    fontFamily: "DMSerifDisplay, serif",
  },
  highlight: {
    color: "oklch(45.33% 0.1523 25.71)", // Color accent.
  },
  text: {
    fontSize: "16px",
    color: "#555555",
    lineHeight: "1.5",
    margin: "10px 0",
  },
  footer: {
    padding: "16px",
    textAlign: "center",
    borderTop: "1px solid #eeeeee",
    marginTop: "20px",
    backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.9)), url("${baseUrl}/images/lasagna-pattern.webp")`,
    backgroundRepeat: "repeat",
    backgroundSize: "250px",
    backgroundPosition: "top left",
  },
  footerText: {
    fontSize: "12px",
    color: "#cccccc",
    margin: "0",
  },
} as Record<string, React.CSSProperties>;
