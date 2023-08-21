import { useEffect, useRef } from "react";
import "./demopage2.css";

function DemoPage2() {
  const mapRef = useRef();
  const appRef = useRef(null);

  useEffect(() => {
    let isLoad = true;

    const loadMap = async () => {
      console.log("load demo");
      const { initialize } = await import("../data/webmap");
      await initialize(mapRef.current);
      isLoad = false;
      return true;
    };

    if (appRef.current === null && isLoad) {
      appRef.current = loadMap();
    }

    return () => {
      isLoad = false;
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div ref={mapRef} className="w-full h-[90%]"></div>
      <div id="sliderContainer" className="esri-widget">
        <span id="sliderValue"></span>
        <div id="sliderInnerContainer">
          <div id="slider"></div>
        </div>
        <div
          id="playButton"
          className="esri-widget esri-widget--button toggle-button"
        >
          <div>
            <span
              className="toggle-button-icon esri-icon-play"
              aria-label="play icon"
            ></span>
            Play
          </div>
          <div>
            <span
              className="toggle-button-icon esri-icon-pause"
              aria-label="pause icon"
            ></span>
            Pause
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoPage2;
