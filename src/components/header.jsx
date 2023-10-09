import { useState } from "react";
import { useFetchTracks } from "../hooks/useFetchTracks";

export const Header = ({ onNewCategory }) => {
  const { songs, getSongs } = useFetchTracks();
  const [buscar, setBuscar] = useState("");
  const [tracks, setTracks] = useState([]);
  const onSubmit = (event) => {
    console.log("submit entraste", buscar);
    getSongs(buscar).then((e) => {
      console.log(" results => ", e);
      setTracks(e);
    });

    /*  setTracks(songs)
        console.log('Hola mundo:',songs) */
  };

  const onInputChange = ({ target }) => {
    setBuscar(target.value);
  };
  return (
    <div>
      <div className="">
        <input type="text" value={buscar} placeholder="Buscar" onChange={onInputChange}></input>
        <button
          onClick={onSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          buscar
        </button>
      </div>
      <div className="lista-tracks">
        <div className="p-1 flex flex-wrap items-center justify-start">
          {songs.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg"
              >
                <div className="relative flex items-center justify-center">
                  <img
                    className="relative w-auto"
                    src={item.album.cover_big}
                    alt=""
                  />
                </div>
                <div className="relative text-white px-6 pb-6 mt-6">
                  <span className="block opacity-75 -mb-1">Indoor</span>
                  <div className="flex justify-between">
                    <span className="block font-semibold text-xl">
                      Peace Lily
                    </span>
                    <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                      $36.00
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
