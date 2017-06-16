//business logic
function Pizza (sizes, meats, toppings, cost){
  this.sizes = sizes;
  this.toppings = toppings;
  this.meats = meats;
  this.cost = cost;
}

Pizza.prototype.calculateCost = function(){
 if (inputtedPizzaSize === "large"){
   this. cost += 4;
 } else if (inputtedPizzaSize === "medium"){
   this.cost += 3;
 } else {
   this.cost += 2;
}
  return this.cost
};

//User interface logic:


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    $("#results").empty();
    var inputtedPizzaSize = $("select#pizza_sizes").val();
    console.log(inputtedPizzaSize);
    var inputtedMeatType = $("select#pizza_meats").val();
    console.log(inputtedMeatType);
    var inputtedToppingType = $("select#pizza_toppings").val();
    console.log(inputtedToppingType);




    Pizza.prototype.calculateCost = function(){
     if (inputtedPizzaSize === "large"){
       this. cost += 4;
     } else if (inputtedPizzaSize === "medium"){
       this.cost += 3;
     } else {
       this.cost += 2;
    }
      return this.cost
    };





    var newPizza = new Pizza(inputtedPizzaSize, inputtedMeatType, inputtedToppingType, 0);
    console.log(newPizza);
    $("#results").append("<h3> You cost is:" + "  " + newPizza.calculateCost() + "</h3");
    $("#results").show





});
});




/*$(document).ready(function(){
    $("form").submit(function(event){
    event.PreventDefault();
    var inputtedSizes = $("form-control#pizza_sizes").val();
    console.log(inputtedSizes);


  });
});*/
