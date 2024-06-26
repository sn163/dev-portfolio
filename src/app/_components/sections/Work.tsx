import uuid from "react-uuid";
import { FadeInSection } from "../ui/FadeInSection";
import Image from "next/image";
import { Container } from "../ui/Container";

export default function Work() {
  const droppsSkills = [
    "React",
    "React Hooks",
    "TypeScript",
    "Tailwind CSS",
    "Liquid",
    "A/B Tests",
    "Google Cloud Platform (GCP)",
    "GraphQL",
    "Material-UI",
    "Radix UI",
    "Storybook",
    "Shopify Plus",
    "jQuery",
    "HTML",
    "CSS",
  ];
  const overVueSkills = [
    "Vue",
    "JavaScript",
    "Node",
    "HTML",
    "CSS",
    "Quasar Framework",
    "Electron",
    "Slack OAuth",
  ];
  const socialLiteSkills = ["JavaScript", "HTML", "CSS"];

  const projectSkills = (skillsList: string[]) => {
    return skillsList.map((x) => (
      <li
        key={`skills-${uuid()}`}
        className="prose m-1 rounded-md bg-primary px-2 py-0.5 text-white"
      >
        {x}
      </li>
    ));
  };

  return (
    <section
      id="work"
      className="m-0 w-full min-w-3.5 scroll-mt-16 overflow-hidden bg-[#272727]"
    >
      <Container className="h-full">
        <div className="section-title-container">
          <h2 className="section-title-light">WORK</h2>
          <div className="section-title-bar" />
        </div>
        <FadeInSection classProps="flex flex-col m-auto w-full my-20 space-y-32">
          <div className="flex items-center space-x-32">
            <div className="project-container rounded-lg p-6 duration-500 ease-in-out hover:scale-105 hover:animate-pulse">
              <a
                href="https://www.dropps.com/"
                target="_blank"
                title="dropps"
                rel="noreferrer noopener"
              >
                <Image
                  alt="dropps"
                  src="/dropps.jpg"
                  width={520}
                  height={300}
                />
              </a>
            </div>
            <div className="max-w-xl">
              <div className="project-title flex flex-col">
                <a
                  href="https://www.dropps.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="my-4"
                >
                  Dropps
                </a>
                <div className="project-subtitle mb-4">
                  Eco-friendly Household/Laundry E-commerce
                </div>
                <ul className="flex flex-wrap">
                  {projectSkills(droppsSkills)}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-32">
            <div className="project-container rounded-lg p-6 duration-500 ease-in-out hover:scale-105 hover:animate-pulse">
              <a
                href="https://www.overvue.org/"
                target="_blank"
                title="overvue"
                rel="noreferrer noopener"
              >
                <Image
                  alt="overvue"
                  src="/overvue.jpg"
                  width={520}
                  height={300}
                />
              </a>
            </div>
            <div className="max-w-xl">
              <div className="project-title flex flex-col">
                <a
                  href="https://www.overvue.org/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="my-4"
                >
                  OverVue
                </a>
                <div className="project-subtitle mb-4">
                  Prototyping Development Tool for Vue Developers
                </div>
                <ul className="flex flex-wrap">
                  {projectSkills(overVueSkills)}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-32">
            <div className="project-container rounded-lg p-6 duration-500 ease-in-out hover:scale-105 hover:animate-pulse">
              <a
                href="https://www.mysociallite.com/"
                target="_blank"
                title="mysociallite"
                rel="noreferrer noopener"
              >
                <Image
                  alt="sociallite"
                  src="/sociallite.jpg"
                  width={520}
                  height={300}
                />
              </a>
            </div>
            <div className="max-w-xl">
              <div className="project-title flex flex-col">
                <a
                  href="https://www.mysociallite.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="my-4"
                >
                  Social Lite
                </a>
                <div className="project-subtitle mb-4">
                  Event Entertainment Services Provider
                </div>
                <ul className="flex flex-wrap">
                  {projectSkills(socialLiteSkills)}
                </ul>
              </div>
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
