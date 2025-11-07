export const bootstrap = (): void => {
  /* Type Assertion (as) */
  const body = document.querySelector('body') as HTMLBodyElement;

  const video = document.querySelector('#promo') as HTMLVideoElement;
  video.volume;
  const input = document.querySelector('.inputText') as HTMLInputElement;
  input.addEventListener('blur', (event: FocusEvent) => {
    alert('teste');
  });
};
