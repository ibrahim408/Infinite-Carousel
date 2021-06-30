import {useState, useEffect} from 'react';
import {parseResponse} from '../helper/utility'
import * as Constants from '../helper/constants'

const useFetch = () => {
    const [result,setResult] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        async function fetchData(){
            try {
                setLoading(true);
                const endpoint = Constants.URL_SHOP;
                const res = await fetch(endpoint);
                const response = await res.json();
                const data = parseResponse(response);
                setResult(data);
            } catch(err){
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();

    }, [])


    return {result,error,loading};
};

export default useFetch;










