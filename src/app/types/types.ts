import { type } from "os";

export type searchResult = {
    currentPage: number,
    hasNextPage: boolean,
    results: [
        {
            id: string,
            title: string,
            description: string
            altTitles: [string],
            image: string,
            lastChapter:string
            lastVolume:string
            releaseDate:string
            status:string
            contentRating: string
        }
    ]
};


export type searchInfo = {
    id: string,
    title: string,
    altTitles: [string],
    genres: [string],
    headerForImage: string,
    image: string,
    chapters: [
        {
            id: string,
            title: string,
            releaseDate: string
        }
    ]
}

export type mangas = {
    img: string,
    page: string
}