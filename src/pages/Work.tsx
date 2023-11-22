import { FadeInSection } from "../modules/FadeInSection";

export default function Work() {
  return (
    <section
      id="work"
      className="s-work container-fluid flex min-h-screen flex-col items-center py-16 "
    >
      <div className="section-title-container">
        <h2 className="section-title-light">WORK</h2>
        <div className="section-title-bar" />
      </div>
      <FadeInSection classProps="flex items-center justify-center m-auto">
        <div className="project-container mx-auto flex flex-wrap items-center justify-center gap-x-16 gap-y-4 p-0 shadow-lg ">
          <div className="overvue-text-container flex flex-col items-center justify-center rounded-md px-6 py-4">
            <div className="overvue-title">
              <a
                href="https://www.overvue.org/"
                target="_blank"
                rel="noreferrer"
                className="my-4"
              >
                OverVue
              </a>
            </div>
            <div className="overvue-subtitle mb-4">
              Prototyping Development Tool for Vue Developers
            </div>
            <a href="https://www.overvue.org/" target="_blank" rel="noreferrer">
              <div className="overvue-project-img rounded-lg duration-500 ease-in-out hover:scale-105 hover:animate-pulse" />
            </a>
          </div>
          <div className="overvue-text-container flex flex-col items-center justify-center rounded-md px-6 py-4">
            <div className="sociallite-title">
              <a
                href="https://www.mysociallite.com/"
                target="_blank"
                rel="noreferrer"
                className="my-4"
              >
                Social Lite
              </a>
            </div>
            <div className="overvue-subtitle mb-4">Event Services Provider</div>
            <a
              href="https://www.mysociallite.com/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="sociallite-project-img rounded-lg duration-500 ease-in-out hover:scale-105 hover:animate-pulse" />
            </a>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
