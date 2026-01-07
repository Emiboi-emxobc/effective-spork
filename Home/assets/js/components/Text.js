import {_$} from './helpers/dom.js';

export default function Text({
   text="",
   className="",
   id=""
}) {
   
   const p = _$("p",{
                className,
                id,
                html:text
              }
   )
   
   return p
}