import axios from "axios"
import { useEffect, useState } from "react"
import convertData from "../mapper/convertData"


export const useApi = (url) => {
    const [data, setData] = useState({})
    const [errorUrl, setErrorUrl] = useState(false)

    useEffect(() => {
        axios.get(url)
            .then(res => setData(convertData(res.data, url)))
            .catch(error => {
                setErrorUrl(true);
                console.log(error)
            })
    }, [url])
    return { data, errorUrl }
}