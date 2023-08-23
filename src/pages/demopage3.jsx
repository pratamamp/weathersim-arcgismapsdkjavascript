import { useEffect, useRef } from "react";

function DemoPage3() {
  const mapRef = useRef();
  const appRef = useRef(null);

  useEffect(() => {
    let isLoad = true;
    const loadMap = async () => {
      console.log("load page!");
      const { initialize } = await import("../data/");
    };
  }, []);
  return <div>DemoPage3</div>;
}

export default DemoPage3;
