import { ListGroup } from "react-bootstrap";
import { cvData } from "../components/data/cvData";
import { useId } from "react";
import resume from "../assets/sonny_nguyen_cv.pdf";

export default function Resume() {
  const id = useId();
  const { jobs, education, projects, achievements, skills } = cvData;

  const jobsList = jobs.map((x) => {
    const bulletpoints = x.description.map((x, i) => (
      <li className="my-1" key={`jobs-${id}-${i}`}>
        {x}
      </li>
    ));

    return (
      <>
        <h3 className="h2">{x.company}</h3>
        <div className="mt-2 flex space-x-1">
          <span className="sub-title">{x.title}</span>
          <span className="resume-date">{x.date}</span>
        </div>
        <ul>{bulletpoints}</ul>
      </>
    );
  });

  const projectsList = projects.map((x) => {
    const bulletpoints = x.description.map((x, i) => (
      <li className="my-1" key={`projects-${id}-${i}`}>
        {x}
      </li>
    ));

    return (
      <>
        <h3 className="h2">{x.project_title}</h3>
        <div className="mt-2 flex space-x-1">
          <span className="sub-title">{x.subtitle}</span>
        </div>
        <ul>{bulletpoints}</ul>
      </>
    );
  });

  const achievementsList = achievements.map((x) => {
    return (
      <>
        <div className="mb-4">
          <h3 className="h2">{x.title}</h3>
          <span>{x.description}</span>
        </div>
      </>
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
  const schools = education.map((x) => {
    return (
      <>
        <h3 className="h2">{x.school_name}</h3>
        <div className="flex space-x-1">
          <span className="sub-title">{x.description}</span>
          {x.major && <span className="major sub-title">{x.major}</span>}
        </div>
        <span className="mb-2">{x.location}</span>
      </>
    );
  });

  const skillsList = skills.map((x, i) => (
    <ListGroup.Item key={`skills-${id}-${i}`} className="m-1 rounded py-1">
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
        <ListGroup.Item className="text-dark flex justify-start gap-2">
          <div className="resume-header mt-2 flex justify-start">CAREER</div>
          <div className="space-y-6">{jobsList}</div>
        </ListGroup.Item>
        {divider}

        <ListGroup.Item className="text-dark flex justify-start  gap-2">
          <div className="resume-header mt-2 flex justify-start">PROJECTS</div>
          <div className="space-y-6">{projectsList}</div>
        </ListGroup.Item>
        {divider}

        <ListGroup.Item className="text-dark flex justify-start gap-2">
          <div className="resume-header mt-2 flex justify-start">
            ACHIEVEMENTS
          </div>
          <div className="w-full space-y-8">{achievementsList}</div>
        </ListGroup.Item>
        {divider}

        <ListGroup.Item className="text-dark flex justify-start gap-2">
          <div className="resume-header mt-2 flex justify-start">SKILLS</div>
          <div>
            <ListGroup horizontal className="skill-group my-2 flex-wrap">
              {skillsList}
            </ListGroup>
          </div>
        </ListGroup.Item>
        {divider}

        <ListGroup.Item className="text-dark flex justify-start gap-2">
          <div className="resume-header mt-2 flex justify-start">EDUCATION</div>
          <div className="mx-18 min-w-full space-y-2">{schools}</div>
        </ListGroup.Item>
      </ListGroup>
    </section>
  );
}
