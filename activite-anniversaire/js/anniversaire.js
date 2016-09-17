// couleur du background à l'arrivé de la page
$("body").css("background-color", "#f1c40f");


// Clique sur le titre qui fait apparaitre la 1er div
$(function(){
    $("#header").on("click", function(){
        $( "#msg1" ).slideDown("slow",function(){

        });
    });
});

// Clique sur la 1er div qui fait apparaitre la 2nd
$(function(){
    $("#msg1").on("click", function(){
        $( "#msg2" ).slideDown("slow",function(){

        });
    });
});

// Clique sur la 2nd div qui fait apparaitre la 3è
$(function(){
    $("#msg2").on("click", function(){
        $( "#msg3" ).slideDown("slow",function(){

        });
    });
});

// Clique sur la 3è div qui fait apparaitre le background + changement de text + musique de fou :)
$(function(){
    $("#msg3").on("click", function(){
        $('body').css('background-image', "url('http://www.gif-maniac.com/gifs/36/35745.gif')");

        $("#msg1").text("Profite de la vie!");

        $("#msg2").text("40 ans!");

        $("#msg3").text("A quand le mariage!");
        // function pour déclencher la musique 
        $(document).ready(function() {
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'audio-pat-seb.mp3');
            audioElement.play();
            if(audioElement = 1)
            {
                audioElement.play();
            }

        });

    });
});

var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'audio-pat-seb.mp3');

/*$( "#track1" ).mouseover(function() {
    audioElement.play();
  }).mouseout(function(){
     audioElement.pause();
  })
*/
