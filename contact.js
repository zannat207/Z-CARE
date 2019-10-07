// Firstly, the Firebase configuration
  var firebaseConfig = {
	  //add your own firebase config here
    apiKey: "AIzaSyCCABDZSqwY0tc8Jq6ZA2HD4mA_ftwlAjA",
    authDomain: "contacttest-b251f.firebaseapp.com",
    databaseURL: "https://contacttest-b251f.firebaseio.com",
    projectId: "contacttest-b251f",
    storageBucket: "",
    messagingSenderId: "497534615854",
    appId: "1:497534615854:web:7435b108f4da148c49babf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = document.getElementById('fname').value; //getInputVal('name');
  var company = getInputVal('lname');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(fname, lname, email, phone, message);

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
    document.location.href="./index.html";
  },3050);

  
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname:lname,
    email:email,
    phone:phone,
    message:message
  });
}