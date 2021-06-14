import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)

    //this function will run everytime there is a re-render 
    useEffect(() => {
        const abortCont = new AbortController(); //can associate it with a speciific fetch request and then stop it when needed

       setTimeout(() => {
        fetch(url, { signal: abortCont.signal })
        .then(res => {
            if(!res.ok) { //if the response is not okay
                throw Error('Could Not Connect') //throw this error message
            }
            return res.json()
        })
        .then(data => {
            setError(null) //if we fetch the data successfully , the error message shouldn't show
            setData(data) //all we're doing is updating the blog state with the data we received from the endpoint
            setIsLoading(false)
        })
        .catch(err => {
            if(err.name === 'AbortError') {
                console.log('fetch aborted')
            } else {
                setIsLoading(false); //if we run into an error, the loading message shouldn't be displayed
                setError(err.message) //show message in the browser
            }
        })
       }, 1000); //set a timeout of 1 second just to actually be able to see the loading message display

       return () => abortCont.abort(); //it aborts whatever fetch it's associated with
    }, [url]);

    return {data, isLoading, error}
}

export default useFetch;