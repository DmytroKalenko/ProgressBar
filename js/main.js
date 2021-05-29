const line = document.querySelector('.line');

window.addEventListener('scroll', () => {
    line.style.width = (pageYOffset * 100 / (document.documentElement.scrollHeight - window.innerHeight) + "%")
});




const parallax = document.querySelector('.parallax');
const TextBlock = document.querySelector('.backgroud');
const ForTextBlock = 40;


const speed = 0.05;

let positionX = 0,
    positionY = 0,
    coordXprocent = 0,
    coordYprocent = 0;







function Animation() {
    const distX = coordXprocent - positionX,
        distY = coordYprocent - positionY;

    positionX = positionX + (distX * speed);
    positionY = positionY + (distY * speed);

    TextBlock.style.cssText = `transform: translate(${positionX / ForTextBlock}%,${positionY / ForTextBlock}%)`;
    requestAnimationFrame(Animation);
};
Animation();

parallax.addEventListener("mousemove", function(e) {
    const parallaxWidth = parallax.offsetWidth;
    const parallaxHeight = parallax.offsetHeight;

    const coordX = e.pageX - parallaxWidth / 2;
    const coordY = e.pageY - parallaxHeight / 2;

    coordXprocent = coordX / parallaxWidth * 100;
    coordYprocent = coordY / parallaxHeight * 100;

});