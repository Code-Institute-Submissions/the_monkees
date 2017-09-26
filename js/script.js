/*JQUERY*/
$(document).ready(function(){
	$("#dublin-gig").hide();
	$("#london-gig").hide();
	$("#los-angeles-gig").hide();
	$("#sydney-gig").hide();
	$("#p-dublin").click(function(){
		$("#dublin-gig").slideToggle('slow');
	});
	$("#p-london").click(function(){
		$("#london-gig").slideToggle('slow');
	});
	$("#p-los-angeles").click(function(){
		$("#los-angeles-gig").slideToggle('slow');
	});
	$("#p-sydney").click(function(){
		$("#sydney-gig").slideToggle('slow');
	});
});

/*javascript - book-event.html*/
function getquotes() {
	var fname = document.getElementById('fname').value;
	var email = document.getElementById('email').value;
	var telephone = document.getElementById('telephone').value;
	var venuename = document.getElementById('venuename').value;
	var city = document.getElementById('city').value;
	var guest = document.getElementById('guest').value;
	if (!fname.length || !email.length || !telephone.length || !venuename.length || !city.length || !guest.length){
		window.alert("you have to compile missing input values")
	}else{
		document.getElementById("book-event-quotes").innerHTML = "The quote price is about 800$. Don't worry we'll be in touch with you as soon as possible. Thank you!!";
	}
}

/*javascript - chat-room.html*/
function insert_comments() {
	var firstname = document.getElementById('firstname').value;
	var date = document.getElementById('date').value;
	var comments = document.getElementById('comments').value;
	//Create a <p> elements
	var paragraph1=document.createElement("P");
	var paragraph2=document.createElement("P");
	var paragraph3=document.createElement("P");
	//Create a <div> element
	var div1=document.createElement("div");

	var node1=document.createTextNode(firstname);
	var node2=document.createTextNode(comments);
	var node3=document.createTextNode(date);

	paragraph1.id = "chat-room-name";
	paragraph2.id = "chat-room-comments";
	paragraph3.id = "chat-room-date";

	//Adding text to paragraph
	paragraph1.appendChild(node1);
	paragraph2.appendChild(node2);
	paragraph3.appendChild(node3);
	//Adding paragraph in div
	div1.id="paragraph-boxes";
	div1.appendChild(paragraph1);
	div1.appendChild(paragraph2);
	div1.appendChild(paragraph3);

	var comments_container = document.getElementById("comments-container");

	if (!firstname.length || !date.length || !comments.length){
		window.alert("you have to compile missing input values")
	}else{
		//Adding div in HTML page
		comments_container.appendChild(div1);
	}

	document.getElementById('firstname').value="";
	document.getElementById('date').value="";
	document.getElementById('comments').value="";
}

/*javascript - log-in.html*/
function log_in() {
	var sign_in_username = document.getElementById('sign_in_username').value;
	var sign_in_password = document.getElementById('sign_in_password').value;
	
	if (!sign_in_username.length || !sign_in_password.length){
		window.alert("you have to compile missing input values")
	}else{
		window.location.href="index.html";
	}
}

/*javascript - log-in.html*/
function registration() {
	var reg_username = document.getElementById('reg_username').value;
	var reg_email = document.getElementById('reg_email').value;
	var reg_password = document.getElementById('reg_password').value;

	if (!reg_username.length || !reg_email.length || !reg_password.length){
		window.alert("you have to compile missing input values")
	}else{
		window.alert("registration completed successfully!!")
		document.getElementById('reg_username').value="";
		document.getElementById('reg_email').value="";
		document.getElementById('reg_password').value="";
	}
}