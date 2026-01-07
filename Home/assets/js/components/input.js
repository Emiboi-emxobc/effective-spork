import { _$, $$ } from "./components/helpers/dom.js";



export default function Input({
  label = "",
  type = "text",
  id = "",
  name = id,
  className = "",
  icons = []
} = {}) {

  // input element
  const inp = _$("input", {
    id,
    name:name||id,
    type,
    className: `${id}-input ${className}`,
    
  });

  // label element
  const lbl = _$("label", {
    htmlFor: id,
    textContent: label
  });

  // wrapper
  const con = _$("div", {
    className: "input-group"
  }, inp, lbl);

  // icons (optional)
  icons.forEach(icon => con.appendChild(icon));

  return con;
}
export function validateInput(scope = document) {
  $$("input", scope).forEach(inp => {
    const group = inp.closest(".input-group");
    if (!group) return;

    const check = () =>
      group.classList.toggle("not-empty", inp.value.trim() !== "");

    inp.addEventListener("input", check);
    inp.addEventListener("blur", check);
    check();
  });
}



