var emaildata;
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === "signIn") 
    {
        console.log("Entered 1");
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
        function signIn() {
            const promise = auth.signInWithEmailAndPassword(msg.email, msg.password);
            promise.catch(e => alert(e.message));
            emaildata = msg.email;
            localStorage.setItem("emaildata", msg.email);
            console.log(localStorage.getItem("emaildata"));

        }
        signIn();

        auth.onAuthStateChanged(function (user) {

            if (user) {
                //window.location = "home.html";
                chrome.browserAction.setPopup({
                    popup:"home.html"
                 });

                 //document.getElementById('details').innerHTML = localStorage.getItem("emaildata");
                //is signed in
            } else {

                //alert("No Active User");
                //no user is signed in
            }
        });
    }
    else if(msg.type === "signOut")
    {
        console.log("Entered 2");
        var config = {
            apiKey: "AIzaSyAjEqNkqyKQasXlrcswG87jOiFxiSmwAuY",
            authDomain: "fir-web-login-85c7e.firebaseapp.com",
            projectId: "fir-web-login-85c7e",
            storageBucket: "fir-web-login-85c7e.appspot.com",
            messagingSenderId: "202456878284",
            appId: "1:202456878284:web:960d333a59ac53af8c0669",
            measurementId: "G-F6XKG1WBS5"
        };
        //firebase.initializeApp(config);
        const auth = firebase.auth();
        function signout() {
            auth.signOut();
            //window.location = "index.html";
        }
        signout();
        auth.onAuthStateChanged(function (user) {

            if (user) {
                var email = user.email;
                
                document.getElementById('details').innerHTML = localStorage.getItem("emaildata");
        
                //module.exports.emaildata = email.value;
        
            } else {
        
                //alert("No Active User");
                //no user is signed in
                //window.location = "index.html";
                chrome.browserAction.setPopup({
                    popup:"index.html"
                 });
            }
        });
    }
    else if(msg.type === "addtheproduct")
    {
        function sendmail() {
            const url = msg.producturl;
            const minPrice = msg.maxprice;
            console.log(url);
            console.log(minPrice);
            console.log(emaildata);
          $.ajax({
            url: "http://localhost:3000/",
            data: { url: url, minPrice:minPrice, email:localStorage.getItem("emaildata") },
            type: "POST",
            success: (response) => {
              console.log("Response: ", response);
            },
            error: (response) => {
              console.log("Response: ", response);
            },
          });
        }
        sendmail();
    }
    else if(msg.type === "signUp")
    {
        console.log("Entered 2");
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

            var email = msg.email;
            var password = msg.password;
        
            const promise = auth.createUserWithEmailAndPassword(email, password);
            promise.catch(e => alert(e.message));
        
            alert("Signed Up");
        }
        signUp();
        auth.onAuthStateChanged(function (user) {

            if (user) {
                //Take user to a different or home page
                chrome.browserAction.setPopup({
                    popup:"index.html"
                 });
                //is signed in
        
            } else {
        
                //alert("No Active User");
                //no user is signed in
            }
        });
    }
})