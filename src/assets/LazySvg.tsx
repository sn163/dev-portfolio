import { lazy, Suspense } from "react";
const PortfolioSVG = lazy(() => import(`../svg-components/PortfolioPic`));
const AboutSVG = lazy(() => import(`../svg-components/AboutPic`));
const ContactSVG = lazy(() => import(`../svg-components/ContactPic`));
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
const ScrollSVG = lazy(() => import(`../svg-components/ArrowCircleDown`));

type SvgNames =
  | "PortfolioSVG"
  | "AboutSVG"
  | "ContactSVG"
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
  | "ScrollSVG";

const svgComponentsMap = {
  PortfolioSVG,
  AboutSVG,
  ContactSVG,
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
        <div className="border-black-300 h-10 w-10 animate-spin rounded-full border-8 border-t-red-600">
          <span className="sr-only">Loading...</span>
        </div>
      }
    >
      <SvgComponent className={classProps} />
    </Suspense>
  );
};

export default LazySvg;
