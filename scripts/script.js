/**
 * Initializes the application by rendering main dishes, side dishes, and desserts.
 */
function init() {}

/**
 * Performs the calculation of delivery price, portions, subtotal, and total price.
 */
function calculation() {}

/**
 * Renders the main dishes in the main dish container.
 */
function renderMainDishes() {}

/**
 * Renders the side dishes in the side dish container.
 */
function renderSideDishes() {}

/**
 * Renders the desserts in the dessert container.
 */
function renderDesserts() {}

/**
 * Adds a main dish to the basket and updates the total price.
 * @param {number} index - The index of the main dish to add.
 */
function addMainDishToBasket(index) {}

/**
 * Increases the quantity of a main dish in the basket.
 * @param {number} index - The index of the main dish to increase.
 */
function countUpMainDish(index) {}

/**
 * Adds a side dish to the basket and updates the total price.
 * @param {number} index - The index of the side dish to add.
 */
function addSideDishToBasket(index) {}

/**
 * Increases the quantity of a side dish in the basket.
 * @param {number} index - The index of the side dish to increase.
 */
function countUpSideDish(index) {}

/**
 * Adds a dessert to the basket and updates the total price.
 * @param {number} index - The index of the dessert to add.
 */
function addDessertToBasket(index) {}

/**
 * Increases the quantity of a dessert in the basket.
 * @param {number} index - The index of the dessert to increase.
 */
function countUpDessert(index) {}

/**
 * Renders the meals in the basket.
 */
function renderBasketMeals() {}

/**
 * Increases the quantity of a dish in the basket.
 * @param {number} index - The index of the dish to increase.
 */
function countUp(index) {}

/**
 * Decreases the quantity of a dish in the basket and removes it if the quantity is zero.
 * @param {number} index - The index of the dish to decrease.
 */
function countDown(index) {}

/**
 * Calculates the portions and updates the meal prices in the basket.
 */
function calcPortions() {}

/**
 * Deletes a meal from the basket and updates the total price.
 * @param {number} index - The index of the meal to delete.
 */
function deleteBasketMeal(index) {}

/**
 * Switches to delivery mode and updates the delivery price and total price.
 */
function switchToDelivery() {}

/**
 * Switches to takeaway mode and updates the delivery price and total price.
 */
function switchToTakeaway() {}

/**
 * Updates the delivery price based on the selected mode.
 */
function deliveryPrice() {}

/**
 * Calculates the subtotal of the meals in the basket.
 */
function calcSubtotal() {}

/**
 * Calculates the total price including delivery and subtotal.
 */
function clacTotalPrice() {}

/**
 * Toggles the visibility of the basket overlay.
 */
function openOverlay() {}

/**
 * Takes the order, resets the basket, and opens the modal.
 */
function takeOrder() {}

/**
 * Opens the modal.
 */
function OpenModal() {}

/**
 * Closes the modal.
 */
function closeModal() {}
let priceIndex;
let calculatedPrice;

function init() {
  renderMainDishes();
  renderSideDishes();
  renderDesserts();
}

function calculation() {
  deliveryPrice();
  calcPortions();
  calcSubtotal();
  clacTotalPrice();
}

function renderMainDishes() {
  let mainDishContainer = document.getElementById("mainDishes");
  for (let mainIndex = 0; mainIndex < myDishes[0].mainDishes.length; mainIndex++) {
    mainDishContainer.innerHTML += mainDishesTemplate(mainIndex);
  }
}

function renderSideDishes() {
  let sideDishcontainer = document.getElementById("sideDishes");
  for (let sideIndex = 0; sideIndex < myDishes[0].sideDishes.length; sideIndex++) {
    sideDishcontainer.innerHTML += sideDishtemplate(sideIndex);
  }
}

function renderDesserts() {
  let dessertContainer = document.getElementById("dessertDishes");
  for (let dessertIndex = 0; dessertIndex < myDishes[0].desserts.length; dessertIndex++) {
    dessertContainer.innerHTML += dessertTemplate(dessertIndex);
  }
}

function addMainDishToBasket(index) {
  let dish = myDishes[0].mainDishes[index];
  if (basket.includes(dish) === false) {
    basket.push(dish);
    document.getElementById("totalPrice").classList.remove("d-none");
    renderBasketMeals();
    calculation();
  } 
}

function countUpMainDish(index) {
  let basketDishIndex = basket.findIndex((elem) => elem["name"] === myDishes[0].mainDishes[index].name);
    countUp(basketDishIndex)
}

function addSideDishToBasket(index) {
  let dish = myDishes[0].sideDishes[index];
  if (basket.includes(dish) === false) {
    basket.push(dish);
    document.getElementById("totalPrice").classList.remove("d-none");
    renderBasketMeals();
    calculation();
  }
}

