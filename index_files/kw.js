function fixButtons(col) {
    var leftButton = document.getElementById('move-left');
    var rightButton = document.getElementById('move-right');

    if (col < 0) {
        rightButton.style.visibility = 'hidden';
        leftButton.style.visibility = 'visible';
        return;
    }

    if (col > 0) {
        leftButton.style.visibility = 'hidden';
        rightButton.style.visibility = 'visible';
        return;
    }

    leftButton.style.visibility = 'visible';
    rightButton.style.visibility = 'visible';
}

document.addEventListener('DOMContentLoaded', function() {
    var col = 0;

    document.getElementById('contact-button').addEventListener('click', function() {
        var nav_box = document.getElementById('nav-box2');
        var column_box = document.getElementById('column-box2');
        nav_box.style.marginLeft = "500px";
        column_box.style.marginLeft = "1200px";
        col = 1;
        fixButtons(col);
    });
    document.getElementById('gallery-button').addEventListener('click', function() {
        var nav_box = document.getElementById('nav-box2');
        var column_box = document.getElementById('column-box2');
        nav_box.style.marginLeft = "0px";
        column_box.style.marginLeft = "0px";
        col = 0;
        fixButtons(col);
    });
    document.getElementById('exhibition-button').addEventListener('click', function() {
        var nav_box = document.getElementById('nav-box2');
        var column_box = document.getElementById('column-box2');
        nav_box.style.marginLeft = "-500px";
        column_box.style.marginLeft = "-1200px";
        col = -1;
        fixButtons(col);
    });
    document.getElementById('move-right').addEventListener('click', function() {
        var nav_box = document.getElementById('nav-box2');
        var column_box = document.getElementById('column-box2');
	    if (col > -1) {
		    col--;
	    }
        nav_box.style.marginLeft = col * 500 + "px";
        column_box.style.marginLeft = col * 1200 + "px";
        fixButtons(col);
	    event.cancelBubble = true;
	    event.returnValue = false;
    });
    document.getElementById('move-left').addEventListener('click', function() {
        var nav_box = document.getElementById('nav-box2');
        var column_box = document.getElementById('column-box2');
	    if (col < 1) {
		    col++;
	    }
        nav_box.style.marginLeft = col * 500 + "px";
        column_box.style.marginLeft = col * 1200 + "px";
        fixButtons(col);
	    event.cancelBubble = true;
	    event.returnValue = false;
    });
    document.onkeydown = function(event) {
        var nav_box = document.getElementById('nav-box2');
        var column_box = document.getElementById('column-box2');
        if (event.keyCode === 37 && !event.ctrlKey && !event.altKey) { //links
            if (col < 1) {
                col++;
            }
            event.cancelBubble = true;
            event.returnValue = false;
        }
        if (event.keyCode === 39 && !event.ctrlKey && !event.altKey) { //rechts
            if (col > -1) {
                col--;
            }
            event.cancelBubble = true;
            event.returnValue = false;
        }
        nav_box.style.marginLeft = col * 500 + "px";
        column_box.style.marginLeft = col * 1200 + "px";
        fixButtons(col);
        return event.returnValue;
    };
});

/*
     FILE ARCHIVED ON 13:43:14 Oct 28, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 10:32:15 Dec 24, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/