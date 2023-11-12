import { useEffect, useRef, useState } from "react";
import gz from "./assets/gz.mp3";
import "./App.css";
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

  const toggle = () => {
    if (!ref.current) return;
    if (ref.current.isRunning) {
      ref.current.stop();
    } else {
      ref.current.start();
    }
  };

  const ref = useRef(null);
  return (
    <>
      <div id="container">
        <div
          style={{
            display: "flex",
            gap: "4px",
            position: "absolute",
            zIndex: 1,
          }}
        >
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
        <div id="overlay">GJATTIS /A</div>
      </div>

      <div>Hej</div>
    </>
  );
}

export default App;
