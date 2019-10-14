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


// Reference messages collection
var messagesRef = firebase.database().ref('messages2');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = document.getElementById('name').value; //getInputVal('name');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

  //redirect to home page

  setTimeout(function(){
    document.location.href="./skin.html";
  },3050);

  
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    message:message
  });
}

/*firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log("logged in");
   // document.getElementById('table-places-hair').style.display='block';
	    document.getElementById('#table_body_hair').style.display='block';
    document.getElementById('cse').style.display='none';
  } else {
    console.log("logged out");
    document.getElementById('table-places-hair').style.display='none';
	// document.getElementById('#table_body_hair').style.display='none';
   document.getElementById('cse').style.display='block';
  }
});*/


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.uid);
    if (user.uid != null) {
     document.getElementById('table-places-hair').style.display='block';
	  document.getElementById('cse').style.display='none';
    } else {
      document.getElementById('table-places-hair').style.display='none';
	   document.getElementById('cse').style.display='block';
    }
	  
  }
else {
      document.getElementById('table-places-hair').style.display='none';
	   document.getElementById('cse').style.display='block';
    
}
});