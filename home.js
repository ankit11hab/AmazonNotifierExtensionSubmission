document.getElementById('signOut').addEventListener('click',()=>
{
    var data = {type:"signOut"};
    chrome.runtime.sendMessage(data);
})


document.getElementById('addtheproduct').addEventListener('click',()=>
{
    var producturl = document.getElementById("producturl").value;
    var maxprice = document.getElementById("maxprice").value;
    var data = {type:"addtheproduct", producturl:producturl, maxprice:maxprice};
    chrome.runtime.sendMessage(data);
})


/* 

var config = {
    apiKey: "AIzaSyAjEqNkqyKQasXlrcswG87jOiFxiSmwAuY",
    authDomain: "fir-web-login-85c7e.firebaseapp.com",
    projectId: "fir-web-login-85c7e",
    storageBucket: "fir-web-login-85c7e.appspot.com",
    messagingSenderId: "202456878284",
    appId: "1:202456878284:web:960d333a59ac53af8c0669",
    measurementId: "G-F6XKG1WBS5"
};
firebase.initializeApp(config);

const auth = firebase.auth();


function signUp() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");

}



function signIn() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    // document.getElementById('details').innerHTML = email;



}


function signOut() {

    auth.signOut();
    //window.location = "index.html";
}



auth.onAuthStateChanged(function (user) {

    if (user) {
        var email = user.email;
        emaildata = email;
        document.getElementById('details').innerHTML = email;

        //module.exports.emaildata = email.value;

    } else {

        //alert("No Active User");
        //no user is signed in
        window.location = "index.html";
    }



});

function sendmail() {
    const url = document.getElementById('producturl').value;
    const minPrice = document.getElementById('maxprice').value
    console.log(url);
    console.log(minPrice);
    console.log(emaildata);
  $.ajax({
    url: "http://localhost:3000/",
    data: { url: url, minPrice:minPrice, email:emaildata },
    type: "POST",
    success: (response) => {
      console.log("Response: ", response);
    },
    error: (response) => {
      console.log("Response: ", response);
    },
  });
} */