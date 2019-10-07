
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
  
var table-places=document.getElementById("table-places-hair").value;

firebase.database().ref('table-places/'+messages).once('value').then(function(snapshot){
	
	var fname=snapshot.val().name;
	var lname=snapshot.val().company;
	var email=snapshot.val().email;
	var phone=snapshot.val().phone;
	var message=snapshot.val().message;
	
	$("#table_body_hair").append("<tr><td>"+ fname + "</td><td>" + lname + "</td><td>" + email + "</td><td>" + phone + "</td><td>" + message + "</td></tr>");
});*/







	