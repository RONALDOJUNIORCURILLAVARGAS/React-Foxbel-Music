import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/scss/App.scss";
import { Header, SideBar, Player } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SideBar />
      <Header />
      <Player />
    </>
  );
}

export default App;
