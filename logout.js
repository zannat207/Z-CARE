 /*var firebaseConfig = {
    apiKey: "AIzaSyCJlWgtMrVY7c-taWrmjw0sE_e6B_De94w",
    authDomain: "z-care-6dce8.firebaseapp.com",
    databaseURL: "https://z-care-6dce8.firebaseio.com",
    projectId: "z-care-6dce8",
    storageBucket: "",
    messagingSenderId: "722405101527",
    appId: "1:722405101527:web:60e8ca12c2989a839f4592"
  };

  // Initialize Firebase

 firebase.initializeApp(firebaseConfig);*/
  const auth = firebase.auth();


function login_func(){
	const signupForm=document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e) => {
	e.preventDefault();
	
	const email  =signupForm['inputEmail'].value;
	const passward  =signupForm['inputPassword'].value;
	//signup the user
	
	auth.createUserWithEmailAndPassword(email,passward).then(cred => {
		//console.log(cred.user);
		const modal= document.querySelector('#modal-signup');
		//M.Modal.getInstance(modal).close();
		signupForm.reset();
		document.location.href = "./index.html?Signup=Successful";
		
});

});
	
	
	const loginForm=document.querySelector('#login-form');
loginForm.addEventListener('submit',(e) => {
	e.preventDefault();
	const email  =loginForm['inputEmail'].value;
	const passward  =loginForm['inputPassword'].value;
	auth.signInWithEmailAndPassword(email,passward).then(cred => {
		console.log(cred.user);
		const modal= document.querySelector('#modal-login');
		//M.Modal.getInstance(modal).close();
		loginForm.reset();
		document.location.href = "./index.html?Login=Successful";

	});
	
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