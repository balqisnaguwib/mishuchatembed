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
    <path d="M7 10V4L3 7L7 10ZM17 10V4L21 7L17 10ZM7 14V20L3 17L7 14ZM17 14V20L21 17L17 14Z" />
  </svg>
);
