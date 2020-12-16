var car = {};
var carArray = [];
function validateForm() {
  var name = document.getElementById("name").value;
  var Model = document.getElementById("Model").value;
  var number = document.getElementById("number").value;
  var Type = document.getElementById("Type").value;
  var Owner = document.getElementById("Owner").value;
  var Colors = document.getElementById("Colors").value;
  car["name"] = name;
  car["Model"] = Model;
  car["number"] = number;
  car["Type"] = Type;
  car["Owner"] = Owner;
  car["Colors"] = Colors;

  if (car.id) {
    car.id = car.id;
    var myJSON = JSON.stringify(car);
    $.ajax({
      url: ' https://5fd6ee409dd0db0017ee8a2e.mockapi.io/company/' + car.id,
      type: 'PUT',
      async: false,
      dataType: "json",
      data: myJSON,
      contentType: 'application/json',
      success: function (response) {
        window.location.replace("create.html");
      }
    });
  } else {
    var myJSON = JSON.stringify(car);
    $.ajax({
      url: ' https://5fd6ee409dd0db0017ee8a2e.mockapi.io/company',
      type: 'POST',
      async: false,
      dataType: "json",
      data: myJSON,
      contentType: 'application/json',
      success: function (response) {
        car = response;
        window.location.replace("create.html");

      }
    });
  }
  console.log(car);
}
$(document).ready(function () {
  var url_string = (window.location.href).toLowerCase();
  var url = new URL(url_string);
  var id = url.searchParams.get("id");
  $.ajax({
    url: ' https://5fd6ee409dd0db0017ee8a2e.mockapi.io/company/' + id,
    type: 'GET',
    async: false,
    dataType: "json",
    contentType: 'application/json',
    success: function (response) {
      car = response;
      console.log(car);
      $("#name").val(car.name);
      $("#Model").val(car.Model);
      $("#Colors").val(car.Colors);
      $("#number").val(car.number);
      $("#Type").val(car.Type);
      $("#Owner").val(car.Owner);


    }

  });
});
