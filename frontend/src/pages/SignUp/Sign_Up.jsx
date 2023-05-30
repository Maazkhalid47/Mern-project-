

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Sign_up.css";
// import { signupUserApi } from "../../helper/api-util";

// const Sign_Up = () => {

  

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [isFormValid, setIsFormValid] = useState(true);

//   const navigate = useNavigate();

//   const signupBtnPress = async () => {
//     if (
//       name.trim() === "" ||
//       email.trim() === "" ||
//       password.trim() === "" ||
//       confirmPassword.trim() === ""
//     ) {
//       setIsFormValid(false);
//       return;
//     }
//     setIsFormValid(true);
//     if (password !== confirmPassword) {
//       console.log("Passwords do not match");
//       return;
//     }
//     // const onSubmit = (data) => {
//     //   console.log(data);
  
//         const saveToDb = async () => {
//           if(password === confirmPassword)
//           {
//           try {
            
//               const body = {userName:name,userEmail:email,userPassword:password};
//               const res = await axios.post(
//               "http://127.0.0.1:3000/api/auth/register",
//               body
//             );
//             alert("User Added")
//             navigate("/login");
                     
//         } catch (e) {
//           alert(e) 
//       }
//     }
//     else{
//       console.log("Passwords do not match")
//     }
        
//     }
//    saveToDb()
  
//    // };

//     // const res = await signupUserApi({
//     //   userName: name,
//     //   userEmail: email,
//     //   userPassword: password,
//     // });
//     //console.log(name, password, email, confirmPassword)

//     // console.log("RES OBJ ==> ", res);

//     // if (res && res.status) {
//     //   console.log("Signup successful");
//     //   navigate("/login");
//     // } else {
//     //   console.log("Cannot signup");
//     // }
//   };

//   return (
//     <div className="background-image">
//       <div className="container d-flex justify-content-center align-items-center">
//         <div className="glass-effect p-4">
//           <h1 className="text-center mb-4">Sign Up</h1>
//           <form>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="text-center">
//               <button
//                 onClick={signupBtnPress}
//                 type="button"
//                 className="btn btn-primary"
//               >
//                 Sign Up
//               </button>
//             </div>
//             {!isFormValid && (
//               <div className="text-center pt-2">
//                 <p>Please fill in all fields</p>
//               </div>
//             )}
//             <div className="text-center pt-2">
//               <p>
//                 Already have an account?{" "}
//                 <span>
//                   <Link to="/login">Login</Link>
//                 </span>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sign_Up;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sign_up.css";
import { signupUserApi } from "../../helper/api-util";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sign_Up = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  const navigate = useNavigate();

  
  const notifyError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const signupBtnPress = async () => {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setIsFormValid(false);
      notifyError("Please fill in all fields");
      return;
    }

    setIsFormValid(true);

    // const delay = async()=>{
    //   await setTimeout(navigate("/login"),2000)
    // }
    await new Promise((resolve) => setTimeout(resolve, 2000));

toast.success('Successfully created!');
navigate("/login");
    // Additional validation for whitespaces
  if (
    name.includes(" ") ||
    email.includes(" ") ||
    password.includes(" ") ||
    confirmPassword.includes(" ")
  ) {
    notifyError("Fields should not contain whitespaces");
    return;
  }

  setIsFormValid(true);

    if (!/^[a-zA-Z]+$/.test(name)) {
      notifyError("Username do not accept numbers");
      return;
    }

    if (password !== confirmPassword) {
      notifyError("Passwords do not match");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      notifyError("Invalid email format");
      return;
    }

    const res = await signupUserApi({
      userName: name,
      userEmail: email,
      userPassword: password,
    });

    console.log("RES OBJ ==> ", res);
    if (res.status === "success"){
      console.log("Email Already Exists")
      notifyError("Email Already Exists");
    }
    else if (res && res.status) {
      console.log("Signup successful");
      toast.success("User added successfully!");
      navigate("/login");
   
    } else {
      notifyError("Cannot signup");
      console.log("Cannot signup");
    }
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === 32) {
      // Check for space key (key code 32)
      event.preventDefault(); // Cancel the event
    }
  };
  return (
    <>
    <ToastContainer />
    <div className="back-image"></div>
    
    <div className="background-image">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="glass-effect p-4">
          <h1 className="text-center mb-4">Sign Up</h1>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={handleKeyDown} 
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown} 
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown} 
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onKeyDown={handleKeyDown} 
                required
              />
            </div>
            <div className="text-center">
              <button
                onClick={signupBtnPress}
                type="button"
                className="btn btn-primary"
              >
                Sign Up
              </button>
            </div>
            {!isFormValid && (
              <div className="text-center pt-2">
                <p>Please fill in all fields</p>
              </div>
            )}
            <div className="text-center pt-2">
              <p>
                Already have an account?{" "}
                <span>
                  <Link to="/login">Login</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Sign_Up;
