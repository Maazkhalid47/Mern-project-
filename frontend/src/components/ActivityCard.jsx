import React from 'react'

const ActivityCard = () => {
    const imgStyle = {
        width: '200px', // Adjust the width as needed
        height: '200px', // Maintain aspect ratio
        margin: '0 auto',
        backgroundSize: 'cover',
        backgroundPosition: 'fixed',
        backgroundRepeat: 'no-repeat',
        //borderRadius: '25%', // Apply a circular border radius
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
      };
      const text = {
        textAlign: 'center',
      }

  return (
<>
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src={pic} alt="Card image cap" style={imgStyle}/>
  <div class="card-body">
    <h5 class="card-title" style={text}>Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

</>

  )
}

export default ActivityCard