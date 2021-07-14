document.getElementById('signIn').addEventListener('click',()=>
{
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var data = {type:"signIn",email:email.value, password:password.value};
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

function signUp(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    alert("Signed Up");
    
}



function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    
    
}


function signOut(){
    
    auth.signOut();
    //window.location = "index.html";
}



auth.onAuthStateChanged(function(user){
    
    if(user){
        
        var email = user.email;
        
        //Take user to a different or home page
        window.location = "home.html";
        //is signed in
        
    }else{
        
        //alert("No Active User");
        //no user is signed in
    }
    
    
    
});

document.querySelector('#signIn').addEventListener('click', () => 
{
    chrome.runtime.sendMessage({ message: 'signIn' },
        function (response) 
        {
            if (response.message === 'success') 
            {
                window.location.replace('./home.html');
            }
        });
});
 */