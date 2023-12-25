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
          <div className="text1">Ett jättejättegrattis från alla oss till dig!</div>
          <div className="text2">
            28 år snart fyllda, det firar vi med en brunch på stan när det passar. Vi återkommer med detaljer. Njut nu av Schweiz 🇨🇭

        
          
            <br />
            Puss och kram 
           <br />
           / Dag, Elin och Isak 🎉
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
