export const bootstrap = () => {
    /* Type Assertion (as) */
    const body = document.querySelector('body');
    const video = document.querySelector('#promo');
    video.volume;
    const input = document.querySelector('.inputText');
    input.addEventListener('blur', (event) => {
        alert('teste');
    });
};
