//starter2

$(document).ready(


    $("#zone-2 , #zone-3").hover(function(){
        $(this).addClass('green');
        }, function(){
        $(this).removeClass('green')
    }), 

    $("#zone-2 , #zone-3").click( function(){
        $(this).unbind()
        $(this).addClass('green');

        counter++;

        if(counter >= 2){
            console.log("congratulations");
        }
    }),

    $("#zone-1 , #zone-4").hover(function(){
        $(this).addClass('red');
        }, function(){
        $(this).removeClass('red')
    })
);


let zones = ['zone-3', 'zone-1', 'zone-4', 'zone-2'];
let counter = 0;