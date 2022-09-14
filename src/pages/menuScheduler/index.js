import './style.css';
import '../../css/global.css'

const buyProductsButton = document.querySelector('.buy__products');
const makeMenuForWeek = document.querySelector('.menu_for_week')
const weekDays = document.querySelectorAll('.dni_nedeli')
const rootDivForMenu = document.querySelector('.week__menu')

buyProductsButton.addEventListener('click', () => {
  const productsCheckboxes = document.querySelectorAll('.checkbox__product');
  const shopingList = document.querySelector('.products__buy');
  const activeCheckboxes = [];

  for (let productCheckbox of productsCheckboxes) {
    if (productCheckbox.checked) {
      activeCheckboxes.push(productCheckbox.value);
    }
  }

  shopingList.classList.add('active');

  shopingList.textContent = activeCheckboxes.join(', ') + '.';
});



makeMenuForWeek.addEventListener('click', () => {

  rootDivForMenu.innerHTML = ''


  for (let i = 0; i < weekDays.length; i++) {
    const day = weekDays[i]

    const dayName = day.querySelector('.day')

    const selectors = day.querySelectorAll('.dishes')

    rootDivForMenu.innerHTML += ` <div class="week__menu-item">
    <h3 class="item__title">${dayName.textContent}</h3>
    <p class="item__text">Завтрак - ${selectors[0].value}</p>
    <p class="item__text">Обед - ${selectors[1].value}</p>
    <p class="item__text">Ужин - ${selectors[2].value}</p>
</div>`
  }

})