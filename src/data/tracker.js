import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";

const map = new Map({
  basemap: "topo-vector",
});

const app = {
  map: map,
  center: [-117.187038, 34.057322],
  zoom: 18,
  ui: {
    component: ["attribution"],
  },
};

export const view = new MapView(app);

export async function initialize(container) {}
