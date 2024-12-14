import { FadeInSection } from "../ui/FadeInSection";
import { Container } from "../ui/Container";
import { CardSlider } from "../ui/CardSlider";
import { workData } from "src/app/_data/workData";

export default function Work() {
  return (
    <section id="work" className="w-full min-w-3.5 overflow-hidden bg-[#272727]">
      <Container className="min-h-screen max-w-fit">
        <div className="section-title-container">
          <h2 className="section-title-light">WORK</h2>
          <div className="section-title-bar" />
        </div>
        <FadeInSection classProps="flex m-auto w-full">
          <CardSlider work={workData} />
        </FadeInSection>
      </Container>
    </section>
  );
}
