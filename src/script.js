import jquery from "jquery"
import { showButton } from './button/button';
import './style.css'
import image from './assets/React-icon.png'
import './button/button.css';

console.log({ jquery })
showButton()

const pictures = document.createElement('img');
const text = document.createElement('span');
pictures.setAttribute('src', image);
text.textContent = "Hello";
document.body.appendChild(pictures);
document.body.appendChild(text);