import { useState } from "react";
import { useFetchTracks } from "../hooks/useFetchTracks";

export const Header = ({ onNewSong }) => {
  const { songs, getSongs } = useFetchTracks('samboomaster');
  const [buscar, setBuscar] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if(buscar.trim().length<=1) return;
    console.log("submit entraste", buscar);
    getSongs(buscar);
  };
  //BUSCANDO LO ESCRITO EN EL INPUT
  const onInputChange = ({ target }) => {
    setBuscar(target.value);
  };

  //ENVIO DE LA CANCION SELECCIONAD
  const ChangePlayer = (elemento) => {
    onNewSong(elemento);
  };

  return (
    <div>
      <div className="">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="inpt-search-song"
            value={buscar}
            placeholder="¿Qué te apetece buscar?"
            onChange={onInputChange}
          ></input>
        </form>

        
        
      </div>
      <div className="lista-tracks">
      <div class="container mx-auto">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">

   
    {songs.map((item) => {
            return (
              <div
                key={item.id}
                className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg shadow-lg cursor-pointer"
                onClick={() => ChangePlayer(item)}
              >
                <div className="relative flex items-center justify-center">
                  <img
                    className="relative w-auto"
                    src={item.album.cover_big}
                    alt=""
                  />
                </div>
                <div className="relative text-white px-3 pb-3 pt-3">
                  <span className="block opacity-75 -mb-1">
                    {item.artist.name}
                  </span>
                  <div className="flex justify-between">
                    <span className="block font-semibold text-xl">
                      {item.title_short}
                    </span>
                    
                  </div>
                </div>
              </div>
            );
          })}
  </div>
</div>

       
      </div>
    </div>
  );
};
