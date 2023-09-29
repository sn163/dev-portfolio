import { Button, Container } from "react-bootstrap";
import { ReactComponent as Photo } from "../portfolio_photo.svg"; //
//import { ReactComponent as Photo } from "../portfolio_photo2.svg";

export default function Home() {
  return (
    <Container className="pageContainer flex items-start justify-center" fluid>
      <div className="banner flex flex-col">
        <Photo className="p-16" />
        <div className="flex items-center justify-center">
          <Button size="lg" className="btn-outline shadow-5 shadow-danger px-5">
            ABOUT ME
          </Button>
        </div>
      </div>
    </Container>
  );
}
