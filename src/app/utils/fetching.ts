import { mangas, searchInfo, searchResult } from "../types/types";

export const manga = async (search: string) => {
    const data = await fetch("http://localhost:4000/search", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": search
        })
    })

    const manga = (await data.json()) as searchResult;
    return manga;
}

export const SearchInfo = async (id: string) => {
    const data = await fetch("http://localhost:4000/info", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": id
        })
    })

    const manga = (await data.json()) as searchInfo;
    return manga;
}

export const MangaDetail = async (id: string) => {
    const data = await fetch("http://localhost:4000/manga", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "chapterId": id
        })
    })

    const manga = (await data.json()) as mangas[];
    return manga;
}