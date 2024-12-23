function mainDishesTemplate(mainIndex) {
    return `   
          <div onclick="addMainDishToBasket(${mainIndex})" class="dish-container">
            <div class="dish">
              <h3>${myDishes[0].mainDishes[mainIndex].name}</h3>
              <span class="dish-info">${myDishes[0].mainDishes[mainIndex].description}</span>
              <span class="dish-price">${myDishes[0].mainDishes[mainIndex].price.toFixed(2).replace(".", ",")}€</span>
            </div>

            <div onclick="countUpMainDish(${mainIndex})" class="btn" >
              +
            </div>
          </div>`
}

function sideDishtemplate(sideIndex) {
  return `   
          <div onclick="addSideDishToBasket(${sideIndex})" class="dish-container">
            <div class="dish">
              <h3>${myDishes[0].sideDishes[sideIndex].name}</h3>
              <span class="dish-info">${myDishes[0].sideDishes[sideIndex].description}</span>
              <span class="dish-price">${myDishes[0].sideDishes[sideIndex].price.toFixed(2).replace(".", ",")}€</span>
            </div>

            <div onclick="countUpSideDish(${sideIndex})" class="btn" >
              +
            </div>
          </div>`
}

function dessertTemplate(dessertIndex){
  return `   
          <div onclick="addDessertToBasket(${dessertIndex})" class="dish-container">
            <div class="dish">
              <h3>${myDishes[0].desserts[dessertIndex].name}</h3>
              <span class="dish-info">${myDishes[0].desserts[dessertIndex].description}</span>
              <span class="dish-price">${myDishes[0].desserts[dessertIndex].price.toFixed(2).replace(".", ",")}€</span>
            </div>

            <div onclick="countUpDessert(${dessertIndex})" class="btn" >
              +
            </div>
          </div>`
}

function basketTemplate(index) {
  return ` <div class="basket-meal">
            <h3>${basket[index].name}</h3>
            <div class="meal-amount">
              <button class="btn" onclick="countUp(${index})">+</button>
              <span class="portions">${basket[index].amount}x</span>
              <button class="btn" onclick="countDown(${index})">-</button>
              <span class="meal-price">${basket[index].price.toFixed(2).replace(".", ",")}€</span>
              <img id="delete-btn" onclick="deleteBasketMeal(${index})" src="./assets/icons/delete.png" alt="" />
            </div>
          </div>`
}