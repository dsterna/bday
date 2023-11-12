import { useEffect, useRef, useState } from "react";
import gz from "./assets/gz.mp3";
import "./App.scss";
import Fireworks from "@fireworks-js/react";
import useSound from "use-sound";

function App() {
  const [isRunning, setisRunning] = useState(false);
  const [play, { stop }] = useSound(gz, { volume: 0.5 });
  useEffect(() => {
    if (!ref.current) return;
    if (!isRunning) {
      ref.current.stop();
    } else {
      play();
      setTimeout(() => {
        ref.current.start();
      }, 1000);
    }
  }, [isRunning]);

  const ref = useRef(null);
  return (
    <>
      <div id="container">
        <div className="play-button">
          {!isRunning && (
            <button onClick={() => setisRunning(true)}>
              Är det din födelsedag?
            </button>
          )}
        </div>
        <Fireworks
          ref={ref}
          options={{ opacity: 0.5 }}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
            background: "#000",
          }}
        />

        <div
          style={{ display: !isRunning ? "none" : "block" }}
          className="text"
        >
          <div className="text1">Grattis på födelsedagen Elin</div>
          <div className="text2">
            En genomsnittlig vuxen människa har 32 tänder. Man 
            skulle alltså kunna säga att du har lika många tänder som du är gammal. Du
            omges av 32 av dessa små juveler som inte bara bär vittne om din
            mognad, utan också reflekterar det strålande leende som belyser mitt och Isaks liv. Vi älskar dig.
            <br />
           Puss och kram
           <br />
           / Dag & Isak
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
