import { useState, useEffect } from "react";
import Floor from "../types/Floor";
import buildingjson from "../data/building.json";

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>(buildingjson);

  //FILL HERE LOGIC TO SET THE BUILDING DATA

  const getFloorByIndex = (floorIndex: number): Floor | undefined => {
    const theFloor = buildingjson[floorIndex];
    if (!theFloor) return;
    return theFloor;
  };
  const getListOfActivities = (): string[] => {
    return buildingData.map((f) => f.activity);
  };
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities,
  };
};

export default useBuildingData;
