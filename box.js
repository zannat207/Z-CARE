var messagesRef = firebase.database().ref().child("messages1");


messagesRef.on("child_added",snap=> {
	

	var name=snap.child("name").val();
	var message=snap.child("message").val();
	


//var user=document.getElementById("tour-places-div").value;
//firebase.database().ref('messeges1/'+user).once('value').then(function(snapshot){
	//var name=snapshot.val().name;
	//var message=snapshot.val().message;
	document.getElementById('name1').value=name;
	document.getElementById('comment1').value= message
	//$("#tour-places-div").append(name+" "+message);
	$("#table_body_hair").append("<tr><td>"+ document.getElementById('name1').value=name +document.getElementById('comment1').value= message + "</td></tr>");
	//$("#comment1").append(message);
	
});

	