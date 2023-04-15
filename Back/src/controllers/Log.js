require('dotenv').config();
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

const login = (req, res) => {
    const {email, password} = req.query;
    try {
        if (!email || !password) res.status(500).json({ message: "There isn't a password or email" });
        if (email === EMAIL && password === PASSWORD) res.status(200).json({ access: true });
        else res.status(200).json({ access: false });
    } catch (error) {
        res.status(404).json(error);
    }
};

module.exports = {
    login
};



// require("dotenv").config(); // process.env

// const DB_EMAIL = process.env.EMAIL;
// const DB_PASSWORD = process.env.PASSWORD;

// const STATUS_OK = 200;
// const STATUS_ERROR = 404;

// function login(req, res) {
//   const { password, email } = req.query;
//   // /login?password=1234&email=www
//   try {
//     if (!password || !email) {
//       return res
//         .status(500)
//         .json({ message: "There isn't a password or email" });
//     }
//     if (password === DB_PASSWORD && email === DB_EMAIL) {
//       res.status(STATUS_OK).json({ access: true });
//     } else {
//       // console.log("in error");
//       res.status(STATUS_OK).json({ access: false });
//     }
//   } catch (error) {
//     res.status(STATUS_ERROR).json(error);
//   }
// }

// module.exports = {
//   login,
// };
