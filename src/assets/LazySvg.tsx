import { lazy, Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";

const PortfolioSVG = lazy(() => import(`../svg-components/PortfolioPic`));
const JavascriptSVG = lazy(() => import(`../svg-components/Javascript`));
const TypescriptSVG = lazy(() => import(`../svg-components/Typescript`));
const VueSVG = lazy(() => import(`../svg-components/Vue`));
const ReactSVG = lazy(() => import(`../svg-components/React`));
const GithubSVG = lazy(() => import(`../svg-components/Github`));
const NodeSVG = lazy(() => import(`../svg-components/NodeJs`));
const LinkedinSVG = lazy(() => import(`../svg-components/Linkedin`));
const EmailSVG = lazy(() => import(`../svg-components/Email`));
const IphoneSVG = lazy(() => import(`../svg-components/Iphone`));
const LocationSVG = lazy(() => import(`../svg-components/Location`));
const LogoActiveSVG = lazy(() => import(`../svg-components/LogoActive`));
const LogoSVG = lazy(() => import(`../svg-components/Logo`));
const ProfileSVG = lazy(() => import(`../svg-components/ProfilePic`));
const ScrollSVG = lazy(() => import(`../svg-components/ArrowCircleDown`));

type SvgNames =
  | "PortfolioSVG"
  | "JavascriptSVG"
  | "TypescriptSVG"
  | "VueSVG"
  | "ReactSVG"
  | "GithubSVG"
  | "NodeSVG"
  | "LinkedinSVG"
  | "EmailSVG"
  | "IphoneSVG"
  | "LocationSVG"
  | "LogoActiveSVG"
  | "LogoSVG"
  | "ProfileSVG"
  | "ScrollSVG";

const svgComponentsMap = {
  PortfolioSVG,
  JavascriptSVG,
  TypescriptSVG,
  VueSVG,
  ReactSVG,
  GithubSVG,
  NodeSVG,
  LinkedinSVG,
  EmailSVG,
  IphoneSVG,
  LocationSVG,
  LogoActiveSVG,
  LogoSVG,
  ProfileSVG,
  ScrollSVG,
};

type LazySvgProps = {
  svgName: SvgNames;
  classProps: string;
};

const LazySvg = ({ svgName, classProps }: LazySvgProps) => {
  const SvgComponent = svgComponentsMap[svgName];
  return (
    <Suspense
      fallback={
        <Spinner animation="border" size="sm" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      }
    >
      <SvgComponent className={classProps} />
    </Suspense>
  );
};

export default LazySvg;
