import React, { useEffect, useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Edit() {
 
    const [eid,setId]=useState("")
    const [empname,setName]=useState("")
    const [emptask,setTask]=useState("")

    const {id}=useParams()
    console.log(id);


    const viewTask=async(id)=>{
      const result = await axios.get(`${base_url}/view-an-task/${id}`)
      console.log(result.data.taskss);
      setId(result.data.taskss);
      setName(result.data.taskss);
      setTask(result.data.taskss);
      
    }

    useEffect(()=>{
      viewTask(id)
    },[])

    const location=useNavigate()

    const base_url = 'http://localhost:8000'
    const updateTask=async(e)=>{
      e.preventDefault()
      const body={
        id:eid,
        name:empname,
        task:emptask
      }
      const result=await axios.post(`${base_url}/update-an-task/${id}`,body)
      console.log(result);
      alert('Data Updated Successfully')
      location('/admin')
    }

  return (
    <div>
        <div className="container text-center m-5">
            <h2>Edit Task</h2>
            <div className='m-3'>
          <img src="https://webstockreview.net/images/how-to-edit-png-images-6.png" width={'100px'} alt="" />
        </div>
            <form className='p-5'>
            <MDBInput onChange={(e)=>setId(e.target.value)} value={eid} label='Id' id='fprmControlLg' type='text' size='lg'/>
            <br />
            <MDBInput onChange={(e)=>setName(e.target.value)} value={empname} label='Name' id='formControlLg' type='text' size='lg'/>
            <br />
            <MDBInput onChange={(e)=>setTask(e.target.value)} value={emptask} label='Task' id='formControlLg' type='text' size='lg'/>
            <br />
            <div>
                <button onClick={(e)=>updateTask(e)} className='btn btn-success m-3'>Update <i className='fa-solid fa-list-check'></i></button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Edit