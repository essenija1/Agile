import { formatNumber } from "../utils/formatNumber";

export default class Result {
    constructor(element) {
        this.counter = element;
        this.root = this.counter.querySelector(".counter__result");
        this.caloriesNormElem = this.root.querySelector("#calories-norm");
        this.caloriesMinimalElem = this.root.querySelector("#calories-minimal");
        this.caloriesMaximalElem = this.root.querySelector("#calories-maximal");

        this.caloriesNormElemHar = this.root.querySelector(
            "#calories-norm-harries"
        );
        this.caloriesMinimalElemHar = this.root.querySelector(
            "#calories-minimal-harries"
        );
        this.caloriesMaximalElemHar = this.root.querySelector(
            "#calories-maximal-harries"
        );
    }
    show(caloriesByDefault, caloriesByHarrison) {
        this.caloriesNormElem.textContent = formatNumber(caloriesByDefault.norm);
        this.caloriesMinimalElem.textContent = formatNumber(
            caloriesByDefault.minimal
        );
        this.caloriesMaximalElem.textContent = formatNumber(
            caloriesByDefault.maximal
        );

        this.caloriesNormElemHar.textContent = formatNumber(
            caloriesByHarrison.norm
        );
        this.caloriesMinimalElemHar.textContent = formatNumber(
            caloriesByHarrison.minimal
        );
        this.caloriesMaximalElemHar.textContent = formatNumber(
            caloriesByHarrison.maximal
        );

        this.root.classList.remove("counter__result--hidden");
    }

    hide() {
        this.root.classList.add("counter__result--hidden");

        this.caloriesNormElem.textContent = 0;
        this.caloriesMinimalElem.textContent = 0;
        this.caloriesMaximalElem.textContent = 0;

        this.caloriesNormElemHar.textContent = 0;
        this.caloriesMinimalElemHar.textContent = 0;
        this.caloriesMaximalElemHar.textContent = 0;
    }
}
