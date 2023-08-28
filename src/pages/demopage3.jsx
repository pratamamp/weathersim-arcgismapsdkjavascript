import { useEffect, useRef } from "react";

function DemoPage3() {
  const mapRef = useRef();
  const appRef = useRef(null);

  useEffect(() => {
    let isLoad = true;
    const loadMap = async () => {
      console.log("-- LOAD TRACK ROUTING demo --");
      const { initialize } = await import("../data/tracker");
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
    <div className="w-full h-full">
      <div ref={mapRef} className="w-full h-full"></div>
    </div>
  );
}

export default DemoPage3;
