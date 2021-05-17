const lefty = document.querySelector('.left');
const righty = document.querySelector('.right');
const container = document.querySelector('.container');

lefty.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
});

lefty.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left')
});

righty.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right')
});

righty.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
})