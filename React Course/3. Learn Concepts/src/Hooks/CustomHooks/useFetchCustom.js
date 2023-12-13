import { useState,useEffect } from "react";

export const useFetchCustom= (url)=>{
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
          .then((result) => result.json())
          .then((d) => setData(d));
    }, [url]);

    return [data];
}