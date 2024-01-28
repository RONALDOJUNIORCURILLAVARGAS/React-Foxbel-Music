import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/scss/App.scss";
import { Header, SideBar, Player } from "./components";

function App() {
  const [songPlayer, setSongPlayer] = useState({});
  const onNewSelectSong=(song)=>{
    setSongPlayer(song)
  }
  return (
    <>
      <SideBar />
      <Header onNewSong={(value) => onNewSelectSong(value)}/>
      <Player songPlayer={songPlayer}/>
    </>
  );
}

export default App;