function countUpSideDish(index) {
  let basketDishIndex = basket.findIndex((elem) => elem["name"] === myDishes[0].sideDishes[index].name);
    countUp(basketDishIndex)
}

function addDessertToBasket(index) {
  let dish = myDishes[0].desserts[index];
  if (basket.includes(dish) === false) {
    basket.push(dish);
    document.getElementById("totalPrice").classList.remove("d-none");
    renderBasketMeals();
    calculation();
  }
}

function countUpDessert(index) {
  let basketDishIndex = basket.findIndex((elem) => elem["name"] === myDishes[0].desserts[index].name);
    countUp(basketDishIndex)
}

function renderBasketMeals() {
  let basketRef = document.getElementById("yourBasket");
  basketRef.innerHTML = "";
  for (let index = 0; index < basket.length; index++) {
    basketRef.innerHTML += basketTemplate(index);
  }
  if (basketRef.innerHTML === "") {
    document.getElementById("totalPrice").classList.add("d-none");
  }
}

function countUp(index) {
  let portionsRef = document.getElementsByClassName("portions");
  basket[index].amount++;
  portionsRef[index].innerHTML = basket[index].amount + "x";
  calculation();
}

function countDown(index) {
  let portionsRef = document.getElementsByClassName("portions");
  basket[index].amount--;
  portionsRef[index].innerHTML = basket[index].amount + "x";
  calculation();
  if (portionsRef[index].innerHTML == "0x") {
    deleteBasketMeal(index);
  }
}

function calcPortions() {
  let mealPrice = document.getElementsByClassName("meal-price");
  let portions = document.getElementsByClassName("portions");
  for (let index = 0; index < basket.length; index++) {
    portions.innerHTML = basket[index].amount;
    let newMealPrice = basket[index].amount * basket[index].price;
    mealPrice[index].innerHTML = newMealPrice.toFixed(2).replace(".", ",") + "€";
  }
}

function deleteBasketMeal(index) {
  basket[index].amount = 1;
  basket.splice(index, 1);
  renderBasketMeals();
  calculation();
}

function switchToDelivery() {
  document.getElementById("takeawayBtn").classList.remove("bg-white");
  document.getElementById("deliveryBtn").classList.add("bg-white");
  deliveryPrice();
  clacTotalPrice();
}

function switchToTakeaway() {
  document.getElementById("takeawayBtn").classList.add("bg-white");
  document.getElementById("deliveryBtn").classList.remove("bg-white");
  deliveryPrice();
  clacTotalPrice();
}

function deliveryPrice() {
  let deliveryRef = document.getElementById("deliveryPrice");
  let deliveryBtnRef = document.getElementById("deliveryBtn");
  if (deliveryBtnRef.classList.contains("bg-white")) {
    deliveryRef.innerHTML = (5.0).toFixed(2).replace(".", ",") + "€";
  } else {
    deliveryRef.innerHTML = (0.0).toFixed(2).replace(".", ",") + "€";
  }
}

function calcSubtotal() {
  let subTotalRef = document.getElementById("subtotal");
  let subTotal = 0;
  let mealPrice = document.getElementsByClassName("meal-price");
  for (let index = 0; index < mealPrice.length; index++) {
    subTotal += parseFloat(mealPrice[index].innerHTML.replace(",", "."));
  }
  subTotalRef.innerHTML = subTotal.toFixed(2).replace(".", ",") + "€";
}

function clacTotalPrice() {
  let allRoundPriceRef = document.getElementById("allRoundPrice");
  let subTotalRef = document.getElementById("subtotal");
  let deliveryRef = document.getElementById("deliveryPrice");
  let totalPrice = 0;
  totalPrice = parseFloat(deliveryRef.innerHTML.replace(",", ".")) + parseFloat(subTotalRef.innerHTML.replace(",", "."));
  allRoundPriceRef.innerHTML = totalPrice.toFixed(2).replace(".", ",") + "€";
}

function openOverlay() {
  let bodyRef = document.getElementById("body");
  bodyRef.classList.toggle("overflow-hidden");
  let overlayRef = document.getElementById("basketContainer");
  overlayRef.classList.toggle("height-100");
}

function takeOrder() {
  for (let index = 0; index < basket.length; index++) {
    basket[index].amount = 1;
  }
  basket.splice(0, basket.length);
  renderBasketMeals();
  OpenModal();
}

function OpenModal() {
  let modalRef = document.getElementById("modal");
  modalRef.style.display = "flex";
  
}

function closeModal() {
  let modalRef = document.getElementById("modal");
  modalRef.style.display = "none";
}
