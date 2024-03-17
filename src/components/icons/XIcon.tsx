import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#3B81F6';

export const XIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={props.color ?? defaultButtonColor}
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M10 4v4l-6-2L1 7l5 5-5 5 3 1 6-2v4h2v-4l6 2 2-1-5-5 5-5-3-1-6 2V4h-2z" />
  </svg>
);
