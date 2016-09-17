$(function(){
  $('#btn1').click(function(){
  $("#btn1, #btn2, #btn3").hide(); // dissimuler les btn au clic
  $('hr').after('<div id="conteneur">Texte du label <input type="text" id="tex"><button id="btnok">OK</button> <button id="btn-annuler">Annuler</button></div>');//ajout btn annuler
  $("#conteneur").hide().fadeIn("slow"); // apparition du conteneur a droite lors du click
  $('#btnok').click(function(){
    var lid =  '<span>' + $('#tex').val() + '</span>';
    $('#gauche').append(lid);
    $('#conteneur').fadeOut("slow");
    $("#btn1, #btn2, #btn3").show(); // réaparition des 3 btn lorsque l'on clique su "ok"
  });
  $("#btn-annuler").click(function(){ // recharge la page au lieu du "show" si on click sur "annuler" pour une raison de pratique
    location.reload();
  });
  $("#btnok, #btn-annuler").hover(function(){   // Effet ombrage sur les btn de la div conteneur
    $(this).css("box-shadow", "6px 8px 6px #888888");
    }, function(){
    $(this).css("box-shadow", "none");
    });
});

// IDEM pour les autres cas 
$('#btn2').click(function(){
  $("#btn1, #btn2, #btn3").hide();
  $('hr').after('<div id="conteneur">id de la zone de texte <input type="text" id="tex"><button id="btnok">OK</button><button id="btn-annuler">Annuler</button></div>');
  $("#conteneur").hide().fadeIn("slow");
  $('#btnok').click(function(){
    var lid =  '<input type="text" id="' + $('#tex').val() + '"><br>';
    $('#gauche').append(lid);
    $('#conteneur').fadeOut("slow");
    $("#btn1, #btn2, #btn3").show();
  });
  $("#btn-annuler").click(function(){
    location.reload();
  });
  $("#btnok, #btn-annuler").hover(function(){
    $(this).css("box-shadow", "6px 8px 6px #888888");
    }, function(){
    $(this).css("box-shadow", "none");
    });
});

$('#btn3').click(function(){
  $("#btn1, #btn2, #btn3").hide();
  $('hr').after('<div id="conteneur">Texte du bouton <input type="text" id="tex"><button id="btnok">OK</button><button id="btn-annuler">Annuler</button></div>');
  $("#conteneur").hide().fadeIn("slow");
  $('#btnok').click(function(){
    var lid =  '<button>' + $('#tex').val() + '</button>';
    $('#gauche').append(lid);
    $('#conteneur').fadeOut("slow");
    $("#btn1, #btn2, #btn3").show();
  });
  $("#btn-annuler").click(function(){
    location.reload();
  });
  $("#btnok, #btn-annuler").hover(function(){
    $(this).css("box-shadow", "6px 8px 6px #888888");
    }, function(){
    $(this).css("box-shadow", "none");
    });
});

});

// Fade in des 3 btn de base + ombrage au survol
$(function(){
  $("#hidden, hr").fadeIn("slow");
  $("button").hover(function(){
    $(this).css("box-shadow", "6px 8px 6px #888888");
    }, function(){
    $(this).css("box-shadow", "none");
    });

});