import { useEffect, useRef } from "react";
import {
  CalciteSegmentedControl,
  CalciteSegmentedControlItem,
} from "@esri/calcite-components-react";

function DemoPage1() {
  const mapRef = useRef();
  const appRef = useRef(null);

  useEffect(() => {
    let isLoad = true;
    const loadMap = async () => {
      console.log("-- LOAD WEATHER SIMULATION demo --");
      const { initialize } = await import("../data/scenemap");
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
    <section className="w-full h-full flex items-center justify-center">
      <div ref={mapRef} className="w-full h-full"></div>
      <div className="absolute bottom-10 bg-yellow-300 ">
        <CalciteSegmentedControl id="selection" className="flex">
          <CalciteSegmentedControlItem value="noFlooding" checked>
            No Flooding
          </CalciteSegmentedControlItem>
          <CalciteSegmentedControlItem value="flooding">
            Flooding
          </CalciteSegmentedControlItem>
        </CalciteSegmentedControl>
      </div>
    </section>
  );
}

export default DemoPage1;
