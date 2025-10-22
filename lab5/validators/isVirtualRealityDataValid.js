const { isObjectHasProps } = require("./utils/validators");

const isVirtualRealityDataValid = (data) => {
  isObjectHasProps(data, ["image", "topCta", "header", "content", "bottomCta"]);
  isObjectHasProps(data.image, ["src", "alt"]);
};

module.exports = isVirtualRealityDataValid;