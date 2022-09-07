export const formulas = {
    harrison: "harrison",
    default: "default",
};

export function getCaloriesNormByFormula(formula, weight, height, age, gender) {
    switch (formula) {
        case formulas.harrison:
            {
                if (gender === "male") {
                    return 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age;
                } else {
                    return 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age;
                }
            }

        case formulas.default:
            {
                if (gender === "male") {
                    return 10 * weight + 6.25 * height - 5 * age + 5;
                } else {
                    return 10 * weight + 6.25 * height - 5 * age - 161;
                }
            }

        default:
            {
                console.log("default calories norm");
                return 10 * weight + 6.25 * height - 5 * age - 161;
            }
    }
}
