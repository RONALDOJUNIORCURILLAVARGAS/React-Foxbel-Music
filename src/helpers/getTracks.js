import axios from 'axios'
export const getTracks=async (value)=>{
    const url =`https://deezerdevs-deezer.p.rapidapi.com/search?q=${value}`
   /*  url="https://api.deezer.com/search?q=eminem" */
   const config={
    headers: {
    'X-RapidAPI-Key': 'e2f9d5cdcdmshe3af8e1a48b083cp1b7481jsn160a9a0fa4c6',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
}
    const {data}=await axios.get(url,config);
    const datos=await data.data;
    return datos;
}