//business logic
function Pizza (sizes, meats, toppings, crunch, cost){
  this.sizes = sizes;
  this.toppings = toppings;
  this.meats = meats;
  this.crunch = crunch;
  this.cost = cost;
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

//function Order ();

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

    var newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaCrust, inputtedMeatType, inputtedToppingType, 0);
    console.log(newPizza);
    $("#results").append("<h3> You cost is:" + "  " + newPizza.calculateCost() + "$" +  "</h3");

    $("#order_button").click(function(){
    console.log("order");
    $("#ordered_message").show();



});
});
});
