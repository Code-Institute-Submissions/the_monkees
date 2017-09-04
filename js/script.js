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

/*javascript*/
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

