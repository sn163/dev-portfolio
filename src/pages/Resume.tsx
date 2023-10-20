import { cvData } from "../components/data/cvData";
import resume from "../assets/sonny_nguyen_cv.pdf";
import uuid from "react-uuid";

export default function Resume() {
  const { jobs, education, projects, achievements, skills } = cvData;

  const jobsList = jobs.map((x) => {
    const bulletpoints = x.description.map((x) => (
      <li className="my-1" key={`jobs-${uuid()}`}>
        {x}
      </li>
    ));

    const resumeTitle = x.link ? (
      <a href={x.link} target="_blank" rel="noreferrer">
        {x.company}
      </a>
    ) : (
      x.company
    );

    return (
      <div key={uuid()}>
        <h3 className="resume-title">{resumeTitle}</h3>
        <div className="mb-4 mt-2 flex space-x-1">
          <span className="sub-title">{x.title}</span>
          <span className="resume-date">{x.date}</span>
        </div>
        <ul className="mx-5 list-disc space-y-2">{bulletpoints}</ul>
      </div>
    );
  });

  const projectsList = projects.map((x) => {
    const bulletpoints = x.description.map((x) => (
      <li className="my-1" key={`projects-${uuid()}`}>
        {x}
      </li>
    ));

    return (
      <div key={uuid()}>
        <h3 className="resume-title">{x.project_title}</h3>
        <div className="mb-4 mt-2">
          <span className="sub-title">{x.subtitle}</span>
        </div>
        <ul className="mx-5 list-disc space-y-2">{bulletpoints}</ul>
      </div>
    );
  });

  const achievementsList = achievements.map((x) => {
    return (
      <div key={uuid()}>
        <h3 className="resume-title mb-3">{x.title}</h3>
        <span>{x.description}</span>
      </div>
    );
  });
  const divider = (
    <hr
      className="mx-3"
      style={{
        background: "#d0d1d1",
        height: "2.5px",
        border: "none",
      }}
    />
  );
  const schoolsList = education.map((x) => {
    return (
      <div key={uuid()}>
        <h3 className="resume-title">{x.school_name}</h3>
        <div className="mb-2 mt-2">
          <span className="sub-title">{x.description}</span>
          {x.major && <span className="major sub-title">{x.major}</span>}
        </div>
        <span className="mb-2">{x.location}</span>
      </div>
    );
  });

  const skillsList = skills.map((x) => (
    <li key={`skills-${uuid()}`} className="skill-list-item">
      {x}
    </li>
  ));

  return (
    <section id="resume" className="s-resume container-fluid">
      <div className="mt-12 flex flex-col items-center">
        <h2 className="section-title-dark">RESUME</h2>
        <div className="section-title-bar" />
        <div className="mt-10 flex space-x-4">
          <a href={resume} className="btn" rel="noreferrer" target="_blank">
            VIEW ONLINE
          </a>
          <a href={resume} className="btn" download="sonny_nguyen_resume.pdf">
            DOWNLOAD PDF
          </a>
        </div>
      </div>
      <ul className="resume-content m-auto flex flex-col justify-center space-y-20 px-12 py-20">
        <li
          key={`career-section-${uuid()}`}
          className="resume-content-item flex justify-start gap-2"
        >
          <div className="resume-header mt-2 flex justify-start">CAREER</div>
          <div className="space-y-6">{jobsList}</div>
        </li>
        {divider}
        <li
          key={`projects-section-${uuid()}`}
          className="resume-content-item flex justify-start gap-2"
        >
          <div className="resume-header mt-2 flex justify-start">PROJECTS</div>
          <div className="space-y-6">{projectsList}</div>
        </li>
        {divider}
        <li
          key={`achievements-section-${uuid()}`}
          className="resume-content-item flex justify-start gap-2"
        >
          <div className="resume-header mt-2 flex justify-start">
            ACHIEVEMENTS
          </div>
          <div className="space-y-6">{achievementsList}</div>
        </li>
        {divider}
        <li
          key={`skills-section-${uuid()}`}
          className="flex justify-start gap-2"
        >
          <div className="resume-header mt-2 flex justify-start">SKILLS</div>
          <div>
            <ul className="skill-list my-2 flex-wrap">{skillsList}</ul>
          </div>
        </li>
        {divider}
        <li
          key={`education-section-${uuid()}`}
          className="resume-content-item flex justify-start gap-2"
        >
          <div className="resume-header mt-2 flex justify-start">EDUCATION</div>
          <div className="space-y-6">{schoolsList}</div>
        </li>
      </ul>
    </section>
  );
}
