export interface ICharacter {
    url: string,
    name: string,
    gender: string, // can be an enum
    culture: string,
    born: string,
    died: string,
    titles: Array<string>,
    aliases: Array<string>,
    father: string,
    mother: string,
    spouse: string,
    allegiances: Array<string>
    books: Array<string>,
    povBooks: Array<string>,
    tvSeries: Array<string>,
    playedBy: Array<string>
}

export const getCharacter = async (url: string) : Promise<ICharacter> => {
    return await fetch(
        url
        ).then(response => response.json()).then(res => res);
}
