const line = document.querySelector('.line');

window.addEventListener('scroll', () => {
    line.style.width = (pageYOffset * 100 / (document.documentElement.scrollHeight - window.innerHeight) + "%")
});