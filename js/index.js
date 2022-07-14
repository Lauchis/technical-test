import index from "../index.html";
import css from "../estilos.css";

// material.io js code goes here
// import { MDCRipple } from "@material/ripple/index";
// const ripple = new MDCRipple(document.querySelector(".foo-button"));
import {MDCTextField} from '@material/textfield';
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
console.log(textField);
