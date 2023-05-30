const router = require("express").Router();
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authenticateToken = require("./authMiddleware");

// router.get('/', (req, res)=>{

//     res.send('Welcome to fucking Auth Route');
// })

// router.route('/').get((req, res)=>{
//     User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err))
// })

// router.route('/register').get(async (req, res)=>{

//     const newUser = await new User({
//         userName: "roomi",
//         email: "abc@example.com",
//         password: "abc.123"

//     })
//     await newUser.save()
//     .then(users => res.json("User Added!"))
//     .catch(err => res.status(400).json('Error: ' + err))
// })

//Create/Register a new User
router.route("/register").post(async (req, res) => {
  const { userName, userEmail, userPassword } = req.body;
  const checker = await User.find({ userEmail: userEmail });
  if (checker.length >0) {
    const responseObj = {
      "status": "success",
      "message": "User Already Exist",
      "data": checker
    }
    res.status(200).json(responseObj)
    // res.send(responseObj);
  } else {
    try {
      // Create new hashed password

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userPassword, salt);
      // Create User
      // const newUser = await new User({
      //     userName: req.body.userName,
      //     userEmail: req.body.userEmail,
      //     userPassword: hashedPassword
      //   });

      //Destructured
      const newUser = await new User({
        userName,
        userEmail,
        userPassword: hashedPassword,
      });

      //Save User
      const data = await newUser.save();
      const resObj = {
        status: true,
        data: { data },
        message: "User Successfully Registered",
      };
      res.status(200).json(resObj);
    } catch (err) {
      console.log(err);
      const resObj = {
        status: false,
        message: "User cannot be registered",
      };
      res.status(400).json(resObj);
    }
  }
});

router.route("/login").post(async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    const userdata = await User.findOne({ userEmail: userEmail });
    if (!userdata) {
      return res.status(404).json("User Not Found!");
    }

    const validPass = await bcrypt.compare(
      userPassword.trim(),
      userdata.userPassword
    );
    if (!validPass) {
      return res.status(401).json("Incorrect Password");
    }

    // Password is correct, you can proceed with authentication or generating a token
    const token = jwt.sign(
      {
        userEmail: userdata.userEmail,
        userName: userdata.userName,
        id: userdata._id,
      },
      "RESTFULAPIs"
    );
    const resObj = {
      status: true,
      data: { userdata, token },
      message: "User Successfully Logged-in",
    };
    console.log(token);
    return res.json(resObj);
    //res.status(200).json("Login Successful");
  } catch (err) {
    const resObj = {
      status: false,
      message: "User Cannot be logged in",
    };
    res.status(400).json(resObj);
  }
});
// router.get("/activities", async (req, res) => {
//   // console.log(req.id)

//   //const ex = await exercise.find()//{userId:req.id}
//   res.status(200).send("ex");
// });

module.exports = router;

//   router.route('/login').post(async (req, res) => {
//     try{
//         const userdata = await User.findOne({userEmail: req.body.userEmail})
//         !userdata && res.status(404).json("User Not Found!")
//         console.log(userdata)

//         const validPass = await bcrypt.compare(req.body.userPassword, userdata.userPassword)
//         !validPass && res.status(404).json("Incorrect Password")

//         res.json(userdata)
//     }
//     catch(err){
//         res.status(400).json('Error: ' + err);
//     }
//   });
