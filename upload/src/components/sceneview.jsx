import {
  CalciteSegmentedControl,
  CalciteSegmentedControlItem,
} from "@esri/calcite-components-react";

function SceneViewer() {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="w-full h-full"></div>
      <div className="absolute bottom-10 bg-yellow-300 ">
        <CalciteSegmentedControl id="selection" className="flex">
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

export default SceneViewer;
