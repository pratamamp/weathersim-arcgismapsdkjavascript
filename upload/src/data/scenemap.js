import WebScene from "@arcgis/core/WebScene";
import SceneView from "@arcgis/core/views/SceneView";
import Expand from "@arcgis/core/widgets/Expand";
import Weather from "@arcgis/core/widgets/Weather";
import Daylight from "@arcgis/core/widgets/Daylight";

// Load a webscene
const scene = new WebScene({
  portalItem: {
    id: "c56dab9e4d1a4b0c9d1ee7f589343516",
  },
});

const app = {
  map: scene,
  qualityProfile: "high",
  environment: {
    weather: {
      type: "cloudy",
      cloudCover: 0.3,
    },
  },
  ui: {
    padding: {
      top: 100,
    },
  },
};

export async function initialize(container) {
  view.container = container;
  view.when(() => {
    let floodLevel = scene.allLayers.find(function (layer) {
      return layer.title === "Flood Level";
    });
    const weatherExpand = new Expand({
      view: view,
      content: new Weather({
        view: view,
      }),
      group: "top-right",
      expanded: false,
    });
    const daylightExpand = new Expand({
      view: view,
      content: new Daylight({
        view: view,
      }),
      group: "top-right",
    });
    view.ui.add([weatherExpand, daylightExpand], "top-right");
    const selection = document.getElementById("selection");
    selection.addEventListener("calciteSegmentedControlChange", () => {
      switch (selection.selectedItem.value) {
        case "flooding":
          view.environment.weather = {
            type: "rainy",
            cloudCover: 0.7,
            precipitation: 0.3,
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

  return () => {
    view.container = null;
  };
}

export const view = new SceneView(app);
