import SceneView from "@arcgis/core/views/SceneView";
import Track from "@arcgis/core/widgets/Track";
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

const track = new Track({
  goToLocationEnabled: false, // disable this since we want to control what happens after our location is acquired
});

function getHeading(point, oldPoint) {
  // get angle between two points
  const angleInDegrees =
    (Math.atan2(point.y - oldPoint.y, point.x, oldPoint.x) * 180) / Math.PI;

  return -90 + angleInDegrees;
}

export const view = new SceneView(app);

export async function initialize(container) {}
