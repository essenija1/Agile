import CaloriesCounter from "./modules/CaloriesCounter";
import "../css/style.css";
import { a } from "./modules/script";
import * as registationJs from "../registration/index.js";
import * as meditationJs from "../meditation/app.js";
import * as kbjyJs from "../kbjy/index.js";

console.log(a);

const counterElements = document.querySelectorAll(".counter");

counterElements.forEach((elem) => {
    const counter = new CaloriesCounter(elem);
    counter.init();
});
