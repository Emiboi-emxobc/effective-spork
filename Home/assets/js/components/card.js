import { _$ } from "./helpers/dom.js";
import Title from "./Title.js";
import  Text  from "./Text.js";
import Button from "./Button.js";

export function Card({ className = "", id = "" }, ...children) {
  return _$(
    "div",
    {
      className: `card ${className}`,
      id
    },
    ...children
  );
}



