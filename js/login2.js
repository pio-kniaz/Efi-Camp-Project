$(document).foundation();
// variables
var xButton=$(".fi-x");
var submitButton= $(".submitButton");

// login input.value
var loginInput=$("#username");

//password input.value
var passwordInput= $("#password");

// submitButton
submitButton.on("click",function(event){
  event.preventDefault();
  call();
  console.log("work");
})

// xButton-deleting wrong login
xButton.click(function(event){
  $("#username").removeClass("hiden");
  $("#username").addClass("unHide");
  $(".fake-login").addClass("hiden");
})
function call(){
  var login=loginInput.val();
  var password= passwordInput.val();
  $.ajax({
    type: "post",
    data: {
      login: login,
      password: password
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
