document.getElementById('signUp').addEventListener('click',()=>
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var data = {type:"signUp",email:email, password:password};
    chrome.runtime.sendMessage(data);
})





/* var config = {
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
auth.onAuthStateChanged(function (user) {

    if (user) {

        var email = user.email;
        alert("Active User " + email);

        //Take user to a different or home page
        window.location = "index.html";
        //is signed in

    } else {

        //alert("No Active User");
        //no user is signed in
    }



}); */