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
import Facebook from "../icons/facebook";
import Instagram from "../icons/instagram";
import WhatsApp from "../icons/whatsapp";

// Cambia esto por el dominio real.
const baseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASE_URL
    : "http://localhost:3000";

export function BienvenidoEmail() {
  return (
    <Html>
      <Head />
      <Preview>¡Bienvenido al newsletter de LAS LASAÑAS! 🎉</Preview>
      <Body style={styles.main}>
        <Container style={styles.container}>
          <Section style={styles.center}>
            <Img
              src={`${baseUrl}/images/logos/logo_black.webp`}
              width="156"
              height="155"
              alt="Logo de Las Lasañas"
              style={styles.logo}
            />
            <Heading style={styles.heading}>
              ¡Gracias por suscribirte al newsletter de <br />
              <span style={styles.highlight}>LAS LASAÑAS</span>!<p>🎉🎉🎉</p>
            </Heading>
            <Text style={styles.text}>
              Estamos emocionados de tenerte como parte de nuestra comunidad. A
              partir de ahora, recibirás nuestras
              <strong> promociones exclusivas</strong>, lanzamientos de nuevos
              productos y <strong> paquetes especiales</strong>. Además, te
              compartiremos <strong> tips increíbles</strong> para acompañar tus
              lasañas y hacer tus comidas aún más deliciosas. 🍝✨
            </Text>
            <Text style={styles.text}>
              Prepárate para disfrutar de las mejores lasañas y ensaladas con{" "}
              <strong style={styles.highlight}>sabor casero</strong>.
            </Text>
          </Section>

          <Section style={styles.footer}>
            <div style={styles.socialLinks}>
              <a
                href="https://www.facebook.com/p/Las-lasa%C3%B1as-LM-61556244630807/"
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/laslasanaslm?igsh=OGo3Z2tkYmM4Z3Jh"
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
              >
                <Instagram />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5216681500100&text=%C2%A1Hola%2C%20me%20interesa%20hacer%20un%20pedido%20de%20Lasa%C3%B1as!%20%3AD"
                target="_blank"
                rel="noreferrer"
                style={styles.socialLink}
              >
                <WhatsApp />
              </a>
            </div>
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

export default BienvenidoEmail;

const styles = {
  main: {
    backgroundColor: "oklch(23.08% 0 0)",
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
  logo: {
    margin: "0 auto",
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
  socialLinks: {
    display: "flex",
    gap: "10px",
    marginBottom: "16px",
    color: "#ffffff",
    height: "24px",
    justifyContent: "center",
  },
  socialLink: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "24px",
    height: "24px",
    color: "#ffffff",
  },
} as Record<string, React.CSSProperties>;
