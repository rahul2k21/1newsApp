const { config } = require("dotenv");
const Admin = require("../Models/admin.modal");

const respHandler = require("../Handlers");

config();

const UpdateSettings = async (req, res) => {
  const {
    homeScreenWelcome,
    homeScreenContent,
    offerScreenWelcome,
    offerScreenContent,
  } = req.body;

  try {
    let isAdmin = await Admin.findOne({
      where: { email: "anilb9850@gmail.com" },
    });

    if (!isAdmin) {
      return respHandler.error(res, {
        status: false,
        msg: "Not found!!",
      });
    }

    let updatedRowsCount = await Admin.update(
      {
        home_welcome: homeScreenWelcome,
        home_content: homeScreenContent,
        offer_welcome: offerScreenWelcome,
        offer_content: offerScreenContent,
      },
      {
        where: {
          id: isAdmin?.id, // Fixed from "is" to "id"
        },
      }
    );

    const updatedSettings = await Admin.findOne({
      where: { id: isAdmin?.id }, // Fixed from "is" to "id"
      attributes: [
        "home_welcome",
        "home_content",
        "offer_welcome",
        "offer_content",
      ],
    });

    if (updatedRowsCount[0] > 0) {
      // Check if any rows were updated
      return respHandler.success(res, {
        status: true,
        msg: "Settings updated successfully!",
        data: updatedSettings,
      });
    } else {
      return respHandler.error(res, {
        status: false,
        msg: "Nothing was updated. No changes detected.",
        error: [req.body],
      });
    }
  } catch (err) {
    return respHandler.error(res, {
      status: false,
      msg: "Something Went Wrong!!",
      error: [err.message],
    });
  }
};

const GetSettings = async (req, res) => {
  try {
    const updatedSettings = await Admin.findOne({
      where: { email: "anilb9850@gmail.com" },
      attributes: [
        "home_welcome",
        "home_content",
        "offer_welcome",
        "offer_content",
      ],
    });

    if (!updatedSettings) {
      return respHandler.error(res, {
        status: false,
        msg: "Not found!!",
      });
    }

    return respHandler.success(res, {
      status: true,
      msg: "Get settings successfully!",
      data: updatedSettings,
    });
  } catch (err) {
    return respHandler.error(res, {
      status: false,
      msg: "Something Went Wrong!!",
      error: [err.message],
    });
  }
};

module.exports = {
  UpdateSettings,
  GetSettings,
};
