const { isArrayHasLength, isObjectHasLength, isObjectHasProps } = require("./utils/validators");

const isImageValid = (image) => isObjectHasProps(image, ["src", "alt"]);
const isLinkTextValid = (link) => isObjectHasProps(link, ["text", "href"]);

const isCardValid = (card) => {
  isObjectHasProps(card, ["image", "date", "title", "linkText"]);
  isImageValid(card.image);
  isLinkTextValid(card.linkText);
};

const isBlogDataValid = (data) => {
  isObjectHasProps(data, ["header", "leftCard", "rightCards"]);
  isCardValid(data.leftCard);
  if (!isArrayHasLength(data.rightCards))
    throw new Error("rightCards должен быть непустым массивом");
  data.rightCards.forEach(isCardValid);
};

module.exports = isBlogDataValid;