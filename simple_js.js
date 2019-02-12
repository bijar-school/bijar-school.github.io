$(document).ready(function(){

  $("#button").click(function(){

    $("img").css({

      'border': "solid 2px red",

    });

    $("#heading").css({

      "color":"#ff0000",

    });

    $("#heading").animate({

      fontSize: '5em'}, "slow"

    );

    $("#heading").animate({

      fontSize: '1em'}, "slow"

    );




  })

});
