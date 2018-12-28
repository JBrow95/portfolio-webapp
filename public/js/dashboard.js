function skillSlide() {
    var b = document.getElementById('skills-content').offsetTop;
    window.scroll({top: b, left: 0, behavior: 'smooth'});

    var circle = document.getElementById('trans');
    var dots = circle.querySelectorAll('button')

    dots.forEach(element => {
        element.style.borderColor = "#EDF5E1";
    });
}

function slideupBtn() {
    var n = document.getElementById('body');
    window.scroll({top: n, left: 0, behavior: 'smooth'});

    var circle = document.getElementById('trans');
    var dots = circle.querySelectorAll('button')

    dots.forEach(element => {
        element.style.borderColor = "#EDF5E1";
    });
};

function bgChange() {
    var x = document.getElementById('rot');
    x.style.transition = "all 1s ease";
}

function slide3Btn() {
    var b = document.getElementById('about').offsetTop;
    window.scroll({top: b, left: 0, behavior: 'smooth'});

    var circle = document.getElementById('trans');
    var dots = circle.querySelectorAll('button')

    dots.forEach(element => {
        element.style.borderColor = "#05386B";
        element.style.transition = "1s"
    });
}