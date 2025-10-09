import { callToActionTemplate } from "../templates/callToActionTemplate.js";
import callToActionData from "../../mockData/callToActionData.js";

const initCallToAction = (callToActionNode) => {
  callToActionNode.insertAdjacentHTML("beforeend", callToActionTemplate(callToActionData));
};

export default initCallToAction;


