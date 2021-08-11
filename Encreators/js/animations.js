const sr=ScrollReveal({
    origin:'top',
    distance:'20px',
    duration: 2000,
    reset: true
});
sr.reveal('.mContainer',{delay: 3100 });

// document.getElementById("ham").onmouseover = function() {mouseOver()};
var delay = function (elem, callback) {
    var timeout = null;
    elem.onmouseover = function() {
        // Set timeout to be a timer which will invoke callback after 1s
        timeout = setTimeout(callback, 500);
    };

    elem.onmouseout = function() {
        // Clear any timers set to timeout
        clearTimeout(timeout);
    }
};


delay(document.getElementById('ham'), function() {
    mouseOver()
});
function mouseOver() {
    document.getElementById("active").checked=true;
    document.getElementById("menu-btn").style.opacity='1';

}

checkbox = document.getElementById('active');

checkbox.addEventListener('change', e => {

    if(e.target.checked){
        document.getElementById("menu-btn").style.opacity='1';
        
    }
    else{
        document.getElementById("menu-btn").style.opacity='0';

    }
});

document.addEventListener("click", (evt) => {
    const flyoutElement = document.getElementById("wrapper");
    let targetElement = evt.target; // clicked element

    do {
        if (targetElement != flyoutElement) {
            // This is a click inside. Do nothing, just return.
            document.getElementById("active").checked=false;
            document.getElementById("menu-btn").style.opacity='0';
            return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
    } while (targetElement);

    // This is a click outside.
    // document.getElementById("flyout-debug").textContent = "Clicked outside!";
});
