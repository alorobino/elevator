$(document).ready(function(){
    var lift = $("#lift");
    var top = parseInt(lift.css('top'));
    const numFloors = 5;

    $( document ).keydown(function(event) {
    let theKeyIPressedAsAString = event.key
    let thatKeyAsInteger = parseInt(theKeyIPressedAsAString)
    let floorHeight = 500 - thatKeyAsInteger * 100
    if (thatKeyAsInteger > 0 && thatKeyAsInteger <= numFloors ){
      lift.css({top: floorHeight +"px"});
    }
    })

     $(".click-me").click(function(e) {
         let x = parseInt($(this).html())
         let floorHeight = 500 - x * 100
         lift.css({top: floorHeight +"px"})
     })

})
