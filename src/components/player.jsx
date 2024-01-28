import { useState } from "react";
import { useFetchTracks } from "../hooks/useFetchTracks";
export const Player = ({ songPlayer }) => {
  const { songs, getSongs } = useFetchTracks();
  const [buscar, setBuscar] = useState("");
  console.log("submit entraste", songs);
  const onSubmit = (event) => {
    console.log("submit entraste", songs);
    /* getSongs(buscar).then((e) => {
      console.log(" results => ", e);
    }); */
  };

  return (
    <div id="reproductor" className="caja-reproductor">
    
      <audio
        src={songPlayer.preview}
        autoPlay
        controls
      ></audio>
      <button
        onClick={onSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Leer
      </button>
    </div>
  );
};
