import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import Directions from "@arcgis/core/widgets/Directions";
import RouteLayer from "@arcgis/core/layers/RouteLayer";

const apiKey =
  "AAPKad206cb798b443c992b18192841201ffbEpxT5NYZ7EPYuG7c71_yT37E5J2sFDL6O5YTtYQauabJQsHCOpVIkRUMjn5jS74";
const routeLayer = new RouteLayer();
const map = new Map({
  basemap: "topo-vector",
  layers: [routeLayer],
});

const app = {
  map: map,
  center: [106.7485788, -6.20003],
  zoom: 14,
  ui: {
    padding: {
      top: 100,
    },
  },
};

export const view = new MapView(app);

export async function initialize(container) {
  view.container = container;
  view.when().then((_) => {
    let directionsWidget = new Directions({
      layer: routeLayer,
      apiKey,
      view,
    });

    view.ui.add(directionsWidget, { position: "top-right" });
  });
}
