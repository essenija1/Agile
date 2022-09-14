import "./style.css";
import '../../css/global.css'

const makeCalculateButton = document.querySelector('.cbju_blue_button')
const activity = document.querySelector('.activity')

const ageInput =  document.querySelector('.params[name="age"]')
const heightInput =  document.querySelector('.params[name="height"]')
const weightInput =  document.querySelector('.params[name="weight"]')

const womenGender =  document.querySelector('.select__gender[name="gender"]')

const rootContainer = document.querySelector('.result')

makeCalculateButton.addEventListener('click', () => {
    let calories = 0;

    if (womenGender.checked) {
      calories = (10 * weightInput.value) + (6,25 * heightInput.value) - (5 * ageInput.value) - 161
    } else {
        calories = (10 * weightInput.value) + (6,25 * heightInput.value) - (5 * ageInput.value) + 5
    }

    const caloriesWithActivity = calories * activity.value

    const carbohydrates = Math.round(caloriesWithActivity * 0.5 / 4) 
    const protein = Math.round(caloriesWithActivity * 0.3 / 4)
    const fats = Math.round(caloriesWithActivity * 0.2 / 9)

    rootContainer.innerHTML = ''

    rootContainer.innerHTML = `<h2 >Ежедневная норма потребления</h2>

    <ul class="result__list">
        <li>Белки - ${protein} г</li>
        <li>Жиры - ${fats} г</li>
        <li>Углеводы - ${carbohydrates} г</li>
    </ul>`
})

const resetButton = document.querySelector('.reset_button')

resetButton.addEventListener('click', () => {
    ageInput.value = 0
    heightInput.value = 0
    weightInput.value = 0;

    rootContainer.innerHTML = ''
})