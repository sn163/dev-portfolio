import { FadeInSection } from "../ui/FadeInSection";
import { Container } from "../ui/Container";
import { Carousel } from "../ui/Carousel";
import { workData } from "src/app/_data/workData";

export default function Work() {
  return (
    <section
      id="work"
      className="m-0 w-full min-w-3.5 scroll-mt-16 overflow-hidden bg-[#272727]"
    >
      <Container className="min-h-screen">
        <div className="section-title-container">
          <h2 className="section-title-light">WORK</h2>
          <div className="section-title-bar" />
        </div>
        <FadeInSection classProps="flex m-auto max-w-screen-lg">
          <Carousel work={workData} />
        </FadeInSection>
      </Container>
    </section>
  );
}
