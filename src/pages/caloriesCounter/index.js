import CaloriesCounter from '../../js/modules/CaloriesCounter';
import './style.css';

const counterElements = document.querySelectorAll('.counter');

counterElements.forEach((elem) => {
  const counter = new CaloriesCounter(elem);
  counter.init();
});
