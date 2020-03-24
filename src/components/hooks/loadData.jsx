import { useState, useEffect } from 'react';

const useLoadData = (url, params) => {
    const [loadData, setLoadData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(`${url}/${params}`);
            const respData = await resp.json();
            setLoadData(respData);
        };
        fetchData();
    }, [url, params]);

    return loadData;
};
export default useLoadData;
