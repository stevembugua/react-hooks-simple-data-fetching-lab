// create your App component here
import React from "react";
import { useEffect,useState } from "react";

const DogFetch = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then((response)=>{
            setData(response.message)
            
        })
    },[])
    if (!data) {
        return <p>Loading...</p>
    }
    return (
        <>
            <img src={data} alt="" />
        </>
    );
}
 
export default DogFetch;
