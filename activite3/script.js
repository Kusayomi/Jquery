 $(function(){
$('#btn1').click(function(){
  $('hr').after('<div id="conteneur">Texte du label <input type="text" id="tex"><button id="btnok">OK</button><button id="btnannuler">Annuler</button></div>');
  $('.btnprincipal').attr('disabled','disabled');
  $('#conteneur').hide().fadeIn(2000);
  $('#aide-label').hide().fadeIn(2000).load('insert-label.html #description1');
  $('#tex').focus();
  $('#btnok').click(function(){
    var lid =  '<span>' + $('#tex').val() + '</span>';
    $('#gauche').append(lid);
    $('#conteneur').fadeOut(2000,function(){
      $('#conteneur').remove();
      $('.btnprincipal').removeAttr('disabled');
    });
    $("#aide-label").fadeOut(2000);
  });
  $('#btnannuler').click(function(){
    $('#conteneur').fadeOut(2000,function(){
      $('#conteneur').remove();
      $('.btnprincipal').removeAttr('disabled');
    });
    $("#aide-label").fadeOut(2000);
  });  
});
$('#btn2').click(function(){
  $('hr').after('<div id="conteneur">id de la zone de texte <input type="text" id="tex"><button id="btnok">OK</button><button id="btnannuler">Annuler</button></div>');
  $('.btnprincipal').attr('disabled','disabled');
  $('#conteneur').hide().fadeIn(2000);
  $('#aide-texte').hide().fadeIn(2000).load('insert-text.html #description2');
  $('#tex').focus();
  $('#btnok').click(function(){
    var lid =  '<input type="text" id="' + $('#tex').val() + '"><br>';
    $('#gauche').append(lid);
    $('#conteneur').fadeOut(2000,function(){
      $('#conteneur').remove();
      $('.btnprincipal').removeAttr('disabled');
    });
    $("#aide-texte").fadeOut(2000);
  });
  $('#btnannuler').click(function(){
    $('#conteneur').fadeOut(2000,function(){
      $('#conteneur').remove();
      $('.btnprincipal').removeAttr('disabled');
    });
    $("#aide-texte").fadeOut(2000);
  });  
});
$('#btn3').click(function(){
  $('hr').after('<div id="conteneur">Texte du bouton <input type="text" id="tex"><button id="btnok">OK</button><button id="btnannuler">Annuler</button></div>');
  $('.btnprincipal').attr('disabled','disabled');
  $('#conteneur').hide().fadeIn(2000);
  $('#aide-bouton').hide().fadeIn(2000).load('insert-btn.html #description3');
  $('#tex').focus();
  $('#btnok').click(function(){
    var lid =  '<button>' + $('#tex').val() + '</button><br>';
    $('#gauche').append(lid);
    $('#conteneur').fadeOut(2000,function(){
      $('#conteneur').remove();
      $('.btnprincipal').removeAttr('disabled');
    });
    $("#aide-bouton").fadeOut(2000);
  });
  $('#btnannuler').click(function(){
    $('#conteneur').fadeOut(2000,function(){
      $('#conteneur').remove();
      $('.btnprincipal').removeAttr('disabled');
    });
    $("#aide-bouton").fadeOut(2000);
  });  
});
});

