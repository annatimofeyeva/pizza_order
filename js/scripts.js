//business logic
function Pizza (sizes, meats, toppings, crunch, cost){
  this.sizes = sizes;
  this.toppings = toppings;
  this.meats = meats;
  this.crunch = crunch;
  this.cost = cost;
}

function Order(sizes, meats, toppings, crunch, result){
  this.sizes = sizes;
  this.toppings = toppings;
  this.meats = meats;
  this.crunch = crunch;
  this.result = result;
}

Pizza.prototype.calculateCost = function(){
  if (this.sizes === "large"){
    this. cost += 15;
  } else if (this.sizes === "medium"){
       this.cost += 13;
  } else {
       this.cost += 10;
  }
    return this.cost
  };

Order.prototype.createOrder = function(){
  if(this.sizes === "large" && this.crunch === "handmade pan" && this.meats === "bacon" && this.topping === "cheddar cheese"){
  } return "Your Order:   large handmade pan pizza with becon and cheddar cheese"
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
    var newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaCrust, inputtedMeatType, inputtedToppingType, 0);
    console.log(newPizza);
    $("#results").append("Your Cost is:" + "  " + newPizza.calculateCost() + "$");

    $("#ordered").empty();
    var newOrder = new Order(inputtedPizzaSize, inputtedPizzaCrust, inputtedMeatType, inputtedToppingType, 0);
    console.log(newOrder);
    $("#ordered").append(newOrder.createOrder());

    $("#order_button").click(function(){
    console.log("order");
    $("#ordered_message").show();

});
});
});
