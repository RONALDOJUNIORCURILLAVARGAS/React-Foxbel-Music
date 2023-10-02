import { useState } from 'react';

import logo from'../assets/img/Sidebar/foxbel_barmenu.png';

export const SideBar=()=>{

  const [ SelectedMenu, setSelectedMenu ] = useState('Recientes');

  const cambios = (value) => {
    setSelectedMenu( value );
  }

  const libreria=['Recientes','Álbums','Canciones','Estaciones']
  const playlist=['Metal','Para bailar','Rock 90s','Baladas']
  return (
    <div id="SideBar" className="">
      <figure className='logo'>
        <img src={logo} alt="Logo"></img>
      </figure>

<div className='body'>
      <h1>Mi Librería</h1>
      <ul>
        {libreria.map((item,index)=>{
        return <li 
        key={index} 
        onClick={ () =>cambios(item) } 
        className={ (index+1==libreria.length?'mb-0':' ')+' '+(SelectedMenu== item? "active" : "")} 
        >
          {item}
        </li>
        })}
      </ul>
      <h1>Playlist</h1>
      <ul>

      {
        playlist.map((item,index)=>{
        return  <li 
                key={index} 
                onClick={ () =>cambios(item) } 
                className={ (index+1==playlist.length?'mb-0':' ')+' '+(SelectedMenu== item? "active" : "")} 
                >
                  {item}
                </li>
        })
        }
        {/* <li>Metal</li>
        <li>Para bailar</li>
        <li>Rock 90s </li>
        <li className='mb-0'>Baladas</li> */}
      </ul>
</div>

      
    </div>
    
  )
}
