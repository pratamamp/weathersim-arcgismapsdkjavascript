import { Route, Routes } from "react-router-dom";
import DemoPage2 from "./pages/demopage2";
import Layout from "./components/layout";
import DemoPage1 from "./pages/demopage1";
import DemoPage3 from "./pages/demopage3";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<DemoPage1 />} />
        <Route path="/demo2" element={<DemoPage2 />} />
        <Route path="/demo3" element={<DemoPage3 />} />
      </Route>
    </Routes>
  );
}

export default App;
