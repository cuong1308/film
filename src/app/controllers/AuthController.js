const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookie = require("cookie");

class AuthController {
  signin(req, res, next) {
    res.render("signin", { layout: false });
  }

  signup(req, res, next) {
    res.render("signup", { layout: false });
  }

  async register(req, res, next) {
    try {
      const { username, email, password, name } = req.body;
      const newUser = new User({ username, email, password, name });
      await newUser.save();

      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });

      res.status(201).json({
        status: "success",
        token,
        data: {
          user: newUser,
        },
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "fail",
        message: err.message,
      });
    }
  }

  async login(req, res, next) {
    try {
      const { username, password } = req.body;

      // Kiểm tra user có tồn tại trong database
      const user = await User.findOne({ username });
      if (!user || !user.password) {
        return res.status(401).json({
          status: "fail",
          message: "username or password is not exist",
        });
      }

      // Kiểm tra mật khẩu
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({
          status: "fail",
          token,
          message: "username or password is incorrect",
        });
      }

      // Tạo JSON Web Token
      const token = jwt.sign(
        {
          id: user._id,
          name: user.name,
          role: user.isAdmin,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_EXPIRES_IN,
        }
      );

      res.cookie("token", token, { maxAge: 900000, httpOnly: true });

      // Trả về thông tin người dùng và token
      res.status(200).json({
        status: "success",
        token,
        data: {
          user,
        },
      });
      //res.redirect('/')
    } catch (err) {
      console.log(err);
      res.status(400).json({
        status: "fail",
        message: err.message,
      });
    }
  }

  logout(req, res, next) {
    try {
      // const cookies = cookie.parse(req.headers.cookie || '')
      // const token = cookies.token;

      res.clearCookie("token");
      res.redirect("/");
    } catch (error) {}
  }
}

module.exports = new AuthController();
