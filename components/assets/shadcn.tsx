import { createElement } from "react";

const viewBox = "0 0 24 24";
const content = {
  __html: `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 12l-6 6m6-14L4 18"/>`,
};

interface Props {
  className?: string;
}

function Component(props: Props) {
  return createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    width: "1em",
    height: "1em",
    viewBox,
    dangerouslySetInnerHTML: content,
  });
}

export default Component;
