const historyBox = document.querySelector(".history-list");

$.ajax({
  method:'get',
  url:'https://efigence-camp.herokuapp.com/api/data/history',
  dataTypes:'jeson',
  error:function(response){

  },
  success:function(response){

    for(var i=0; i<response.content.length; i++){

      const template = "<div class='history column'>"
          +"<h6>"+response.content[i].date
          +"</h6>"+"<div class='text-content'>"+"<div class='wrap'>"+"<span class='description'>"
          +response.content[i].description
          +"</span>"+"<span class='cash'>"+
          response.content[i].category
          +"</span>"+"</div>"+"</div>"+
           "<div class='last-wraper'>"+"<span class='inPlus'>"
           +response.content[i].amount+"</span>"+"<span>"+ response.content[i].currency+
           "</span>"+"</div>"+"</div>";

      historyBox.insertAdjacentHTML("beforeend",template)

      switch(response.content[i].status) {
          case "outcome":
              $('.inPlus').css("color","red");
               console.log("wydatki");
              break;
         case "income":
         console.log("przychody");
         $('.inPlus').css("color","green");


              default:
              $('.inPlus').css("color","green");

      }




    }
  }


})
