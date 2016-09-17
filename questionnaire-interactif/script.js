$(function(){
  $('.reponse').hide(); // Dissimuler réponse
  $('.wrap').css({  // centrage du lien "test"
    "width": "1000px",
    "margin": "0 auto"
  });
  $('.question').css({  //stylisation des div
    "background-color": "#ecf0f1",
    "width": "1000px",
    "margin": "0 auto"
  });
  $('.images').css({  // bouger les images
    "position" : "relative",
    "bottom": "120px",
    "left": "900px",
  });

});
// Survol Div 1 //
$("a").on("click", function(){
  if($(':radio#r1:checked').val())
  {
    $('#reponse1').show().css("color", "green");
    $('#img1').attr("src", "reponse.png");
  }
  else
  {
    $('#reponse1').show().css("color", "red");
    $('#img1').attr("src", "erreur.png");
  }
});

// Survol Div 2 //
$("a").on("click", function(){
  if($(':radio#r4:checked').val())
  {
    $('#reponse2').show().css("color", "green");
    $('#img2').attr("src", "reponse.png");
  }
  else
  {
    $('#reponse2').show().css("color", "red");
    $('#img2').attr("src", "erreur.png");
  }
});

// Survol Div 3 //
$("a").on("click", function(){
  if($(':radio#r8:checked').val())
  {
    $('#reponse3').show().css("color", "green");
    $('#img3').attr("src", "reponse.png");
  }
  else
  {
    $('#reponse3').show().css("color", "red");
    $('#img3').attr("src", "erreur.png");
  }
});

