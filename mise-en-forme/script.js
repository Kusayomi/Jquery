// COULEURS FONDS
$(function(){

    $("#couleur-fond").on("click", function(){
    if($("#couleur-fond").val() === "#FFFFFF")
    { 
      $("#contenu").css("background-color", "#FFFFFF");
    }
    else if($("#couleur-fond").val() === "#9FFEF1")
    { 
      $("#contenu").css("background-color", "#9FFEF1");
    }
    else if($("#couleur-fond").val() === "#9FFECE")
    { 
      $("#contenu").css("background-color", "#9FFECE");
    }
    else if($("#couleur-fond").val() === "#FAFE9F")
    { 
      $("#contenu").css("background-color", "#FAFE9F");
    }
  });
});
 
/// FORMATAGE TEXTE STYLE 
$(function(){

    $("#texte").on("click", function(){
    if($("#texte").val() === "Normal")
    { 
      $("#contenu").css("font-weight", "normal");
    }
    else if($("#texte").val() === "Gras")
    { 
      $("#contenu").css("font-weight", "bold");
    }
    else if($("#texte").val() === "Italique")  
    { 
      $("#contenu").css("font-style", "italic");
    }
    else if($("#texte").val() === "Souligne")
    { 
      $("#contenu").css("text-decoration", "underline");
    }
    else if($("#texte").val() === "reset")
    { 
      $("#contenu").css("text-decoration", "none");
      $("#contenu").css("font-style", "initial");
      $("#contenu").css("font-weight", "initial");
    }
  });
});


/// FORMATAGE TEXTE POLICE
$(function(){

    $("#police").on("click", function(){
    if($("#police").val() === "Open Sans")
    { 
      $("p").css("font-family", "Open Sans");
    }
    else if($("#police").val() === "Courier New")
    { 
      $("p").css("font-family", "Courier New");
    }
    else if($("#police").val() === "Arial")  
    { 
      $("p").css("font-family", "Arial");
    }
  });
});

/// FORMATAGE TEXTE POLICE 1er PHRASE
$(function(){

    $("#police-prem-phrase").on("click", function(){
    if($("#police-prem-phrase").val() === "Open Sans")
    { 
      $("#first-sentence").css("font-family", "Open Sans");
    }
    else if($("#police-prem-phrase").val() === "Courier New")
    { 
      $("#first-sentence").css("font-family", "Courier New");
    }
    else if($("#police-prem-phrase").val() === "Arial")  
    { 
      $("#first-sentence").css("font-family", "Arial");
    }
  });
});

/// FORMATAGE TEXTE POLICE 1er CARACTERE
$(function(){

    $("#prem-car-phrases").on("click", function(){
    if($("#prem-car-phrases").val() === "Normal")
    { 
      $("span").css("font-weight", "normal");
    }
    else if($("#prem-car-phrases").val() === "Gras")
    { 
      $("span").css("font-weight", "bold");
    }
  });
});

$('#prem-car-phrases').change(function() {
  var pcp = $('#prem-car-phrases option:selected').val();
  if (pcp == 'Gras') {
    $('p').each(function() {
      var tableau = $(this).text().split('. ');
      if (tableau.length == 1) {}
      else {
        var tableau2 = $.map(tableau, function(el, ind) {
          if (el[0] != null) return '<b>' + (el[0]) + '</b>' + el.substring(1) + '. ';
        });  
        $(this).html(tableau2.join(''));
      }  
    });
  }

  if (pcp == 'Normal') {
    $('p').each(function() {
      var unPar = $(this).html();
      if (unPar.indexOf('<img') == -1)
        $(this).text($(this).text());
    });
  }

});

/// FORMATAGE TEXTE MOT EN ROUGE

/*
  $(function() {
    $('#action').click(function() {
      var leTexte = $('#texte').val();
      var laPosition = $('#position').val();
      var leResultat = 'Le caractère en position ' + laPosition + ' est un "' + leTexte.charAt(laPosition) + '"';
      $('#resultat').text(leResultat);
    });  
  }); 
*/

$('#couleurMot').click(function() {
  var mot = $('#mot').val();
  var tableau = $('p:first').text().split(' ');
  var tableau2 = $.map(tableau, function(el, ind) {
    if (ind+1 == mot) return ('<font color="red">' + el + '</font>')
    else return(el);
    });  
    $('p:first').html(tableau2.join(' '));
});

myFunction();
/// BORDER IMAGE

$(function(){
  $("#bordure-images").click(function(){
    if($("#bordure-images").val() === "Rien")
    { 
      $("#image").css("border-style", "none");
    }
    else if($("#bordure-images").val() === "Simple")
    { 
      $("#image").css("border-style", "solid");
    }
    else if($("#bordure-images").val() === "Double")
    { 
      $("#image").css("border-style", "double");
    }
  });
});



/*
 $(function() {
    function bis() {
      $('#balle').animate({left: '+=200'}, 'slow')
                 .animate({top: '+=200'}, 'slow')
                 .animate({left: '-=200'}, 'slow')
                 .animate({top: '-=200'}, 'slow', bis);
    };
    bis();
  });
*/

/// Désactivation Jquery/ animation

$(function(){
  $("#raz").click(function(){
      jQuery.fx.off = true;
  });

  $("#on").click(function(){
    location.reload();
  });

})  
