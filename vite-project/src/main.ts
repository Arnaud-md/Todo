import './style.css'
//import typescriptLogo from './typescript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.ts'

const app = document.querySelector<HTMLDivElement>('#app');

const inf = document.createElement('section');
inf.setAttribute("id","inform");
inf.style.width = "450px";
inf.style.height = "150px";
inf.style.margin = "auto auto 30px auto";
inf.style.display = "flex";
inf.style.flexDirection = "row";
inf.style.border = "1px solid black";

const input = document.createElement("div");
input.setAttribute("id","inp");
input.style.width = "250px";
input.style.margin = "auto auto 30px auto";
input.style.border = "1px solid black";
//input.setAttribute(InputEvent,'text');

app?.appendChild(inf);

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
