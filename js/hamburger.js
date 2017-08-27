const hamburger =document.querySelector(".hamburger");

hamburger.addEventListener("click",function(){
  document.querySelector(".login-page-nav-main").classList.toggle("visible");
})


$(document).foundation();
var img=("<img src="+"./img/wallet.png"+" "+ "alt='wallet-icon'>")
var img2=("<img src="+"./img/pig.png"+" "+ "alt='pig-icon'>");


$(document).ready(function () {
       getProducts();

});



// function getProducts() {
//    $.ajax({
//        method: "GET",
//        url: "https://efigence-camp.herokuapp.com/api/data/products",
//        error: function(response) {
//
//        },
//        success: function(response) {
//            console.log(response)
//
//            const productsContainer = document.querySelector(".product-list");
//
//            for(var i = 0; i < response.content.length; i++) {
//
//                const template = "<div class='product'>"+"<div class='product-wraper'>" +
//                    "<h6>"+response.content[i].type+"</h6><span class='amount'>"+response.content[i].amount+"</span><span>"+response.content[i].currency+"</span>"+"</div>"+"</div>";
//
//                productsContainer.insertAdjacentHTML("beforeend", template);
//            }
//        }
//    });
// }
