import { Container, ListGroup } from "react-bootstrap";
import { cvData } from "../components/data/cvData";
import { useId } from "react";

export default function Resume() {
  const id = useId();
  const { jobs, education, projects, achievements, skills } = cvData;

  const jobsList = jobs.map((x, i) => {
    const bulletpoints = x.description.map((x) => (
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

  const projectsList = projects.map((x, i) => {
    const bulletpoints = x.description.map((x) => (
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
        <div className="mb-4">
          <h3 className="h2">{x.school_name}</h3>
          <div className="flex min-w-full w-full space-x-1">
            <span className="italic">{x.description}</span>
            {x.major && <span className="major italic">{x.major}</span>}
          </div>
          <span className="mb-2">{x.location}</span>
        </div>
      </>
    );
  });

  const skillsList = skills.map((x, i) => (
    <ListGroup.Item key={`skills-${id}-${i}`} className="m-1 py-1 rounded">
      {x}
    </ListGroup.Item>
  ));

  return (
    <Container className="pageContainer">
      <div className="resume-content max-w-xxl p-16 space-y-10 my-6 rounded min-h-fit">
        <div className="flex space-x-32 px-1 text-light">
          <h2 className="h4 resume-header">Career</h2>
          <div className="space-y-5">{jobsList}</div>
        </div>
        {divider}
        <div className="flex space-x-32 px-1 text-light">
          <h2 className="h4 resume-header">Projects</h2>
          <div className="space-y-4">{projectsList}</div>
        </div>
        {divider}
        <div className="flex space-x-32 px-1 text-light">
          <h2 className="h4 resume-header">Projects</h2>
          <div className="space-y-5">{achievementsList}</div>
        </div>
        {divider}
        <div className="flex space-x-32 px-1 text-light">
          <h2 className="h4 resume-header">Skills</h2>
          <div>
            <ListGroup horizontal className="m-2 flex-wrap">
              {skillsList}
            </ListGroup>
          </div>
        </div>
        {divider}
        <div className="flex space-x-32 my-4 px-1 text-light">
          <h2 className="h4 underline resume-header">Education</h2>
          <div className="space-y-2">{schools}</div>
        </div>
      </div>
    </Container>
  );
}
