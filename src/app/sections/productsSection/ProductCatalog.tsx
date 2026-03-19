import Section from "@/src/components/ui/Theme/ThemeWrapper";
import Container from "@/src/components/layout/Container";
export default function ProductCatalog() {
  return (
    <>
      <Section theme="dark" className="min-h-screen">
        <Container>
          <div className="py-40">
            <span>PRODUCT CATALOG</span>
          </div>
        </Container>
      </Section>
    </>
  );
}
