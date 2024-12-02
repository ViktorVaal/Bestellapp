let priceIndex;
let calculatedPrice;

function init() {
  renderMainDishes();
  renderSideDishes();
  renderDesserts();
}

function calculation() {
  deliveryPrice()
  calcPortions()
  calcSubtotal()
  clacTotalPrice()
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
  for (
    let dessertIndex = 0;
    dessertIndex < myDishes[0].desserts.length;
    dessertIndex++
  ) {
    dessertContainer.innerHTML += dessertTemplate(dessertIndex);
  }
}

function addMainDishToBasket(index) {
  let dish = myDishes[0].mainDishes[index];
  if (basket.includes(dish) === false) {
    basket.push(dish);
    document.getElementById("totalPrice").classList.remove("d-none");
    console.log(basket);
    console.log(myDishes);
    renderBasketMeals();
    calculation()
  }
}

function addSideDishToBasket(index) {
    let dish = myDishes[0].sideDishes[index];
    if (basket.includes(dish) === false) {
      basket.push(dish);
      document.getElementById("totalPrice").classList.remove("d-none");
      renderBasketMeals();
      calculation()
    }
  }

  function addDessertToBasket(index) {
    let dish = myDishes[0].desserts[index];
    if (basket.includes(dish) === false) {
      basket.push(dish);
      document.getElementById("totalPrice").classList.remove("d-none");
      renderBasketMeals();
      calculation()
    }
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
    basket[index].amount++
    portionsRef[index].innerHTML = basket[index].amount + "x";
    calculation()
}

function countDown(index) {
    let portionsRef = document.getElementsByClassName("portions");
    basket[index].amount--
    portionsRef[index].innerHTML = basket[index].amount + "x"
    calculation()
    if (portionsRef[index].innerHTML == 0) {
        deleteBasketMeal(index)
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
    renderBasketMeals()
    calculation()
}

function switchToDelivery() {
    document.getElementById("takeawayBtn").classList.remove("bg-white");
    document.getElementById("deliveryBtn").classList.add("bg-white");
    deliveryPrice()
    clacTotalPrice()
}

function switchToTakeaway() {
  document.getElementById("takeawayBtn").classList.add("bg-white");
  document.getElementById("deliveryBtn").classList.remove("bg-white");
  deliveryPrice()
  clacTotalPrice()
}

function deliveryPrice() {
    let deliveryRef = document.getElementById("deliveryPrice");
    let deliveryBtnRef = document.getElementById("deliveryBtn");
    if (deliveryBtnRef.classList.contains("bg-white")) {
        deliveryRef.innerHTML = 5.00.toFixed(2).replace(".", ",") + "€";
    } else {
        deliveryRef.innerHTML = 0.00.toFixed(2).replace(".", ",") + "€";
    }
}

function calcSubtotal() {
  let subTotalRef = document.getElementById("subtotal");
  let subTotal = 0;
  let mealPrice = document.getElementsByClassName("meal-price");
  for (let index = 0; index < mealPrice.length; index++) {
  subTotal += parseFloat((mealPrice[index].innerHTML).replace(",", "."));   
  subTotalRef.innerHTML = subTotal.toFixed(2).replace(".", ",") + "€"
  }
}

function clacTotalPrice() {
  let allRoundPriceRef = document.getElementById("allRoundPrice");
  let subTotalRef = document.getElementById("subtotal");
  let deliveryRef = document.getElementById("deliveryPrice");
  let totalPrice = 0;
  totalPrice = parseFloat(deliveryRef.innerHTML.replace(",", ".")) + parseFloat(subTotalRef.innerHTML.replace(",", "."));
  allRoundPriceRef.innerHTML = totalPrice.toFixed(2).replace(".", ",") + "€"
}