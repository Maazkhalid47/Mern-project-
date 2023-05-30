import React from 'react'
import {Link} from 'react-router-dom'


const Navigation = () => {
  const nav_style = {
    listStyleType: "none",
    color: "white"

  }
  return (
//     <>
//           {/* <nav classNameNameName="container-fluid mx-auto d-flex align-items-center justify-content-between py-4 px-5 navbar navbar-expand-lg navbar-dark bg-dark shadow-5-strong">
//             <Link classNameNameName='ml-4' to="/">
//             <h3 classNameNameName='navbar-brand '>MyFit</h3>
//             </Link>
//             <ul classNameNameName="navbar-nav" style={nav_style}>
//             <li classNameNameName='nav-item'><Link classNameNameName='nav-link text-white' to="/" >Home</Link></li>
//             <li classNameNameName="nav-item ml-4"><Link classNameNameName='nav-link text-white' to="/login">Login</Link></li>
//             <li classNameNameName="nav-item ml-4"><Link classNameNameName='nav-link text-white' to="/signup">Sign Up</Link></li>
//             </ul>
//           </nav> */}

//            <nav classNameName="navbar navbar-expand-lg navbar-dark bg-dark">
            
//   <div classNameName="container-fluid ">
//   <Link style={nav_style} classNameNameName='ml-4 navbar-brand' to="/">
//             <h3 classNameNameName='navbar-brand '>MyFit</h3>
//   </Link>
//     <a classNameName="navbar-brand" href="#">Navbar</a>
//     <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span classNameName="navbar-toggler-icon"></span>
//     </button>
//     <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
//         <li classNameName="nav-item">
//           {/* <a classNameName="nav-link active" aria-current="page" href="/">Home</a> 
//           <Link style={nav_style} classNameNameName='nav-link active' to="/" >Home</Link>
//         </li>
//         <li classNameName="nav-item">
//           {/* <a classNameName="nav-link" href="#">Link</a> */}
//           <Link style={nav_style} classNameNameName='nav-link text-white' to="/login">Login</Link>
//         </li>
//         <li classNameName="nav-item dropdown">
//           <a classNameName="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul classNameName="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a classNameName="dropdown-item" href="#">Action</a></li>
//             <li><a classNameName="dropdown-item" href="#">Another action</a></li>
//             <li><hr classNameName="dropdown-divider"/></li>
//             <li><a classNameName="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//       </ul>
//       <div>
//       <form classNameName="d-flex">
//         <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button classNameName="btn btn-outline-success" type="submit">Search</button>
//       </form>

//       </div>
      
//     </div>
//   </div>
//  </nav> 
      
          

//     </>

<>

{/* <nav classNameNameName="container-fluid mx-auto d-flex align-items-center justify-content-between py-4 px-5 navbar navbar-expand-lg navbar-dark bg-dark shadow-5-strong">
             <Link classNameNameName='ml-4' to="/">
             <h3 classNameNameName='navbar-brand '>MyFit</h3>
             </Link>
             <ul classNameNameName="navbar-nav" style={nav_style}>
             <li classNameNameName='nav-item'><Link classNameNameName='nav-link text-white' to="/" >Home</Link></li>
             <li classNameNameName="nav-item ml-4"><Link classNameNameName='nav-link text-white' to="/login">Login</Link></li>
             <li classNameNameName="nav-item ml-4"><Link classNameNameName='nav-link text-white' to="/signup">Sign Up</Link></li>
             </ul>
     </nav> */}

{/* fixed-top removed from nav class*/}
<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4  mx-auto shadow-5-strong ">

            <div className="container-fluid">

            <Link style={nav_style} className='navbar-brand ml-4' to="/">
             <h3>MyFit</h3>
             </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 text-center">
                        <li className="nav-item">
                        <Link className='nav-link text-white' to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className='nav-link text-white' to="/" >About</Link>
                        </li>
                        <li className="nav-item">
                        <Link className='nav-link text-white' to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                        <Link className='nav-link text-white' to="/signup">Sign Up</Link>
                        </li> 
                    </ul>    
                </div>               
            </div>
</nav>

    </>
  )
}

export default Navigation