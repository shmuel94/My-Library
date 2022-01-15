import { useState, useEffect } from 'react';
export default function useFetch(URL){
    const [ data , setData ] = useState([])
    useEffect(()=>getData(),[])
    const getData = ()=>{
        fetch(URL)
        .then(res=> res.json())
        .then(data=> {setData(data.books)})
        .catch(err=>console.log(err))
    }
    return [data,setData];
}
