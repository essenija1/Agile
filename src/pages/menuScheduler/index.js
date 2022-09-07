import './style.css';

const buyProductsButton = document.querySelector('.buy__products');

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
