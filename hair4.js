// Reference messages collection
var messagesRef = firebase.database().ref('messages4');

// Listen for form submit
document.getElementById('contactForm4').addEventListener('submit', submitForm);

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
  document.getElementById('contactForm4').reset();

  //redirect to home page

  setTimeout(function(){
    document.location.href="./hair.html";
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