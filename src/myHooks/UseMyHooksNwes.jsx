import { useEffect, useState } from 'react'
import { request } from '../pages/lib';
let miVayrkyanHetoRequest = null;


export default function UseMyHooksNwes(inputValue) {
    let [newsArry, poxelNewsArry] = useState([])
    const NEWS_API_HOST = 'https://free-news.p.rapidapi.com/v1/search';
    useEffect(() => {
        if (inputValue != "") {
            clearTimeout(miVayrkyanHetoRequest)
            miVayrkyanHetoRequest = setTimeout(() => {
                request("GET", `${NEWS_API_HOST}?q=${inputValue}&lang=en&page_size=10`).then((res) => {
                    poxelNewsArry(res.data);
                })
            }, 1000)
        }
    }, [inputValue])

    if (newsArry.length != 0) {
        return newsArry
    }
}
