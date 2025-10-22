const isCallToActionDataValid = require("../validators/isCallToActionDataValid");

const {
  getCallToActionDataModel,
  postCallToActionDataModel,
} = require("../model/files/callToActionDataModel");

const getCallToActionData = (req, res, next) => {
  try {
    const data = getCallToActionDataModel();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postCallToActionData = (req, res, next) => {
  try {
    const data = req.body;
    isCallToActionDataValid(data);
    postCallToActionDataModel(data);
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getCallToActionData, postCallToActionData };