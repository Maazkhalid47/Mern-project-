// // import React from 'react'
// // import Card from 'react-bootstrap/Card';
// // import ListGroup from 'react-bootstrap/ListGroup';


// // const Cardd = () => {
// //   return (
// //     <Card style={{ width: '18rem' }}>
// //     <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
// //     <Card.Body>
// //       <Card.Title>Card Title</Card.Title>
// //       <Card.Text>
// //         Some quick example text to build on the card title and make up the
// //         bulk of the card's content.
// //       </Card.Text>
// //     </Card.Body>
// //     <ListGroup className="list-group-flush">
// //       <ListGroup.Item>Cras justo odio</ListGroup.Item>
// //       <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
// //       <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
// //     </ListGroup>
// //     <Card.Body>
// //       <Card.Link href="#">Card Link</Card.Link>
// //       <Card.Link href="#">Another Link</Card.Link>
// //     </Card.Body>
// //   </Card>
// //   )
// // }

// // export default Cardd


// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import profile from "./henry-cavill-profile.jpg"

// function Cardd() {

//   const imgStyle = {
//     width: '200px', // Adjust the width as needed
//     height: '200px', // Maintain aspect ratio
//     margin: '0 auto',
//     backgroundSize: 'cover',
//     backgroundPosition: 'fixed',
//     backgroundRepeat: 'no-repeat',
//     //borderRadius: '25%', // Apply a circular border radius
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
//   };
//   const text = {
//     textAlign: 'center',
//   }
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={profile} style={imgStyle}/>
//       <Card.Body>
//         <Card.Title style={text}>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         {/* <Button variant="primary">Go somewhere</Button> */}
//       </Card.Body>
//     </Card>
//   );
// }

// export default Cardd;



import React from 'react';
import Card from 'react-bootstrap/Card';
import profile from "./henry-cavill-profile.jpg";

function Cardd() {
  const imgStyle = {
    width: '200px',
    height: '200px',
    margin: '0 auto',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',

    
  };

  const cardStyle = {
    width: '18rem',
    margin: '0 auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    transition: 'transform 0.3s',
    ':hover': {
      transform: 'scale(1.05)',
    },
  };

  const text = {
    textAlign: 'center',
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={profile} style={imgStyle} />
      <Card.Body>
        <Card.Title style={text}>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Cardd;

// import React from "react";

// const Card = () => {
//   const exercises = [
//     {
//       icon: "fa fa-bicycle fa-3x mb-3",
//       title: "Cycling",
//       duration: "Duration: 1 hour",
//     },
//     {
//       icon: "fa fa-walking fa-3x mb-3",
//       title: "Walking",
//       duration: "Duration: 45 minutes",
//     },
//     {
//       icon: "fa fa-hiking fa-3x mb-3",
//       title: "Hiking",
//       duration: "Duration: 30 minutes",
//     },
//     {
//       icon: "fa fa-swimmer fa-3x mb-3",
//       title: "Swimming",
//       duration: "Duration: 15 minutes",
//     },
//     {
//       icon: "fa fa-running fa-3x mb-3",
//       title: "Running",
//       duration: "Duration: 25 minutes",
//     },
//     {
//       icon: "fa fa-motorcycle fa-3x mb-3",
//       title: "Riding",
//       duration: "Duration: 35 minutes",
//     },
//   ];
//   return (
//     <>
//       {exercises.map((exercise, index) => (
//         <div key={index} className="col-lg-4 col-md-6">
//           <div className="card mb-3">
//             <div className="card-body text-center">
//               <i className={exercise.icon}></i>
//               <h5 className="card-title">{exercise.title}</h5>
//               <p className="card-text">{exercise.duration}</p>
//               <button className="btn btn-dark">Edit</button>
//               <button className="btn btn-danger">Delete</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Card;
