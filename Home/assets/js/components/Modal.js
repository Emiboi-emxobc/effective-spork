import { Register } from "./config/Register.js";
import FormRow  from "./FormRow.js";
import Title from './Title.js';
import Text from "./Text.js";
import Card from "./card.js";
import Button from "./Button.js";
import { $ } from "./helpers/dom.js";

const root = $("#root");

const state = {
  step: 0
};


export class Modal{
   constructor({
      title="", 
      description="",
      buttons=[]
   }) {
      this.title = title;
      this.description = description;
      this.buttons = buttons;
      this.className = "modal";
   }
}
