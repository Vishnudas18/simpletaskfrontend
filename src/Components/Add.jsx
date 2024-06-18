import React, { useState } from 'react'
import { MDBInput } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
    
    const location = useNavigate()
 
    const [id,setId] = useState("")
    const [name,setName] = useState("")
    const [task,setTask] = useState("")

    const base_url = 'http://localhost:8000/add-an-task'
    

    const addTask=async(e)=>{
        e.preventDefault();
        console.log(id,name,task);
        //api call to add task details to the mongodb
        const body={id,name,task}
        const result=await axios.post(base_url,body).then((result)=>{
            console.log(result);
            alert(result.data.message)
            location('/')
        }).catch((error)=>{
            alert("Please enter a unique id")
        })
        


    }

  return (
    <div>
        <div className="container text-center m-5">
            <h2>Add Task</h2>
            <form className='p-5'>
            <MDBInput onChange={(e)=>setId(e.target.value)} label='Id' id='formControlLg' type='text' size='lg'/>
            <br />
            <MDBInput onChange={(e)=>setName(e.target.value)} label='Name' id='formControlLg' type='text' size='lg'/>
            <br />
            <MDBInput onChange={(e)=>setTask(e.target.value)} label='Task' id='formControlLg' type='text' size='lg'/>
            <br />
            <div>
                <button onClick={(e)=>addTask(e)} className='btn btn-success m-3'>Add <i class="fa-solid fa-list-check"></i></button>
            </div>
            </form>
        </div>
        
    </div>
  )
}

export default Add