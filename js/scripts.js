$(document).ready(function(){
  var listItems = [];


  $("#GroceryList").submit(function(event){
    event.preventDefault();
    var item = ($("#item1").val()).toUpperCase();
    if (!item) {
      $(".helpBlock").show();
      $(".addedBlock").hide();

    } else {
      $(".helpBlock").hide();
      $("#item1").val("");
      listItems.push(item);
      $(".addedBlock").show();
      $(".item").text(item);
    }
  });

  $("#showList").click(function(){
    listItems.sort();
    listItems.forEach(function(listItem){
      $("ul#results").append("<li>" + listItem + "</li>");
    });

    $("form#GroceryList").hide();
    $(".your-list").show();
    $("#showList").hide();

  });
});
