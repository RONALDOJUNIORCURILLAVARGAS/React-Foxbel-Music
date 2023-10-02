
import { useState } from 'react';
import { useFetchTracks } from '../hooks/useFetchTracks';


export const Header = ({ onNewCategory }) => {

    const { songs ,getSongs } = useFetchTracks();
    const [buscar,setBuscar]=useState('')
    const [tracks,setTracks]=useState([])
    const onSubmit = ( event ) => {
        console.log('submit entraste',buscar)
        getSongs(buscar).then(e=>{
           console.log(' results => ',e) 
           setTracks(e)
        });
        
       /*  setTracks(songs)
        console.log('Hola mundo:',songs) */
    }

    const onInputChange=({target})=>{
        setBuscar(target.value)
    }
    return (
        <>
        <div className="">
            <input type='text'
            value={buscar}
            onChange={ onInputChange }
            ></input>
            <button onClick={onSubmit}>buscar</button>
        </div>
        <div className='lista-tracks'>
           {/*  { tracks } */}
            {
                
                tracks.map((item,index)=>{
                    return (<div key={index} > 
                            <audio controls>
                                <source src={item.preview} type="audio/mpeg"/>
                            </audio>
                            </div>)
                    
                }) 
                
                     
            }
        </div>

            
        
        </>
        
    )
}
