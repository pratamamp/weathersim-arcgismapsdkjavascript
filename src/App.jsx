import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import SceneViewer from "./components/sceneview";
import AnimViewer from "./components/animviewer";
import RouteViewer from "./components/routeviewer";

function App() {
  return (
    <div className="relative h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<SceneViewer />} />
        <Route path="/demo2" element={<AnimViewer />} />
        <Route path="/demo3" element={<RouteViewer />} />
      </Routes>
    </div>
  );
}

export default App;
