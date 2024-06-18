import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function View() {
    const [viewTask,setViewTask] = useState({})
    const {id}=useParams()
    console.log(id);
    const base_url = 'http://localhost:8000'
     const viewData=async(id)=>{
     const result=await axios.get(`${base_url}/view-an-task/${id}`)
     console.log(result.data.taskss);
     setViewTask(result.data.taskss)
     }
     console.log(viewTask);
     useEffect(()=>{
        viewData(id)
     },[])


  return (
    <div>
        <h2 className='text-center m-5'>Task Details</h2>
        <div className='container p-5 m-5 d-flex justify-content-between'>
            <MDBCard>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <a>
                        <div className='mask' style={{backgroundColor:'rgba(251, 251, 251, 0.15)'}}></div>
                    </a>
                </MDBRipple>
                <MDBCardTitle className='m-5' style={{fontSize:'35px'}}>Task Details</MDBCardTitle>
                <MDBCardBody>
                    <MDBCardText>
                        <MDBListGroup style={{minWidthL: '22rem' }} light>
                        <MDBListGroupItem noBorders className='bg-light text-primary px-3'>Id:{viewTask.id}</MDBListGroupItem>
                        <MDBListGroupItem noBorders className='bg-light text-primary px-3'>Name:{viewTask.name}</MDBListGroupItem>
                        <MDBListGroupItem noBorders className='bg-light text-primary px-3'>Task:{viewTask.task}</MDBListGroupItem>

                        </MDBListGroup>
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
            <div>
                <img className='image card text-center' style={{width:'300px'}} src="https://media.istockphoto.com/id/1336546162/vector/planning-and-time-management-concept.jpg?s=612x612&w=0&k=20&c=RHewqwh3o9axwvUw8ubHTYO4wifcXfzJSTJVO1Al9YI=" alt="" />
            </div>
        </div>
        <div className='text-center mb-4'>
            <MDBBtn href='/'>Go Home</MDBBtn>
        </div>
    </div>
  )
}

export default View