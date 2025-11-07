export const bootstrap = (): void => {
    /* Interfaces dos Elemntos HTML */
    // const input = document.querySelector('.inputText') as EventTarget
    // const input = document.querySelector('.inputText') as Node
    // const input = document.querySelector('.inputText') as Element
    // const input = document.querySelector('.inputText') as HTMLElement
    const input = document.querySelector('.inputText') as HTMLInputElement
    const video = document.querySelector('#promo') as HTMLVideoElement

    /* input.addEventListener('click', (event: Event) => {
        console.log('Input clicado')
    }) */
    
    console.log('Filho de: ', input.parentNode) 
    console.log('Element: ', input.id, input.className, input.tagName)
    console.log("Arrastável: ", input.draggable)
    console.log("Input: ", input.value)
    console.log("Video: ", video.volume)
}