function init() {
  renderMainDishes();
  renderSideDishes();
  renderDesserts();
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
    console.log(basket);
    document.getElementById("totalPrice").classList.remove("d-none");
    renderBasketMeals();
  }
}

function addSideDishToBasket(index) {
    let dish = myDishes[0].sideDishes[index];
    if (basket.includes(dish) === false) {
      basket.push(dish);
      console.log(basket);
      document.getElementById("totalPrice").classList.remove("d-none");
      renderBasketMeals();
    }
  }

  function addDessertToBasket(index) {
    let dish = myDishes[0].desserts[index];
    if (basket.includes(dish) === false) {
      basket.push(dish);
      console.log(basket);
      document.getElementById("totalPrice").classList.remove("d-none");
      renderBasketMeals();
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
    portionsRef[index].innerHTML++
    calcPortions(index)

}

function countDown(index) {
    let portionsRef = document.getElementsByClassName("portions");
    portionsRef[index].innerHTML--
    calcPortions(index);
    if (portionsRef[index].innerHTML == 0) {
        deleteBasketMeal(index)
    }
    
 
}

function calcPortions(index) {
    let mealPrice = document.getElementsByClassName("meal-price");
    let portions = document.getElementsByClassName("portions");
    let dishName = basket[index].name;
    console.log(basket[index].name);
    
    console.log(myDishes.findIndex((elem) => elem["name"] === "Gegrilltes Rindersteak"));
    let price 
    let calculatedPrice = basket[index].price * portions[index].innerHTML;
     mealPrice[index].innerHTML = calculatedPrice.toFixed(2).replace(".", ",")
}

function deleteBasketMeal(index) {
    basket.splice(index, 1);
    renderBasketMeals()
}

function switchToDelivery() {
  document.getElementById("takeawayBtn").classList.remove("bg-white");
  document.getElementById("deliveryBtn").classList.add("bg-white");
  deliveryPrice()
}

function switchToTakeaway() {
  document.getElementById("takeawayBtn").classList.add("bg-white");
  document.getElementById("deliveryBtn").classList.remove("bg-white");
  deliveryPrice()
}

function deliveryPrice() {
    let deliveryRef = document.getElementById("deliveryPrice");
    let deliveryBtnRef = document.getElementById("deliveryBtn");
    if (deliveryBtnRef.classList.contains("bg-white")) {
        deliveryRef.innerHTML = "5,00€";
    } else {
        deliveryRef.innerHTML = "";
    }
}