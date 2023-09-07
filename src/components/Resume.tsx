import CV from "react-cv";
import { cvData } from "./data/cvData";

export default function Resume() {
  return (
    <>
      <CV {...cvData} />
    </>
  );
}
