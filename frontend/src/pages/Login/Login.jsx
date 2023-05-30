
// import { React, useState } from "react";
// import {Link} from "react-router-dom"
// import './login.css';
// import { loginUserApi } from "../../helper/api-util";

// const Login = () => {
//   const [userEmail, setUserEmail] = useState('');
//   const [userPassword, setUserPassword] = useState('');

//   const loginBtnPress = async () => {

//     if (userEmail.trim() === '' || userPassword.trim() === '') {
//       console.log("Please enter email and password");
//       return;
//     }
  
  


//     const res = await loginUserApi({
//       "userEmail" : userEmail,
//       "userPassword" : userPassword
//   })
// //   const res = await loginUserApi({
// //     "userEmail" : "trunrajj@example.com",
// //     "userPassword" : "abc.123"
// // })

//   console.log("RES OBJ ==> ", res)

//   if(res.status){
//     console.log("User Logged in");
//   }else{
//     console.log("Cannot log in")
//   }
//   }

//   return (
//     <div
//     className="background-image"
//     style={{ backgroundImage:  `url(../assets/bgmain.jpg)` }}
//   >
//     <div className="container d-flex justify-content-center align-items-center">
//       <div className="glass-effect p-4">
//         <h1 className="text-center mb-4">Login</h1>
//         <form>
//           <div className="mb-3">
//             <input
//               type="email"
//               className="form-control"
//               placeholder="Email"
//               value={userEmail}
//               onChange={(e) => setUserEmail(e.target.value)}
//               required
              
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="password"
//               className="form-control"
//               placeholder="Password"
//               value={userPassword}
//               onChange={(e) => setUserPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div className="text-center">
//             <button onClick={loginBtnPress} type="button" className="btn btn-primary">
//               Login
//             </button>
//           </div>
//           <div className="text-center pt-2">
//             <p>Don't have an account?<span><Link to = "/signup">Sign Up</Link></span></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default Login


// import React, { useState } from "react";

// import { Link, useNavigate } from "react-router-dom";
// import "./login.css";
// import { loginUserApi } from "../../helper/api-util";

// const Login = () => {
//   const [userEmail, setUserEmail] = useState("");
//   const [userPassword, setUserPassword] = useState("");
//   const [isEmailValid, setIsEmailValid] = useState(true);
//   const [isFormValid, setIsFormValid] = useState(true);

//   const navigate = useNavigate();

//   const validateEmail = (email) => {
//     // Regular expression for email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const loginBtnPress = async () => {
//     if (userEmail.trim() === "" || userPassword.trim() === "") {
//       setIsFormValid(false);
//       return;
//     }

//     setIsFormValid(true);

//     if (!validateEmail(userEmail)) {
//       setIsEmailValid(false);
//       return;
//     }

//     setIsEmailValid(true);

//     const res = await loginUserApi({
//       userEmail: userEmail,
//       userPassword: userPassword,
//     });

//     console.log("RES OBJ ==> ", res);

//     if (res && res.status) {
//       console.log(res.data.token);
//       localStorage.setItem("Token",res.data.token)
//       location.replace("/dashboard")
//     } else {
//       console.log("Cannot log in");
//     }
//   };

//   return (
//     <div
//       className="background-image"
//       style={{ backgroundImage: `url(../assets/bgmain.jpg)` }}
//     >
//       <div className="container d-flex justify-content-center align-items-center">
//         <div className="glass-effect p-4">
//           <h1 className="text-center mb-4">Login</h1>
//           <form>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 className={`form-control ${
//                   !isEmailValid ? "is-invalid" : ""
//                 }`}
//                 placeholder="Email"
//                 value={userEmail}
//                 onChange={(e) => setUserEmail(e.target.value)}
//                 required
//               />
//               {!isEmailValid && (
//                 <div className="invalid-feedback">Invalid email format</div>
//               )}
//             </div>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Password"
//                 value={userPassword}
//                 onChange={(e) => setUserPassword(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="text-center">
//               <button
//                 onClick={loginBtnPress}
//                 type="button"
//                 className="btn btn-primary"
//               >
//                 Login
//               </button>
//             </div>
//             {!isFormValid && (
//               <div className="text-center pt-2">
//                 <p>Please enter email and password</p>
//               </div>
//             )}
//             <div className="text-center pt-2">
//               <p>
//                 Don't have an account?<span><Link to="/signup">Sign Up</Link></span>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


// Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { loginUserApi } from "../../helper/api-util";
import { toast, ToastContainer } from "react-toastify";
const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isFormValid, setIsFormValid] = useState(true);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const loginBtnPress = async () => {
    if (userEmail.trim() === "" || userPassword.trim() === "") {
      setIsFormValid(false);
      return;
    }

    setIsFormValid(true);

    if (!validateEmail(userEmail)) {
      setIsEmailValid(false);
      return;
    }

    setIsEmailValid(true);

    const res = await loginUserApi({
      userEmail: userEmail,
      userPassword: userPassword,
    });

    console.log("RES OBJ ==> ", res);
    toast.error("User not registered!");
    if (res && res.status) {
      console.log(res.data.token);
      localStorage.setItem("Token", res.data.token);
      location.replace("/dashboard");
    } else {
      console.log("Cannot log in");
    }
  };

  return (
    <div className="background-image">
      <ToastContainer />
      <div className="container d-flex justify-content-center align-items-center">
        <div className="glass-effect p-4">
          <h1 className="text-center mb-4">Login</h1>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className={`form-control ${
                  !isEmailValid ? "is-invalid" : ""
                }`}
                placeholder="Email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
              {!isEmailValid && (
                <div className="invalid-feedback">Invalid email format</div>
              )}
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required
              />
            </div>

            <div className="text-center">
              <button
                onClick={loginBtnPress}
                type="button"
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
            {!isFormValid && (
              <div className="text-center pt-2">
                <p>Please enter email and password</p>
              </div>
            )}
            <div className="text-center pt-2">
              <p>
                Don't have an account? <span><Link to="/signup">Sign Up</Link></span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
