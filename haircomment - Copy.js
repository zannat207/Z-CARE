
 


// Reference messages collection
var messagesRef = firebase.database().ref().child("messages1");


messagesRef.on("child_added",snap=> {
	

	var name=snap.child("name").val();
	var message=snap.child("message").val();
	
		$("#table_body_hair").append("<tr><td>"+ name + "</td><td>" + message + "</td></tr>");
			//$("#table_body_hair").append("<tr><td>"+ name +  "</td></tr>");
			//document.getElementById("message").innerHTML=message;
	
});

/*var commentsRef = firebase.database().ref('post-comments/' + messages1);
commentsRef.on('child_added', function(data) {
  addCommentElement(postElement, data.key, data.val().text, data.val().author);
});*/





