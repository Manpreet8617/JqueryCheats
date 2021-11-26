
// ===================Jquery cheat====================


// =====Trigger events on arrow keys

window.onkeydown = function(event) {	
    if (event.keyCode === 38) {       
    }
    else if (event.keyCode === 40) {
    }
};

//=====Move to desired div

$('html, body').animate({
    scrollTop: $("#desieredDiv").offset().top
}, 1100);

//====Ajax

$.ajax({
    url: 'url.php',
    type: "POST",
    cache: false,
    data: {test: "hello"},
    dataType: 'json',
    timeout: 2000
}).done(function(res){})

//=====Browser Height & Width 

 $(window).resize(function () {
            let x = $(window).height();
            let y = $(window).width();
            console.log(x);
            console.log(y);
        });