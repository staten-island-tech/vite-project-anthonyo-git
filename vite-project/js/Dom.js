import Cars from '/Cars.js'

const DOMSelectors = {
    brand: document.querySelector(".brand"),
    description: document.querySelector(".description"),
    category: document.querySelector(".category"),
    type: document.querySelector(".type"),
    origin: document.querySelectorAll("origin"),
    Image: document.querySelector(".image")
  };
  
  function createcard() {
    const card = {
      brand: DOMSelectors.brand.value,
      description: DOMSelectors.description.value,
      Image: DOMSelectors.Image.value
    } 
    return card;
  };

  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    const card = createcard();
    insert(card);
  });;

  