import uuid from "react-uuid";
import { FadeInSection } from "../modules/FadeInSection";

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
  const interviewHubSkills = [
    "React",
    "JavaScript",
    "Node",
    "React Router",
    "Bootstrap",
    "WebRTC",
    "PostgreSQL",
    "HTML",
    "CSS",
  ];

  const projectSkills = (skillsList: string[]) => {
    return skillsList.map((x) => (
      <li
        key={`skills-${uuid()}`}
        className="project-skill-list-item text-base"
      >
        {x}
      </li>
    ));
  };

  return (
    <section
      id="work"
      className="s-work container-fluid flex h-full flex-col items-center px-20 py-16"
    >
      <div className="section-title-container">
        <h2 className="section-title-light">WORK</h2>
        <div className="section-title-bar" />
      </div>
      <FadeInSection classProps="flex flex-col m-auto w-full my-20 space-y-32">
        <div className="flex items-center space-x-32">
          <div className="project-container  rounded-lg p-6 duration-500 ease-in-out hover:scale-105 hover:animate-pulse">
            <a href="https://www.dropps.com/" target="_blank" rel="noreferrer">
              <picture>
                <source srcSet="/dropps.webp" type="image/webp"></source>
                <source srcSet="/dropps.jpg" type="image/jpeg"></source>
                <img alt="dropps" src="/dropps.jpg" className="h-full w-full" />
              </picture>
            </a>
          </div>
          <div className="max-w-xl">
            <div className="project-title flex flex-col">
              <a
                href="https://www.dropps.com/"
                target="_blank"
                rel="noreferrer"
                className="my-4"
              >
                Dropps
              </a>
              <div className="project-subtitle mb-4">
                Eco-friendly Household/Laundry E-commerce
              </div>
              <ul className="skill-list flex-wrap">
                {projectSkills(droppsSkills)}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-32">
          <div className="project-container  rounded-lg p-6 duration-500 ease-in-out hover:scale-105 hover:animate-pulse">
            <a href="https://www.overvue.org/" target="_blank" rel="noreferrer">
              <picture>
                <source srcSet="/overvue.webp" type="image/webp"></source>
                <source srcSet="/overvue.jpg" type="image/jpeg"></source>
                <img
                  alt="overvue"
                  src="/overvue.jpg"
                  className="h-full w-full"
                />
              </picture>
            </a>
          </div>
          <div className="max-w-xl">
            <div className="project-title flex flex-col">
              <a
                href="https://www.overvue.org/"
                target="_blank"
                rel="noreferrer"
                className="my-4"
              >
                OverVue
              </a>
              <div className="project-subtitle mb-4">
                Prototyping Development Tool for Vue Developers
              </div>
              <ul className="skill-list flex-wrap">
                {projectSkills(overVueSkills)}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-32">
          <div className="project-container  rounded-lg p-6 duration-500 ease-in-out hover:scale-105 hover:animate-pulse">
            <a
              href="https://www.mysociallite.com/"
              target="_blank"
              rel="noreferrer"
            >
              <picture>
                <source srcSet="/sociallite.webp" type="image/webp"></source>
                <source srcSet="/sociallite.jpg" type="image/jpeg"></source>
                <img
                  alt="sociallite"
                  src="/sociallite.jpg"
                  className="h-full w-full"
                />
              </picture>
            </a>
          </div>
          <div className="max-w-xl">
            <div className="project-title flex flex-col">
              <a
                href="https://www.mysociallite.com/"
                target="_blank"
                rel="noreferrer"
                className="my-4"
              >
                Social Lite
              </a>
              <div className="project-subtitle mb-4">
                Event Entertainment Services Provider
              </div>
              <ul className="skill-list flex-wrap">
                {projectSkills(socialLiteSkills)}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-32">
          <div className="project-container rounded-lg p-6 duration-500 ease-in-out hover:scale-105 hover:animate-pulse">
            <a
              href="https://github.com/tanpeterson/Interview-Hub"
              target="_blank"
              rel="noreferrer"
            >
              <picture>
                <source srcSet="/interviewhub.jpg" type="image/jpeg"></source>
                <img
                  alt="interview hub"
                  src="/interviewhub.jpg"
                  className="h-full w-full"
                />
              </picture>
            </a>
          </div>
          <div className="max-w-xl">
            <div className="project-title flex flex-col">
              <a
                href="https://github.com/tanpeterson/Interview-Hub"
                target="_blank"
                rel="noreferrer"
                className="my-4"
              >
                InterviewHub
              </a>
              <div className="project-subtitle mb-4">
                Interview Review & Preparation Platform
              </div>
              <ul className="skill-list flex-wrap">
                {projectSkills(interviewHubSkills)}
              </ul>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
