const isVirtualRealityDataValid = require("../validators/isVirtualRealityDataValid");

const {
  getVirtualRealityDataModel,
  postVirtualRealityDataModel,
} = require("../model/files/virtualRealityDataModel");

const getVirtualRealityData = (req, res, next) => {
  try {
    const data = getVirtualRealityDataModel();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postVirtualRealityData = (req, res, next) => {
  try {
    const data = req.body;
    isVirtualRealityDataValid(data);
    postVirtualRealityDataModel(data);
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getVirtualRealityData, postVirtualRealityData };