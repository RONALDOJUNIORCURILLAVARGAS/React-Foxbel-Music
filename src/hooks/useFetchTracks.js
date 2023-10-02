
import { useEffect, useState } from 'react';
import { getTracks } from '../helpers/getTracks';

export const useFetchTracks = ( value) => {
    const [songs, setSongs] = useState([]);
    const getSongs = async( data = value) => {
        const newSongs = await getTracks(data);
        setSongs(newSongs);
        return newSongs
    }
    
    useEffect( () => {
        getSongs();
    }, []);

    return {
        songs,
        getSongs
    }
}
