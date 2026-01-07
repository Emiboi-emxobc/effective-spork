import { _$ } from "./helpers/dom.js";
import Title from "./Title.js";
import  Text  from "./Text.js";
import Button from "./Button.js";
import Card from './card.js';
import Input from './input.js';

//formRow.js




export default function FormRow({ text = "", inputs = []}) {
  const inputCon = _$("div");
  const btnGroup = _$("div", { className: "btn-group" });

  inputs.forEach((inp, i) => {
    inputCon.appendChild(
      Input({
        label: inp.label,
        type: inp.type || "text",
        id: inp.id || `input${i + 1}`
      })
    );
  });

    
  const description = Text({ text });

  return Card(
    { className: "form-row" },
    description,
    inputCon,
    
  );
}