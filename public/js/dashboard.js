function skillSlide() {
    var b = document.getElementById('skills-content').offsetTop;
    window.scroll({top: b, left: 0, behavior: 'smooth'});
}

function slideupBtn() {
    var n = document.getElementById('body');
    window.scroll({top: n, left: 0, behavior: 'smooth'});
};

function bgChange() {
    var x = document.getElementById('rot');
    x.style.transition = "all 1s ease";
}

