import CaloriesCounter from "./modules/CaloriesCounter";
import "../css/style.css";
import { a } from "./modules/script";

console.log(a);

const counterElements = document.querySelectorAll(".counter");

counterElements.forEach((elem) => {
    const counter = new CaloriesCounter(elem);
    counter.init();
});
