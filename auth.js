// Firstly, the Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCJlWgtMrVY7c-taWrmjw0sE_e6B_De94w",
    authDomain: "z-care-6dce8.firebaseapp.com",
    databaseURL: "https://z-care-6dce8.firebaseio.com",
    projectId: "z-care-6dce8",
    storageBucket: "",
    messagingSenderId: "722405101527",
    appId: "1:722405101527:web:60e8ca12c2989a839f4592"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
 // const db=firebase.firestore();
  //db.settings({timestampsInSnapshots:true});


window.onload=function(){
	const signupForm = document.querySelector('#signup-form');
  

signupForm.addEventListener('submit', (e)=> {
  e.preventDefault();
  
  // get user info
  const email = signupForm['inputEmail'].value;
  const password = signupForm['inputPassword'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    document.location.href = "./index.html?Logout=Successful";
    console.log(cred.user);
   
});
});
}


function login(){

  var userEmail = document.getElementById("inputEmail").value;
  var userPass = document.getElementById("inputPassword").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(e=>{
    document.location.href = "./index.html?Login=Successful";
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
     
    window.alert("Error : " + errorMessage);
  });
}


function logout_func(){
  firebase.auth().signOut();
  document.location.href = "./index.html?Logout=Successful";
}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log("logged in");
    document.getElementById('logout').style.display='block';
    document.getElementById('login').style.display='none';
  } else {
    console.log("logged out");
    document.getElementById('logout').style.display='none';
    document.getElementById('login').style.display='block';
  }
});