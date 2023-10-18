import { SVGProps } from "react";

const SvgIphone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      d="M341.601 0H170.397c-29.29 0-53.12 23.828-53.12 53.121v405.758c0 29.29 23.83 53.121 53.12 53.121h171.204c29.292 0 53.121-23.832 53.121-53.117V53.121C394.722 23.828 370.893 0 341.601 0zm-85.602 480.622c-11.869 0-21.526-9.658-21.526-21.526 0-11.871 9.656-21.526 21.526-21.526 11.869 0 21.526 9.655 21.526 21.526 0 11.868-9.657 21.526-21.526 21.526zM363.274 67.271v340.156h-214.55V67.271h214.55z"
      style={{
        fill: "#ff4d59",
      }}
    />
  </svg>
);
export default SvgIphone;