import { cvData } from "../../_data/cvData";
import { v4 as uuidv4 } from "uuid";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export default function Resume() {
  const { jobs, education, projects, achievements, skills } = cvData;

  const jobsList = jobs.map((x) => {
    const bulletpoints = x.description.map((x) => <li key={`jobs-${uuidv4()}`}>{x}</li>);
    const resumeTitle = x.link ? (
      <a href={x.link} target="_blank" rel="noreferrer noopener">
        {x.company}
      </a>
    ) : (
      x.company
    );
    return (
      <div key={uuidv4()}>
        <h3 className="resume-title text-3xl text-primary">{resumeTitle}</h3>
        <div className="my-4 space-x-1">
          <span className="text-lg font-light italic">
            {x.title}{" "}
            <span className="resume-date text-center text-sm uppercase tracking-wider text-[#acacac]">{x.date}</span>
          </span>
        </div>
        <ul className="prose mx-5 list-disc space-y-3">{bulletpoints}</ul>
      </div>
    );
  });

  const projectsList = projects.map((x) => {
    const bulletpoints = x.description.map((x) => <li key={`projects-${uuidv4()}`}>{x}</li>);
    return (
      <div key={uuidv4()}>
        <h3 className="font-raleway text-3xl text-primary">{x.project_title}</h3>
        <div className="my-4">
          <span className="text-lg font-light italic">{x.subtitle}</span>
        </div>
        <ul className="prose mx-5 list-disc space-y-3">{bulletpoints}</ul>
      </div>
    );
  });

  const achievementsList = achievements.map((x) => {
    return (
      <div key={uuidv4()}>
        <h3 className="mb-3 font-raleway text-3xl text-primary">{x.title}</h3>
        <span className="prose">{x.description}</span>
      </div>
    );
  });
  const divider = <hr className="h-0.5 border-0 bg-[#d0d1d1]" />;
  const schoolsList = education.map((x) => {
    return (
      <div key={uuidv4()}>
        <h3 className="font-raleway text-3xl text-primary">{x.school_name}</h3>
        <div className="mb-2 mt-2">
          <span className="text-lg">{x.description}</span>
          {x.major && <span className="major prose text-lg font-light italic">{x.major}</span>}
        </div>
        <span className="prose mb-2">{x.location}</span>
      </div>
    );
  });

  const skillsList = (skillsCategory: string[]) =>
    skillsCategory.map((x) => (
      <li
        key={`skills-${uuidv4()}`}
        className="prose-sm m-1 rounded-md bg-primary px-2.5 py-1 font-semibold text-white"
      >
        {x}
      </li>
    ));

  return (
    <section id="resume" className="h-full w-full overflow-hidden bg-base-100">
      <Container className="h-full">
        <div className="section-title-container">
          <h2 className="section-title-dark">RESUME</h2>
          <div className="section-title-bar" />
          <div className="mt-10 flex space-x-4">
            <Button variant="link" size="lg" href="/sonny_nguyen_cv.pdf" rel="noreferrer noopener" target="_blank">
              VIEW PDF
            </Button>
            <Button variant="link" size="lg" href="/sonny_nguyen_cv.pdf" download="sonny_nguyen_resume.pdf">
              DOWNLOAD PDF
            </Button>
          </div>
        </div>
        <ul className="flex max-w-5xl list-disc flex-col justify-center space-y-20 px-12 py-20">
          <li key={`career-section-${uuidv4()}`} className="flex justify-start gap-2">
            <div className="resume-header mt-2 flex justify-start">CAREER</div>
            <div className="space-y-12">{jobsList}</div>
          </li>
          {divider}
          <li key={`projects-section-${uuidv4()}`} className="flex justify-start gap-2">
            <div className="resume-header mt-2 flex justify-start">PROJECTS</div>
            <div className="space-y-12">{projectsList}</div>
          </li>
          {divider}
          <li key={`achievements-section-${uuidv4()}`} className="flex justify-start gap-2">
            <div className="resume-header mt-2 flex justify-start">ACHIEVEMENTS</div>
            <div className="space-y-12">{achievementsList}</div>
          </li>
          {divider}
          <li key={`skills-section-${uuidv4()}`} className="flex justify-start gap-2">
            <div className="resume-header mt-2 flex justify-start">SKILLS</div>
            <div className="skills-title space-y-7">
              <div className="prose prose-xl  font-bold">
                Languages &amp; Concepts:{" "}
                <ul className="my-2 flex list-none flex-wrap pl-0">{skillsList(skills.languages)}</ul>
              </div>
              <div className="prose prose-xl font-bold">
                Frameworks &amp; Libraries:{" "}
                <ul className="my-2 flex list-none flex-wrap pl-0">{skillsList(skills.frameworks)}</ul>{" "}
              </div>
              <div className="prose prose-xl font-bold">
                Tools &amp; Technologies:{" "}
                <ul className="my-2 flex list-none flex-wrap pl-0">{skillsList(skills.tools)}</ul>{" "}
              </div>
              <div className="prose prose-xl font-bold">
                UI / UX: <ul className="my-2 flex list-none flex-wrap pl-0">{skillsList(skills.ui)}</ul>{" "}
              </div>
              <div className="prose prose-xl font-bold">
                Databases &amp; Cloud:{" "}
                <ul className="my-2 flex list-none flex-wrap pl-0">{skillsList(skills.databases)}</ul>{" "}
              </div>
            </div>
          </li>
          {divider}
          <li key={`education-section-${uuidv4()}`} className="resume-content-item flex justify-start gap-2">
            <div className="resume-header mt-2 flex justify-start">EDUCATION</div>
            <div className="space-y-12">{schoolsList}</div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
