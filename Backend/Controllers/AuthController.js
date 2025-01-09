const { config } = require("dotenv");
var bcrypt = require("bcrypt");
const Admin = require("../Models/admin.modal");

var jwt = require("jsonwebtoken");
const respHandler = require("../Handlers");

config();
const SECRET = process.env.SECRET;

const RegisterAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  const genSalt = 10;
  const hash = await bcrypt.hash(password, genSalt);

  try {
    let user = await Admin.findOne({ where: { email: email } });
    if (user != null) {
      return respHandler.error(res, {
        status: false,
        msg: "Email already exist",
      });
    }

    let newUser = {
      name: name,
      email: email,
      password: hash,
    };

    let createdUser = await Admin.create(newUser);
    if (createdUser) {
      return respHandler.success(res, {
        status: true,
        msg: "You have register successfully!!",
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

const LoginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await Admin.findOne({
      where: { email: email },
      attributes: { exclude: ["updatedAt", "verify_Otp"] },
    });
    if (user == null) {
      return respHandler.error(res, {
        status: false,
        msg: "Please Enter Valid Credential!!",
      });
    }
    if (user.verified == 0) {
      return respHandler.error(res, {
        status: false,
        msg: "You are not verified",
      });
    }
    const working = await bcrypt.compare(password, user.password);
    if (working) {
      var token = jwt.sign(
        {
          id: user.id,
        },
        SECRET
      );
      user.password = undefined;
      return respHandler.success(res, {
        status: true,
        msg: "User loggedin successfully!!",
        data: [{ token: token, user: user }],
      });
    } else {
      return respHandler.error(res, {
        status: false,
        msg: "Please Enter Valid Credential!!",
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

const GetAdminProfile = async (req, res) => {
  try {
    let { id } = req.user;

    if (!id) {
      return respHandler.error(res, {
        status: false,
        msg: "Something went wrong!!",
      });
    }

    let user = await Admin.findByPk(id, {
      attributes: {
        exclude: ["updatedAt", "password", "forgot_Otp"],
      },
    });

    if (!user) {
      return respHandler.error(res, {
        status: false,
        msg: "No data found!!",
      });
    }

    return respHandler.success(res, {
      status: true,
      msg: "User details returned successfully!!",
      data: [user],
    });
  } catch (err) {
    return respHandler.error(res, {
      status: false,
      msg: err.message,
      error: [err.message],
    });
  }
};

const UpdateAdminProfile = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let admin = await Admin.findOne({ where: { id: req.user.id } });

    if (!admin) {
      return respHandler.error(res, {
        status: false,
        msg: "Not found!!",
      });
    }

    const updateData = {};

    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (password) {
      const genSalt = 10;
      updateData.password = await bcrypt.hash(password, genSalt);
    }

    if (Object.keys(updateData).length > 0) {
      await admin.update(updateData);

      return respHandler.success(res, {
        status: true,
        msg: "Profile updated successfully!",
        data: admin,
      });
    } else {
      return respHandler.error(res, {
        status: false,
        msg: "No fields to update.",
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

module.exports = {
  RegisterAdmin,
  LoginAdmin,
  GetAdminProfile,
  UpdateAdminProfile,
};
