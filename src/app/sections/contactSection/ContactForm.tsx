import React from "react";
import Section from "@/src/components/ui/Theme/ThemeWrapper";
import Container from "@/src/components/layout/Container";

function ContactForm() {
  return (
    <Section theme="dark" className="min-h-screen">
      <Container>
        <div className="py-40">Contact Form</div>
      </Container>
    </Section>
  );
}

export default ContactForm;
