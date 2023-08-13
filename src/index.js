// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));


import './styles/style.css'

import { base, list, libs, frameworks } from "./data/hbsData";
import baseElement from "./templates/base.hbs";
import listElem from "./templates/list.hbs";
import frameworksElement from "./templates/frameworks.hbs";
import libsElement from "./templates/libs.hbs";

const myElements = baseElement(base);
const root = document.querySelector('#root');
const listElementNew = listElem(list);
const frameElem = frameworksElement(frameworks);
const libsElem = libsElement(libs);

root.insertAdjacentHTML('beforeend', myElements);
root.insertAdjacentHTML('beforeend', listElementNew);
root.insertAdjacentHTML('beforeend', frameElem);
root.insertAdjacentHTML('beforeend', libsElem);

const form = document.querySelector('#form');
const listT = document.querySelector('.list');
const resetBtn = document.querySelector('.resetBtn');

form.addEventListener('submit', getFormInputData);
document.addEventListener('DOMContentLoaded', restoreToDoList);
resetBtn.addEventListener('click', () => {
    localStorage.removeItem('toDoList');
    listT.innerHTML = [];
})

function getFormInputData(event) {
    event.preventDefault();
    const formData = form.question.value;
    const markup = `<li>${formData}</li>`;
    listT.insertAdjacentHTML('beforeend', markup);
    const item = [];
    item.push(formData);
    if (localStorage.getItem("toDoList") !== null) {
        item.push(...JSON.parse(localStorage.getItem("toDoList")));
    }
    addToLokalStorage(item);
    form.reset();
}

function addToLokalStorage(item) {
    localStorage.setItem("toDoList", JSON.stringify(item));

}

function restoreToDoList() {
    const markup = JSON.parse(localStorage.getItem("toDoList"));
    if (markup !== null) {
        let li;
        for (const item of markup) {
            li = `<li>${item}</li>`;
        }
        listT.insertAdjacentHTML('beforeend', li);
    }
}