var span = document.querySelector('span.line')
    , li = document.querySelectorAll('nav ul li')
    , ul = document.querySelector('ul');

function setPosition() {
    span.style.left = (ul.getBoundingClientRect().left + 20) + 'px';
    span.style.top = (ul.getBoundingClientRect().top + 50) + 'px';
}
setPosition();
for (var i = 0; i < li.length; i++) {
    li[i].dataset.index = i + 1;
}
for (var i = 0; i < li.length; i++) {
    li[i].onmouseover = function () {
        console.log(window.pageYOffset);
        var style = this.getBoundingClientRect();
        span.style.left = (style.left - 5) + 'px';
    }
    li[i].onmouseout = function () {
        setPosition();
    }
}