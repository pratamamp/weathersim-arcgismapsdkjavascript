import { Route, Routes } from "react-router-dom";
import SceneViewer from "./components/sceneview";
import RouteViewer from "./components/routeviewer";
import DemoPage2 from "./pages/demopage2";
import Layout from "./components/layout";
import DemoPage1 from "./pages/demopage1";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<DemoPage1 />} />
        <Route path="/demo2" element={<DemoPage2 />} />
        <Route path="/demo3" element={<RouteViewer />} />
      </Route>
    </Routes>
  );
}

export default App;
