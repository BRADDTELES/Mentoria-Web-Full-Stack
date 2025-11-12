export const bootstrap = (): void => {
    /* Reandonly<Type> */
    interface Article {
        title: string,
        subtitle?: string
    }

    const article: Readonly<Article>[] = [
        { title: 'Omit' },
        { title: 'Partial' },
        { title: 'Required', subtitle: 'Propriedades obrigatórias' },
        { title: 'Readonly', subtitle: 'Propriedades somente leitura' }
    ]

    // article[1].title = 'Parcial'
    // article[1].subtitle = "Propriedades opcionais"

    console.log(article)
}