import { useState, useEffect } from 'react';


const useLoadData = (url) => {
    const [loadData, setLoadData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(url);
            const respData = await resp.json();
            setLoadData(respData);
        };
        fetchData();
    }, [url]);
    
    return loadData;
};
export default useLoadData;
