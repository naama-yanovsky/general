// Initial animation function
const handleAnimation = (parameters) => {
    var hand = document.getElementById('hand');
    hand.style.display = 'none';

    // The logos animations
    var logo = document.getElementById('logo');
    logo.style.animation = 'ani 4s ';
    var logo2 = document.getElementById('logo2');
    logo2.style.animation = 'ani 4s ';
    var heading = document.getElementById('heading');
    heading.style.animation = 'ani 4s ';
    
    setTimeout(function() {
        logo.style.display = 'none';
        logo2.style.display = 'none';
        heading.style.display = 'none'; 
        document.getElementById('lesson-menu').style.visibility = "visible";
        document.body.style.overflow = "auto";
    }, 2750);

};

// Loading function
window.addEventListener('load', function() {
    document.getElementById('full-screen').addEventListener('click', handleAnimation);
});
