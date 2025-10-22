const { isArrayHasLength, isObjectHasProps } = require("./utils/validators");

const isLinkValid = (link) => isObjectHasProps(link, ["text", "href"]);

const isFooterDataValid = (data) => {
  isObjectHasProps(data, [
    "title",
    "ctaText",
    "brand",
    "address1",
    "rights",
    "links1",
    "links2",
    "contact",
  ]);

  if (!isArrayHasLength(data.links1))
    throw new Error("links1 должен быть непустым массивом");
  if (!isArrayHasLength(data.links2))
    throw new Error("links2 должен быть непустым массивом");
  data.links1.forEach(isLinkValid);
  data.links2.forEach(isLinkValid);

  isObjectHasProps(data.contact, ["address", "phone", "email"]);
};

module.exports = isFooterDataValid;