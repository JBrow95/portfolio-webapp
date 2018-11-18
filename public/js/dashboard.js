function workSlide() {
    var b = document.getElementById('work-content').offsetTop;
    window.scroll({top: b, left: 0, behavior: 'smooth'});
}

function slideBtn() {
    var b = document.getElementById('work-content').offsetTop;
    window.scroll({top: b, left: 0, behavior: 'smooth'});
}

function slideupBtn() {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
}

function bgChange() {
    var x = document.getElementById('rot');
    x.style.transition = "all 1s ease";
}