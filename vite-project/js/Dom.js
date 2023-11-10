const DOMSelectors = {
    form: document.querySelector("#form"),
    Header: document.querySelector(".head"),
    Text: document.querySelector(".texts"),
    Image: document.querySelector(".image"),
    h2s: document.querySelectorAll("h2"),
    imgs: document.querySelectorAll("img")
  };
  
  function createcard() {
    const card = {
      Header: DOMSelectors.Header.value,
      Text: DOMSelectors.Text.value,
      Image: DOMSelectors.Image.value
    } 
    return card;
  };
    
  function insert(card) {
    document.querySelector(".Flexbox-container").insertAdjacentHTML(
      "beforeend", 
      `<div class="cell">
          <div class="text-container">
            <h2>${card.Header}</h2>
            <p>${card.Text}</p>
          </div>
          <img src="${card.Image}">
          <button class="remove-button">Remove</button>
        </div>`
    );
  
      const newCard = document.querySelector(".Flexbox-container").lastElementChild;
    newCard.querySelector(".remove-button").addEventListener("click", function() {
      newCard.remove();
    });
   }
     
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    const card = createcard();
    insert(card);
  });;


  