import {_$} from './helpers/dom.js';

export default function Button({
  className="main-btn",
  id="",text="Continue",type="button",onClick=null
  //Add more later
}){
  const b = _$("button",{
    className:`btn ${className}`,
    id,textContent:text,type,onClick
  });
  
  return b
}
