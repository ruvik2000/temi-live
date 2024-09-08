import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type ContactFormEmailProps = {
  senderName: string;
  senderState: string;
  senderEmail: string;
  senderTel: string;
  message: string;
};

export default function ContactFormEmail({
  senderName,
  senderState,
  senderEmail,
  senderTel,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from temi site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border border-black/10 my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the temi Contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender&apos;s name is: {senderName}</Text>
              <Text>The sender&apos;s state is: {senderState}</Text>
              <Text>The sender&apos;s email is: {senderEmail}</Text>
              <Text>The sender&apos;s telephone number is: {senderTel}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
