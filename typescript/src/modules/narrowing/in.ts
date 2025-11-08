export const bootstrap = (): void => {
  /* Verificando Proprieddades de Objetos e Índices de Arrays (in) */
  type Item = {
    id: string; // uuid
    [key: string] : string | null; // index signature
  };

  // fetch para um end-point de uma API
  const response: Item[] = [
    { id: '5gr45dddd5s55s552s', movie: 'Cinderella Man' },
    { id: '5gr45dddd5s55ss', song: 'Ideologia' },
    { id: '5gr45dddd5ssdda55ss', song: 'Azul da Cor do Mar' },
  ];

  function showItems(items: Item[]): void {
    const body = document.querySelector('body');

    if (body instanceof HTMLBodyElement) {
      items.map(item => {
        const itemElement = document.createElement('div');

        if ('song' in item) {
          itemElement.textContent = item.song;
          itemElement.style.background = 'seagreen';
        } else if ('movie' in item) {
          itemElement.textContent = item.movie;
          itemElement.style.background = 'cadetblue';
        }

        body.appendChild(itemElement);
      });
    }
  }

  showItems(response);
};
