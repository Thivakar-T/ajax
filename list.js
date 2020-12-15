$(document ).ready(function(){
    $.ajax({
      url: ' https://5fd6ee409dd0db0017ee8a2e.mockapi.io/company',
      type: 'GET',
      async: false,
      dataType: "json",
      contentType:'application/json',
      success: function (response) { 
       carArray=response;
       console.log(carArray);
  }
  });
  addTable();
  });
  var sNo = 1;
  function addTable() {
   var v = "";
    editText = undefined;
    for (i = 0; i < carArray.length; i++) {
     v += "<tr id='list_"+sNo+"'>";
      v += "<td>" + carArray[i].name + "</td>";
      v += "<td>" + carArray[i].Model + "</td>";
      v += "<td>" + carArray[i].number + "</td>";
      v += "<td>" + carArray[i].Type + "</td>";
      v += "<td>" + carArray[i].Owner + "</td>";
      v += "<td>" + carArray[i].Colors + "</td>";
      
      v += '<td><button class="btn btn-primary mr-3" style="" onclick="Edit(' +carArray[i].id + ')">Edit</button><button class="btn btn-danger"  onclick="Delete(' +carArray[i].id + ')">Delete</button></td>';
      sNo++;
    }
    $("#displayArea").html(v);
  }
  function Edit(id){
      window.location.href="index.html?id="+id;
  }
  function Delete(id){
    $.ajax({
    url: ' https://5fd6ee409dd0db0017ee8a2e.mockapi.io/company/'+id,
    type: 'DELETE',
    async: false,
    dataType: "json",
    data: "",
    contentType:'application/json',
    success: function (response) {
      $("#list_"+id).remove();
    }
    });
    }