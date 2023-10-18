import { SVGProps } from "react";

const SvgVue = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path fill="#41B883" d="m2 4 14 24L30 4h-5.5L16 18.5 7.5 4H2Z" />
    <path fill="#35495E" d="M7.5 4 16 18.5 24.5 4h-5l-3.435 6.013L12.5 4h-5Z" />
  </svg>
);
export default SvgVue;
