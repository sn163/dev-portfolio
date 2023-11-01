import { lazy, Suspense } from "react";
const GithubSVG = lazy(() => import(`../svg-components/Github`));
const LinkedinSVG = lazy(() => import(`../svg-components/Linkedin`));
const EmailSVG = lazy(() => import(`../svg-components/Email`));
const IphoneSVG = lazy(() => import(`../svg-components/Iphone`));
const LocationSVG = lazy(() => import(`../svg-components/Location`));
const ScrollSVG = lazy(() => import(`../svg-components/ArrowCircleDown`));

type SvgNames =
  | "GithubSVG"
  | "LinkedinSVG"
  | "EmailSVG"
  | "IphoneSVG"
  | "LocationSVG"
  | "ScrollSVG";

const svgComponentsMap = {
  GithubSVG,
  LinkedinSVG,
  EmailSVG,
  IphoneSVG,
  LocationSVG,
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
