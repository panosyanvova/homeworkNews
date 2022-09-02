import { useEffect, useState } from 'react'
import { request } from '../pages/lib';
let miVayrkyanHetoRequest = null;


export default function UseMyHooksNwes(inputValue, ejiQanak) {
    let [newsArry, poxelNewsArry] = useState([])
    const NEWS_API_HOST = 'https://free-news.p.rapidapi.com/v1/search';
    useEffect(() => {
        if (inputValue != "") {
            miVayrkyanHetoRequest = setTimeout(() => {
                request("GET", `${NEWS_API_HOST}?q=${inputValue}&lang=en&page_size=${ejiQanak}`).then((res) => {
                    poxelNewsArry(res.data.articles);
                })
            }, 1000)
        }

        return () => clearTimeout(miVayrkyanHetoRequest)
    }, [inputValue])

    if (newsArry && newsArry.length) {
        return newsArry
    }
}
