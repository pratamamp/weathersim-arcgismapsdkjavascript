import SceneViewer from "./components/sceneview";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <div className="w-full h-full">
        <SceneViewer />
      </div>
    </div>
  );
}

export default App;
