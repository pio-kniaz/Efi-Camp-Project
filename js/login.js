$(document).foundation();

(function(){

const button=document.querySelector(".submitButton");
const inputPassword=document.querySelector('.inputPassword');

button.addEventListener("click",function(event){
  event.preventDefault();

  if (inputPassword.value!="") {
      window.location.replace("index.html");
      inputPassword.classList.remove("warrning");
  }
  else{
    inputPassword.classList.add("warrning");
    }
})
})();
