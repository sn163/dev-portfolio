export default function Work() {
  return (
    <section id="work" className="s-work container-fluid">
      <div className="mt-12 flex flex-col items-center">
        <h2 className="section-title-light">WORK</h2>
        <div className="section-title-bar" />
      </div>
      <div className="flex items-center justify-center">
        <div className="project-container mx-20 my-16 flex flex-col items-center justify-center p-0 shadow-lg ">
          <div className="overvue-text-container flex w-full flex-col items-center justify-center rounded-md px-6 py-4">
            <div className="overvue-title">
              <a
                href="https://www.overvue.org/"
                target="_blank"
                rel="noreferrer"
                className="my-4"
              >
                Over<span>V</span>ue
              </a>
            </div>
            <div className="overvue-subtitle mb-4">
              Prototyping Development Tool for Vue Developers
            </div>
            <a href="https://www.overvue.org/" target="_blank" rel="noreferrer">
              <div className="overvue-project-img rounded-lg duration-500 ease-in-out hover:scale-105 hover:animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
