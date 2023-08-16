import {
  CalciteSegmentedControl,
  CalciteSegmentedControlItem,
} from "@esri/calcite-components-react";
import WebScene from "@arcgis/core/webscene";
import SceneView from "@arcgis/core/views/SceneView";
import Expand from "@arcgis/core/widgets/Expand";
import Weather from "@arcgis/core/widgets/Weather";
import Daylight from "@arcgis/core/widgets/Daylight";
import { useEffect, useRef } from "react";

function App() {
  const scene = new WebScene({
    portalItem: {
      id: "c56dab9e4d1a4b0c9d1ee7f589343516",
    },
  });
  const viewRef = useRef(null);

  useEffect(() => {
    if (viewRef.current) {
      new SceneView({
        map: scene,
        container: viewRef.current,
        qualityProfile: "medium",

        environment: {
          weather: {
            type: "cloudy",
            cloudCover: 0.3,
          },
        },
      }).when((view) => {
        const weatherExpand = new Expand({
          view: view,
          content: new Weather({
            view: view,
          }),
          expanded: true,
        });

        const daylightExpand = new Expand({
          view: view,
          content: new Daylight({
            view: view,
          }),
        });
        view.ui.add([weatherExpand, daylightExpand], "top-right");

        let floodLevel = scene.allLayers.find((layer) => {
          return layer.title === "Flood Level";
        });
        const selection = document.getElementById("selection");

        selection.addEventListener("calciteSegmentedControlChange", () => {
          switch (selection.selectedItem.value) {
            case "flooding":
              view.environment.weather = {
                type: "rainy",
                cloudCover: 0.7,
                preciptation: 0.3,
              };
              floodLevel.visible = true;
              break;

            case "noFlooding":
              view.environment.weather = {
                type: "cloudy",
                cloudCover: 0.3,
              };

              floodLevel.visible = false;
              break;
          }
        });
      });
    }
  }, []);

  return (
    <section className="w-full h-screen relative">
      <div ref={viewRef} className="w-full h-full"></div>
      <div className="absolute bottom-10 right-96">
        <CalciteSegmentedControl id="selection" className="w-full h-full">
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

export default App;
