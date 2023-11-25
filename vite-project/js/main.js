import '../css/style.css'
import { dom } from "./Dom.js";
import { Cars } from './Cars.js';

const carsContainer = document.querySelector("#cars-container");
const selectors = dom();

function HTMLCar(car) {
 carsContainer.insertAdjacentHTML(
  "beforeend",
  `<div class="car-card">
    <h2>${car.brand}</h2>
    <p>${car.description}</p>
    <img src="${car.image}" alt="${car.brand}">
  </div>`
 );
}

selectors.electric.addEventListener('change', filterCars);
selectors.gasoline.addEventListener('change', filterCars);
selectors.hybrid.addEventListener('change', filterCars);

selectors.form.addEventListener('submit', (e) => {
  e.preventDefault();
 });
 
 function filterCars() {
  carsContainer.innerHTML = '';
  
  const inputs = {
    electric: selectors.electric.checked,
    gasoline: selectors.gasoline.checked,
    hybrid: selectors.hybrid.checked,
   };
   
   Cars.forEach(car => {
    const conditions = [
      inputs.electric && car.type === 'Electric',
      inputs.gasoline && car.type === 'Gasoline',
      inputs.hybrid && car.type === 'Hybrid'
    ];
   
    if (conditions.some(condition => condition)) {
      HTMLCar(car);
    }
   });
  }
   
 Cars.forEach(HTMLCar);