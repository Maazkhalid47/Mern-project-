// import React from 'react'
// import bgmain from "./bgmain.jpg"
// import Cardd from '../../components/Cardd'
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// const Home = () => {
//   const showcase = {
    
//     backgroundImage: `url(${bgmain})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'fixed',
//     backgroundRepeat: 'no-repeat',
//     height: '100 vh',
  
//   }

//   const modal = {
    
//     width: '40%',
//     backgroundColor: 'grey',
//     border: 'solid red',
//     borderRadius: '10px'
//   }
//   return (
//     <>

//       <div className='position-relative'  style={showcase}>
//         <div className='overlay position-absolute mt-5 ms-5' style={modal}>

//             <h3>Welcome to MyFit</h3>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem quia harum similique! Possimus modi ex omnis saepe aperiam assumenda voluptate laudantium nemo blanditiis delectus, harum quos voluptatibus cumque dolorem?
//             Officia atque consequuntur totam vitae, omnis a deserunt dolore sed nobis, officiis cupiditate, velit libero impedit dolor at ipsam cum id beatae quidem molestiae fugit consectetur commodi blanditiis. Ipsa, aliquam.
//             Beatae impedit, maiores culpa inventore mollitia numquam quos tempore quia recusandae hic fuga distinctio officiis sit magnam iste id sunt cumque, voluptas, illum eveniet minima molestias voluptatem! Laboriosam, atque natus?</p>

//         </div>

//       </div>
      
//       <div className='text-center pt-3'>
//         <h3 >Our Team</h3>
//       </div>

//       <Row xs={1} md={2} lg={3}className="g-4 pt-2">
//       {Array.from({ length: 3 }).map((_, idx) => (
//         <Col className='d-flex justify-content-around'>
//         <Cardd />
//         </Col>
//       ))}
//     </Row>

//     </>
    
//   )
// }

// export default Home


import React from 'react';
import bgmain from "./bgmain.jpg";
import Cardd from '../../components/Cardd';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

const Home = () => {
  const showcase = {
    backgroundImage: `url(${bgmain})`,
    backgroundSize: 'cover',
    backgroundPosition: 'fixed',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    overflowX: 'hidden',
  };

  const modal = {
    width: '40%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
  };

  return (
    <>
      <div className='position-relative' style={showcase}>
        <div className='overlay position-absolute mt-5 ms-5' style={modal}>
          <h3>Welcome to MyFit</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem
            quia harum similique! Possimus modi ex omnis saepe aperiam
            assumenda voluptate laudantium nemo blanditiis delectus, harum quos
            voluptatibus cumque dolorem? Officia atque consequuntur totam
            vitae, omnis a deserunt dolore sed nobis, officiis cupiditate, velit
            libero impedit dolor at ipsam cum id beatae quidem molestiae fugit
            consectetur commodi blanditiis. Ipsa, aliquam. Beatae impedit,
            maiores culpa inventore mollitia numquam quos tempore quia
            recusandae hic fuga distinctio officiis sit magnam iste id sunt
            cumque, voluptas, illum eveniet minima molestias voluptatem!
            Laboriosam, atque natus?
          </p>
        </div>
      </div>
      <h3 style={{textAlign:"center"}}>Our Team</h3>

      <Container className='text-center pt-3 d-flex justify-content-around'>
        
        <Row xs={1} md={2} lg={3} className='g-4 pt-2'>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col key={idx} >
              <Cardd />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
