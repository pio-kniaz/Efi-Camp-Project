$(document).foundation();

// (function(){
//
// const button=document.querySelector(".submitButton");
// const inputPassword=document.querySelector('.inputPassword');
//
// button.addEventListener("click",function(event){
//   event.preventDefault();
//
//   if (inputPassword.value!="") {
//       window.location.replace("index.html");
//       inputPassword.classList.remove("warrning");
//   }
//   else{
//     inputPassword.classList.add("warrning");
//     }
// })
// })();
$(".fi-x").on("click",function(){
  var loginVal = $("#password").val();
  var userNameVal= $("#username").val();



})

$(document).ready(function () {
  $('#submit').click(function(e){
      e.preventDefault();
      call();
  });
});

function call() {
  var input = $(".inputPassword").val();
  var user= $("#username").val();
   $.ajax({
       type: "post",
       data: {
           login: user,
           password: input
       },
       url: "https://efigence-camp.herokuapp.com/api/login",
       error: function(response) {
           console.log(response.responseText);
       },
       success: function(response) {
           console.log(response);
       }
   });
}

// var visibleLogin =document.querySelector(".fi-x");
// visible.addEventListener("click",function(){
//   console.log("wokr");
//
//
// })

var xButton=$('.fi-x');
xButton.on("click",function(){
  $("#username").removeClass("hiden");
  $("#username").addClass("unHide");
  $(".fake-login").addClass("hiden");
})

var fakelogin=$(".fake-login");
fakelogin.on("click",function(){
  $(this).addClass("hiden");
})
