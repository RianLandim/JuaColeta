import {
  Html,
  Preview,
  Container,
  Section,
  Img,
  Hr,
  Button,
  Link,
  Head,
  Body,
  Text,
} from '@react-email/components';
import * as React from 'react';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

const StripeWelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>Agora você está pronto para gerenciar seu negocio.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/stripe-logo.png`}
            width="49"
            height="21"
            alt="Stripe"
          />
          <Hr style={hr} />
          <Text style={paragraph}>
            Obrigado por nos confiar suas informações para criar uma conta.
            Agora você está pronto para gerenciar seu negocio!
          </Text>
          <Text style={paragraph}>
            Você poder ver seus veiculos, rotas e feedbacks diretamente do
            sistema.
          </Text>
          <Button style={button} href="https://dashboard.stripe.com/login">
            Veja seu Dashboard
          </Button>
          <Hr style={hr} />
          <Text style={paragraph}>
            Se você não finalizaou sua integração então veja a documentação.
            <Link style={anchor} href="https://stripe.com/docs">
              docs
            </Link>
          </Text>
          <Text style={paragraph}>
            Nos vamos estar aqui para ajudar em qualquer passo ao longo do
            caminho. Você pode encontrar respostas para a maioria das perguntar
            e se manter atualizado com a gente.
            <Link style={anchor} href="https://support.stripe.com/">
              suporte site
            </Link>
            .
          </Text>
          <Text style={paragraph}>— Time Fleetmanagement</Text>
          <Hr style={hr} />
          <Text style={footer}>
            FleetManagement, 173 Avenida Costa Cavalcante, Barbalha, CE
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default StripeWelcomeEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const paragraph = {
  color: '#525f7f',

  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const anchor = {
  color: '#556cd6',
};

const button = {
  backgroundColor: '#656ee8',
  borderRadius: '5px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
  padding: '10px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};
