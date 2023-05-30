// import React from 'react'
// import Sidebar from '../../components/Sidebar'
// import Exercise from '../../components/Exercise'


// const Dashboard = () => {
//   return (
//     <>
//     <div style={{display:'flex', flexDirection:'column'}}> 
//       <div style={{width:'20%'}}>
//       <Sidebar />
//       </div >
//       <div style= {{width: '100%',marginLeft:"40px"}}>
//       <Exercise />
//       </div>

//     </div>
    
//     </>
    
//   )
// }

// export default Dashboard

import React, { useState, useEffect } from 'react';

import Sidebar from '../../components/Sidebar'
import Exercise from '../../components/Exercise'

const Dashboard = () => {


  
  // Sample exercises data (replace it with your actual data from the database)
  // const exercises = [
  //   {
  //     title: "Cycling",
  //     duration: "1 hour",
  //     icon: "fa fa-bicycle",
  //   },
  //   {
  //     title: "Walking",
  //     duration: "45 minutes",
  //     icon: "fa fa-walking",
  //   },
  //   {
  //     title: "Swimming",
  //     duration: "45 minutes",
  //     icon: "fa fa-swimmer",
  //   },
  //   {
  //     title: "Swimming",
  //     duration: "45 minutes",
  //     icon: "fa fa-swimmer",
  //   },
  //   {
  //     title: "Swimming",
  //     duration: "45 minutes",
  //     icon: "fa fa-swimmer",
  //   },
  //   {
  //     title: "Walking",
  //     duration: "45 minutes",
  //     icon: "fa fa-walking",
  //   },
  //   // Add more exercise objects as needed
  // ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '20%' }}>
        <Sidebar />
      </div>
      <div style={{ width: '80%', padding: '1rem' }}>
        <Exercise />
      </div>
    </div>
  );
}

export default Dashboard;
