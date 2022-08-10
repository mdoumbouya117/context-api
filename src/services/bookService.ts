export interface IBook {
    url: string,
    name: string,
    isbn: string,
    authors: Array<string>,
    numberOfPages: number,
    publisher: string,
    country: string,
    mediaType: string,
    released: string,
    characters: Array<string>,
    povCharacters: Array<string>,

}

export const getBooks = async () : Promise<IBook[]> => {
    return await fetch(
        'https://www.anapioficeandfire.com/api/books'
        ).then(response => response.json()).then(res => res)
}