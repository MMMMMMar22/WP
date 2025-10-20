import { virtualRealityTemplate } from "../templates/virtualRealityTemplate.js";
import virtualRealityData from "../../mockData/virtualRealityData.js";

const initVirtualReality = (virtualRealityNode) => {
  virtualRealityNode.insertAdjacentHTML("beforeend", virtualRealityTemplate(virtualRealityData));
};

export default initVirtualReality;


