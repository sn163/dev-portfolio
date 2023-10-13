import { Fragment } from "react";
import { ListGroup } from "react-bootstrap";
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

    return (
      <Fragment key={uuid()}>
        <h3 className="h2">{x.company}</h3>
        <div className="mt-2 flex space-x-1">
          <span className="sub-title">{x.title}</span>
          <span className="resume-date">{x.date}</span>
        </div>
        <ul>{bulletpoints}</ul>
      </Fragment>
    );
  });

  const projectsList = projects.map((x) => {
    const bulletpoints = x.description.map((x) => (
      <li className="my-1" key={`projects-${uuid()}`}>
        {x}
      </li>
    ));

    return (
      <Fragment key={uuid()}>
        <h3 className="h2">{x.project_title}</h3>
        <div className="mt-2 flex space-x-1">
          <span className="sub-title">{x.subtitle}</span>
        </div>
        <ul>{bulletpoints}</ul>
      </Fragment>
    );
  });

  const achievementsList = achievements.map((x) => {
    return (
      <Fragment key={uuid()}>
        <div className="mb-4">
          <h3 className="h2">{x.title}</h3>
          <span>{x.description}</span>
        </div>
      </Fragment>
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
      <Fragment key={uuid()}>
        <h3 className="h2">{x.school_name}</h3>
        <div className="flex space-x-1">
          <span className="sub-title">{x.description}</span>
          {x.major && <span className="major sub-title">{x.major}</span>}
        </div>
        <span className="mb-2">{x.location}</span>
      </Fragment>
    );
  });

  const skillsList = skills.map((x) => (
    <ListGroup.Item key={`skills-${uuid()}`} className="m-1 rounded py-1">
      {x}
    </ListGroup.Item>
  ));

  return (
    <section id="resume" className="s-resume container-fluid">
      <div className="flex flex-col items-center">
        <h2 className="section-title-dark">RESUME</h2>
        <div className="section-title-bar" />
        <div className="mt-10 flex space-x-4">
          <a
            href={resume}
            className="btn btn-outline text-light"
            rel="noreferrer"
            target="_blank"
          >
            VIEW ONLINE
          </a>
          <a
            href={resume}
            className="btn btn-outline text-light"
            download="sonny_nguyen_resume.pdf"
          >
            DOWNLOAD PDF
          </a>
        </div>
      </div>
      <ListGroup className="resume-content mx-32 flex justify-center space-y-20 p-20">
        <ListGroup.Item
          key={`career-section-${uuid()}`}
          className="text-dark flex justify-start gap-2"
        >
          <div className="resume-header mt-2 flex justify-start">CAREER</div>
          <div className="space-y-6">{jobsList}</div>
        </ListGroup.Item>
        {divider}
        <ListGroup.Item
          key={`projects-section-${uuid()}`}
          className="text-dark flex justify-start gap-2"
        >
          <div className="resume-header mt-2 flex justify-start">PROJECTS</div>
          <div className="space-y-6">{projectsList}</div>
        </ListGroup.Item>
        {divider}
        <ListGroup.Item
          key={`achievements-section-${uuid()}`}
          className="text-dark flex justify-start gap-2"
        >
          <div className="resume-header mt-2 flex justify-start">
            ACHIEVEMENTS
          </div>
          <div className="w-full space-y-8">{achievementsList}</div>
        </ListGroup.Item>
        {divider}
        <ListGroup.Item
          key={`skills-section-${uuid()}`}
          className="text-dark flex justify-start gap-2"
        >
          <div className="resume-header mt-2 flex justify-start">SKILLS</div>
          <div>
            <ListGroup horizontal className="skill-group my-2 flex-wrap">
              {skillsList}
            </ListGroup>
          </div>
        </ListGroup.Item>
        {divider}
        <ListGroup.Item
          key={`education-section-${uuid()}`}
          className="text-dark flex justify-start gap-2"
        >
          <div className="resume-header mt-2 flex justify-start">EDUCATION</div>
          <div className="mx-18 min-w-full space-y-2">{schoolsList}</div>
        </ListGroup.Item>
      </ListGroup>
    </section>
  );
}
