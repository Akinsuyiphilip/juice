var form = document.getElementById("form");
var error1 = []
var error2 = []
var error3 = []


form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    var username = document.getElementById("username");
    var password = document.getElementById("password")
    var password2 = document.getElementById("password2")


  
    if(username.value == "" ) {
        error1.push("please input your user name")
    }
    if(password.value == "") {
        error2.push("please input password")
    } 
    else{ open("index.html")}
    
     var errormessage1 = document.getElementById("error-message1")
     var errormessage2 = document.getElementById("error-message2")
     


     errormessage1.innerText = error1
     errormessage2.innerText = error2
     

})



var toplogin = document.getElementById("top-login")
var midsignup = document.getElementById("midsignup")

toplogin.addEventListener("click", function () {
    window.open("login.page.html");
})
midsignup.addEventListener("click", function () {
    window.open("signup page.html");
})


