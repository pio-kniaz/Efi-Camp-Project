$(document).foundation();

const fakeLogin=document.querySelector(".fake-login");
const button=document.querySelector(".submitButton");
const inputPassword=document.querySelector('.inputPassword');

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
           (function(){
             inputPassword.classList.add("warrning");

             $(".inputPassword").addClass("warrning");
             $('.triangle1').addClass("unHide");
             $('.triangle2').addClass("unHide");



           button.addEventListener("click",function(event){
             event.preventDefault();


           })
           })();
       },
       success: function(response) {
            inputPassword.classList.remove("warrning");
            $('.triangle1').removeClass("unHide");
            $('.triangle2').removeClass("unHide");

           console.log(response);
       }
   });
}


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
