
// BTN LABEL qui fait apparaître le champ pour remplir le label
$(".form-label").hide();
$(function(){
	$("#btn-label").on("click", function(){
		$(".form-label").show();
	});
});

// Controle de saisie du champ LABEL + ajout du label dans la div de gauche
$(function(){

	$("#submit-label").on("click", function(){
		if($("#text-label").val() === "")
		{
			alert("Le champ ne doit pas être vide");
		}
		else
		{
			label_name = $("#text-label").val();
			console.log(label_name);
			$("#gauche").append("<br /><br /><span>" + label_name + "</span> ");
			$(".form-label").hide();
		}
		
	});

});



// BTN TEXT qui fait apparaître le champ pour remplir l'id de la zone de texte
$(".form-text").hide();
$(function(){
	$("#btn-text").on("click", function(){
		$(".form-text").show();
	});
});

// Controle de saisie du champ Text ID + ajout du champ texte dans la div de gauche
$(function(){
	$("#submit-id").on("click", function(){
		if($("#text-label").val() === "")
		{	
			alert("Veuillez d'abord remplir le champ label");
		}		
		else if($("#text-id").val() === "")
		{
			alert("Le champ ne doit pas être vide");
		}
		else
		{
			$("#gauche").append(" <input type='text' id='"+ $("#text-id").val() +"'/>");
			$(".form-text").hide();
		}
	});
	
});


// BTN BOUTON qui fait apparaître le champ pour remplir le texte du bouton
$(".form-bouton").hide();
$(function(){
	$("#btn-bouton").on("click", function(){
		$(".form-bouton").show();
	});
});

// Controle de saisie du champ BOUTON + ajout du bouton dans la div de gauche
$(function(){
	$("#submit-btn").on("click", function(){
		if($("#text-label").val() === "")
		{	
			alert("Veuillez d'abord remplir le champ label");
		}		
		else if($("#text-id").val() === "")
		{
			alert("Veuillez d'abord remplir le champ texte ID");
		}
		else if($("#text-btn").val() === "")
		{
			alert("Le champ ne doit pas être vide");
		}
		else
		{
			$("#gauche").append(" <br /><br /><button>" + $("#text-btn").val() + "</button>");
			$(".form-bouton").hide();
		}
		
	});
	
});

