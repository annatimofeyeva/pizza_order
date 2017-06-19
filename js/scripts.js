//business logic
function Pizza (sizes, meats, toppings, crusts){
  this.sizes = sizes;
  this.toppings = toppings;
  this.meats = meats;
  this.crusts = crusts;
  this.cost = 0;
}

function Order(sizes, meats, toppings, crusts, result){
  this.sizes = sizes;
  this.toppings = toppings;
  this.meats = meats;
  this.crusts = crusts;
  this.result = result;
}
var sizePrices = {
  small: 10,
  medium: 13,
  large: 15
};
var crustsPrices = {};
crustsPrices['handmade pan'] = 2;
crustsPrices['crunchy thin crust'] = 3;
crustsPrices['gluten free crust'] = 4;
var meatPrices = {};
meatPrices['bacon'] = 4;
meatPrices['italian sausage'] = 3;
meatPrices['premium chicken'] = 1;
var toppingPrices = {
  "cheddar cheese": 1,
  "feta cheesee": 1,
  "mushrooms": 1,
  "artichoke": 2,
  "anchovy": 2,
  "pineapple": 2
};

Pizza.prototype.calculateCost = function(){
  this.cost = 0;
  var sizePrice = sizePrices[this.sizes];
  this.cost += sizePrice;
  var crustPrice = crustsPrices[this.crusts];
  this.cost += crustPrice;
  var meatPrice = meatPrices[this.meats];
  this.cost += meatPrice;
  var toppingPrice = toppingPrices[this.toppings];
  this.cost += toppingPrice;
  return this.cost;
};

Order.prototype.createOrder = function(){
    return "Your Order is: " + this.sizes + " size pizza with " + this.crusts + ", " + this.meats + " and " +  this.toppings + "!";
};

//User interface logic:
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#results").empty();
    var inputtedPizzaSize = $("select#pizza_sizes").val();
    console.log(inputtedPizzaSize);
    var inputtedPizzaCrust = $("select#pizza_crusts").val();
    console.log(inputtedPizzaCrust);
    var inputtedMeatType = $("select#pizza_meats").val();
    console.log(inputtedMeatType);
    var inputtedToppingType = $("select#pizza_toppings").val();
    console.log(inputtedToppingType);

    $("#results").empty();
    var newPizza = new Pizza(inputtedPizzaSize, inputtedMeatType, inputtedToppingType, inputtedPizzaCrust);
    console.log(newPizza);
    $("#results").append("Cost is:" + "  " + newPizza.calculateCost() + "$");
    $("#results").show();

    $("#ordered").empty();
    var newOrder = new Order(inputtedPizzaSize, inputtedPizzaCrust, inputtedMeatType, inputtedToppingType, 0);
    console.log(newOrder);
    $("#ordered").append(newOrder.createOrder());
    $("#ordered").show();
    $("#order_button").click(function(){
    console.log("order");
    $("#ordered_message").show();
});
});
});
