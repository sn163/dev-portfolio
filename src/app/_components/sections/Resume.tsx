import { cvData } from "../../_data/cvData";
import uuid from "react-uuid";
import { Container } from "../ui/Container";
import Link from "next/link";

export default function Resume() {
  const { jobs, education, projects, achievements, skills } = cvData;

  const jobsList = jobs.map((x) => {
    const bulletpoints = x.description.map((x) => (
      <li key={`jobs-${uuid()}`}>{x}</li>
    ));

    const resumeTitle = x.link ? (
      <a href={x.link} target="_blank" rel="noreferrer noopener">
        {x.company}
      </a>
    ) : (
      x.company
    );

    return (
      <div key={uuid()}>
        <h3 className="resume-title text-4xl text-primary">{resumeTitle}</h3>
        <div className="prose mb-4 mt-2 space-x-1">
          <span className="text-lg font-light italic">
            {x.title}{" "}
            <span className="resume-date text-center text-sm uppercase tracking-wider text-[#acacac]">
              {x.date}
            </span>
          </span>
        </div>
        <ul className="prose mx-5 list-disc space-y-3">{bulletpoints}</ul>
      </div>
    );
  });

  const projectsList = projects.map((x) => {
    const bulletpoints = x.description.map((x) => (
      <li key={`projects-${uuid()}`}>{x}</li>
    ));

    return (
      <div key={uuid()}>
        <h3 className="resume-title text-4xl text-primary">
          {x.project_title}
        </h3>
        <div className="mb-4 mt-2">
          <span className="prose text-lg font-light italic">{x.subtitle}</span>
        </div>
        <ul className="prose mx-5 list-disc space-y-3">{bulletpoints}</ul>
      </div>
    );
  });

  const achievementsList = achievements.map((x) => {
    return (
      <div key={uuid()}>
        <h3 className="resume-title mb-3 text-4xl text-primary">{x.title}</h3>
        <span className="prose">{x.description}</span>
      </div>
    );
  });
  const divider = <hr className="h-0.5 border-0 bg-[#d0d1d1]" />;
  const schoolsList = education.map((x) => {
    return (
      <div key={uuid()}>
        <h3 className="resume-title text-4xl text-primary">{x.school_name}</h3>
        <div className="mb-2 mt-2">
          <span className="prose text-lg">{x.description}</span>
          {x.major && (
            <span className="major prose text-lg font-light italic">
              {x.major}
            </span>
          )}
        </div>
        <span className="prose mb-2">{x.location}</span>
      </div>
    );
  });

  const skillsList = skills.map((x) => (
    <li
      key={`skills-${uuid()}`}
      className="prose-sm m-1 rounded-md bg-primary px-2.5 py-1 font-semibold text-white"
    >
      {x}
    </li>
  ));

  return (
    <section
      id="resume"
      className="h-full w-full scroll-mt-16 overflow-hidden bg-base-100"
    >
      <Container className="h-full">
        <div className="section-title-container">
          <h2 className="section-title-dark">RESUME</h2>
          <div className="section-title-bar" />
          <div className="mt-10 flex space-x-4">
            <Link
              href="/sonny_nguyen_cv.pdf"
              className="btn"
              rel="noreferrer noopener"
              target="_blank"
            >
              VIEW PDF
            </Link>
            <Link
              href="/sonny_nguyen_cv.pdf"
              className="btn"
              download="sonny_nguyen_resume.pdf"
            >
              DOWNLOAD PDF
            </Link>
          </div>
        </div>
        <ul className="flex max-w-5xl list-disc flex-col justify-center space-y-20 px-12 py-20">
          <li
            key={`career-section-${uuid()}`}
            className="flex justify-start gap-2"
          >
            <div className="resume-header mt-2 flex justify-start">CAREER</div>
            <div className="space-y-12">{jobsList}</div>
          </li>
          {divider}
          <li
            key={`projects-section-${uuid()}`}
            className="flex justify-start gap-2"
          >
            <div className="resume-header mt-2 flex justify-start">
              PROJECTS
            </div>
            <div className="space-y-12">{projectsList}</div>
          </li>
          {divider}
          <li
            key={`achievements-section-${uuid()}`}
            className="flex justify-start gap-2"
          >
            <div className="resume-header mt-2 flex justify-start">
              ACHIEVEMENTS
            </div>
            <div className="space-y-12">{achievementsList}</div>
          </li>
          {divider}
          <li
            key={`skills-section-${uuid()}`}
            className="flex justify-start gap-2"
          >
            <div className="resume-header mt-2 flex justify-start">SKILLS</div>
            <div>
              <ul className="my-2 flex flex-wrap">{skillsList}</ul>
            </div>
          </li>
          {divider}
          <li
            key={`education-section-${uuid()}`}
            className="resume-content-item flex justify-start gap-2"
          >
            <div className="resume-header mt-2 flex justify-start">
              EDUCATION
            </div>
            <div className="space-y-12">{schoolsList}</div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
