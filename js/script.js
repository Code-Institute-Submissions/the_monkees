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

/*jAVASCRIPT*/

/*TOUR.HTML*/
//window.alert(5+6);