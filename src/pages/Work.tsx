import { ReactComponent as Overvue } from "../assets/icons/overvue.svg";

export default function Work() {
  return (
    <section id="work" className="s-work container-fluid">
      <div className="flex flex-col items-center">
        <h2 className="section-title-light">WORK</h2>
        <div className="section-title-bar" />
      </div>
      <div className="flex items-center justify-center">
        <div className="project-container mx-20 my-24 flex flex-col items-center justify-center p-0">
          <div className="overvue-text-container flex w-full flex-col items-center justify-center p-4">
            <div className="overvue-title">
              {" "}
              <a
                href="https://www.overvue.org/"
                target="_blank"
                rel="noreferrer"
                className="my-4"
              >
                Over<span>V</span>ue
              </a>
            </div>
            <div className="overvue-subtitle">
              Prototyping Development Tool for Vue Developers
            </div>
          </div>
          <a
            href="https://www.overvue.org/"
            target="_blank"
            rel="noreferrer"
            className="p-2"
          >
            <Overvue className="w-full" />
          </a>
        </div>
      </div>
    </section>
  );
}
