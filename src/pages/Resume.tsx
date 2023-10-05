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
        <div className="flex min-w-full w-full items-center mt-2 space-x-1">
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
        <div className="flex min-w-full w-full mt-2 space-x-1">
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
      className="mx-32"
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
        <div className="flex min-w-full w-full space-x-1">
          <span className="sub-title">{x.description}</span>
          {x.major && <span className="major sub-title">{x.major}</span>}
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
    <Container id="resume" className="s-resume" fluid>
      <div className="flex flex-col items-center">
        <h2 className="section-title-dark">RESUME</h2>
        <div className="section-title-bar" />
      </div>
      <ListGroup className="resume-content mx-32 py-20 space-y-20">
        <ListGroup.Item className="flex justify-between mx-32 text-dark">
          <h2 className="h5 resume-header mt-2 mx-24">CAREER</h2>
          <div className="space-y-6 mx-18">{jobsList}</div>
        </ListGroup.Item>
        {divider}

        <ListGroup.Item className="flex justify-between mx-32 text-dark">
          <h2 className="h5 resume-header mt-2 mx-24">PROJECTS</h2>
          <div className="space-y-6 mx-18">{projectsList}</div>
        </ListGroup.Item>
        {divider}

        <ListGroup.Item className="flex justify-between mx-32 text-dark">
          <h2 className="h5 resume-header mt-2 mx-24">ACHIEVEMENTS</h2>
          <div className="space-y-8 mx-18">{achievementsList}</div>
        </ListGroup.Item>
        {divider}

        <ListGroup.Item className="flex justify-between mx-32 text-dark">
          <h2 className="h5 resume-header mt-2 mx-24">SKILLS</h2>
          <div className="ml-18">
            <ListGroup horizontal className="m-2 flex-wrap skill-group">
              {skillsList}
            </ListGroup>
          </div>
        </ListGroup.Item>
        {divider}

        <ListGroup.Item className="flex justify-between mx-32 text-dark">
          <h2 className="h5 resume-header mt-2 mx-24">EDUCATION</h2>
          <div className="space-y-2 mx-18 min-w-full">{schools}</div>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
