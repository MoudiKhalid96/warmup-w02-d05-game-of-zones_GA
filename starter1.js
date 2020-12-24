//starter1

$(document).ready(

    $(".zone").hover(function(){
        $(this).addClass('green');
        }, function(){
        $(this).removeClass('green')
    }),

    $(".zone").click( function(){
        $(this).unbind()
        $(this).addClass('green');

        counter++;

        if(counter >= 4){
            console.log("congratulations");
        }
    })

)

let counter = 0;