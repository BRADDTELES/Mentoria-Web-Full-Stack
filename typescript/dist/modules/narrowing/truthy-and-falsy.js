export const bootstrap = () => {
    // Truthy and Falsy
    //falsy
    // console.log(false ? 'truthy' : 'falsy')
    // console.log(0 ? 'truthy' : 'falsy')
    // console.log('' ? 'truthy' : 'falsy')
    // console.log(null ? 'truthy' : 'falsy')
    // console.log(undefined ? 'truthy' : 'falsy')
    // console.log(NaN ? 'truthy' : 'falsy')
    //truthy
    // console.log(true ? 'truthy' : 'falsy')
    // console.log(-1 ? 'truthy' : 'falsy')
    // console.log(' ' ? 'truthy' : 'falsy')
    // console.log([] ? 'truthy' : 'falsy')
    // console.log({} ? 'truthy' : 'falsy')
    const movies = ['Duna: Parte 2', 'Interestellar', 'Matrix'];
    const movie = movies.find(item => item.includes('Duna'));
    //   const movie = movies.find((item) => item.includes('Senhor dos Anéis'));
    // Type Guard
    if (movie) {
        console.log(movie);
    }
    else {
        console.warn('Filme não localizado!');
        // console.error("Filme não localizado!");
    }
};
