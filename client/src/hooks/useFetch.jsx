import { useState, useEffect } from "react";
import { makeRequest } from '../makeRequest'

function useFetch(url) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await makeRequest.get(url);
                setData(res.data.data)
            } catch (err) {
                setError(true)
                console.log(err);
            }
            setLoading(false)
        }
        fetchData()
    }, [url])

    return { data, loading, error }
}

export default useFetch 