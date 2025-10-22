const { isObjectHasProps } = require("./utils/validators");

const isCallToActionDataValid = (data) => {
  isObjectHasProps(data, ["topCta", "header", "buttonText"]);
};

module.exports = isCallToActionDataValid;