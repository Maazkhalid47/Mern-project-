

import React, { useState, useEffect } from 'react';
import './exercise.css'
import { patchActivityRequest } from '../helper/api-util';
import { useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import axiosInstance from '../../axiosConfig';
import axios from 'axios';



const Exercise = () => {

  const navigate = useNavigate();

  const getCurrentDate = () =>{
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
  
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate
  }

  // const deletefunc = async ()=>{
  //   console.log("delete clicked");
    
  //   headers.Authorization= `JWT ${token}`;
  //   const token = headers.Authorization ;
  //   const response  = await fetch('http://localhost:3000/api/users/removeActivity',
  //   {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `JWT ${token}`
       
  //     },
      
  //   }

  //     )
  //     const data = await response.json();
  //     console.log(data);
  //     window.location.reload();
    
  // }
  //users/deleteActivity/${activityId}
  

  

  const handleDelete = async (acts) => {
    console.log(acts._id);
    // const body={targetId:exercise._id};
    try {
      const token = localStorage.getItem('Token');
      const { data } = await axios.delete(`http://localhost:3000/api/users/removeActivity/${acts?._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log(data.data);
      setActs(data.data)
      location.replace('/dashboard')
      
    } catch (e) {
      alert(e);
    }
  }
  
  
  
  

  const editfunc = async (activityId) => {
    console.log('edit clicked');
    setSelectedActivityId(activityId);
    
    setShowModal(true);

    // Fetch the activity details from the API based on the activityId
    const response = await fetch(`http://localhost:3000/api/users/activities/${activityId}`);
    const data = await response.json();
    
    setName(data.name)
    setDuration(data.duration)
    setDescription(data.description)
    setType(data.type)
    setDate(data.date)

  };

  const handleUpdate = async () => {
    console.log('checking Id', selectedActivityId)
    try {
      const updatedActivity = {
        _id: selectedActivityId,
        name,
        description,
        type,
        duration,
        date,
      };
  
      const response = await patchActivityRequest(updatedActivity);
      console.log(response)
      if (response.status === "success") {
        // Exercise updated successfully
        console.log("Exercise Updated Successfully")
        location.replace("/dashboard")

        //fetching again
        //const response = await fetch(`http://localhost:3000/api/users/activities/${activityId}`);
        //const data = await response.json();
  
        // Close the modal
        setShowModal(false);
      } else {
        console.log("Exercise cannot be Updated")
      }
    } catch (error) {
      // Handle error
      console.log("this is error", error);
    }
  };
  

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState();
  const [acts, setActs] = useState([]);
  const [selectedActivityId, setSelectedActivityId] = useState(null);



  useEffect(() => {
    let allData = async () => {
      try {
        const { data } = await axiosInstance.get('http://localhost:3000/api/users/activities')
        setActs(data);
        console.log(data)
      } catch (error) {
        console.log(error.message)
      }
    }
    allData()
  }, []);



  console.log(acts)
  // useEffect ( () => {
  //   const fetchActivities = async () => {
  //     const response = await fetch('http://localhost:3000/api/users/activities')
  //     const data = await response.json()

  //     if(response.ok){
  //       setActs(data)
  //     }
  //   }

  //   fetchActivities()
  // },[])

  return (

    <>
    {
      acts.length < 1?
      <h2 className='d-flex justify-content-center align-items-center"'>No activities yet</h2>
      :
      <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column" ,}} className="container">
      <div className="row ">
        {acts && acts.map((acts, index) => (
          <div className=" col-lg-4 col-md-6" key={index}>
            <div className="card mb-3 bg-light shadow">
              <div className="card-body text-center">
                {/* <i className={`fa ${acts.icon} fa-3x mb-3`}></i> */}
                <h5 className="card-title">{acts.name}</h5>
                <p className="card-text">Description: {acts.description}</p>
                <p className="card-text">Duration: {acts.duration}</p>
                <button className="btn btn-primary m-2" onClick={() => editfunc(acts._id)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(acts)}>Delete</button>

              </div>
            </div>
          </div>
          
        ))}
        {/* {console.log('Activities', acts)} */}
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Exercise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <input
                type="text"
                className="form-control"
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="duration">Duration</label>
              <input
                type="text"
                className="form-control"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={date}
                min={getCurrentDate}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    }
    
    </>
  );
};



export default Exercise;
