


/*const auth = firebase.auth();
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
  firebase.initializeApp(firebaseConfig);*/
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.uid);
    if (user.uid == "guOhVelad5M740JqlFLJN0NLV7w2") {
      createTable();
    } else {
      document.location.href = "./contact.html?invalid_action_from_inbox";
    }
	  
  }
else {
      document.location.href = "./contact.html?invalid_action_from_inbox";  
}
});

var refUser = "admin";
var userRef = firebase.database().ref(refUser);


function createTable() {
var messagesRef = firebase.database().ref().child("messages");


messagesRef.on("child_added",snap=> {
	

	var name=snap.child("name").val();
	var company=snap.child("company").val();
	var email=snap.child("email").val();
	var phone=snap.child("phone").val();
	var message=snap.child("message").val();
	
	$("#table_body").append("<tr><td>"+ name + "</td><td>" + company + "</td><td>" + email + "</td><td>" + phone + "</td><td>" + message + "</td></tr>");
	
});
}