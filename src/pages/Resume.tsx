import { Container, ListGroup } from "react-bootstrap";
import { cvData } from "../components/data/cvData";
import { useId } from "react";

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
        <div className="flex min-w-full w-full mt-2 space-x-1">
          <span className="italic">{x.title}</span>
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
        <div className="flex min-w-full w-full mt-2 space-x-1">
          <span className="italic">{x.subtitle}</span>
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
      style={{
        background: "grey",
        height: "2.5px",
        border: "none",
      }}
    />
  );
  const schools = education.map((x) => {
    return (
      <>
        <h3 className="h2">{x.school_name}</h3>
        <div className="flex min-w-full w-full space-x-1">
          <span className="italic">{x.description}</span>
          {x.major && <span className="major italic">{x.major}</span>}
        </div>
        <span className="mb-2">{x.location}</span>
      </>
    );
  });

  const skillsList = skills.map((x, i) => (
    <ListGroup.Item key={`skills-${id}-${i}`} className="m-1 py-1 rounded">
      {x}
    </ListGroup.Item>
  ));

  return (
    <Container id="resume" className="s-resume target-section">
      <div className="resume-content max-w-xxl p-16 space-y-10 my-6 rounded min-h-fit">
        <div className="flex space-x-24 px-1 text-light">
          <h2 className="h4 resume-header mt-2">CAREER</h2>
          <div className="space-y-4">{jobsList}</div>
        </div>
        {divider}
        <div className="flex space-x-24 px-1 text-light">
          <h2 className="h4 resume-header mt-2">PROJECTS</h2>
          <div className="space-y-4">{projectsList}</div>
        </div>
        {divider}
        <div className="flex space-x-24 px-1 text-light">
          <h2 className="h4 resume-header mt-2">ACHIEVEMENTS</h2>
          <div className="space-y-4">{achievementsList}</div>
        </div>
        {divider}
        <div className="flex space-x-24 px-1 text-light">
          <h2 className="h4 resume-header mt-2">SKILLS</h2>
          <div>
            <ListGroup horizontal className="m-2 flex-wrap">
              {skillsList}
            </ListGroup>
          </div>
        </div>
        {divider}
        <div className="flex space-x-24 px-1 text-light">
          <h2 className="h4 resume-header mt-2">EDUCATION</h2>
          <div className="space-y-2">{schools}</div>
        </div>
      </div>
    </Container>
  );
}
