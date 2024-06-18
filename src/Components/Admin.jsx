import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Admin() {
 
    //api fetching - to get all the tasks details
    const base_url = 'http://localhost:8000'
    const location=useNavigate()

    //state creation
    const [allTasks,setAllTasks] = useState([])//to hold all tasks details

    const fetchData=async()=>{
        const result = await axios.get(`${base_url}/get-all-tasks`)//details from server
        console.log(result.data.tasks);
        setAllTasks(result.data.tasks)
    }
    console.log(allTasks); //array of tasks

    const deleteTask=async(id)=>{
      const result1 = await axios.delete(`${base_url}/delete-an-task/${id}`)
      console.log(result1);
      alert(result1.data.message)
    }

    const viewTask=async(id)=>{
      const result2 = await axios.get(`${base_url}/view-an-task/${id}`)
      console.log(result2);
      location(`view/${id}`)
    }

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div>
        <h1 className='text-center text-primary m-4'>Simple Task Management</h1>
        <div className="container">
            <p style={{textAlign:'justify'}}>
            Simple Task Management facilitates communication and collaboration smoothly among members of the same team;
             it manages everyday tasks and the whole project workflow; it organises current and future tasks which need to be completed.
            </p>
        </div>

        <Link to={'/add'}>
        <a className='btn btn-primary' style={{float:'right', padding:'10px'}}>Add</a>
        </Link>

        <div className="container">
        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Task</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
            allTasks.map((item)=>(
         <tr>
          <td>
            {item.id}
          </td>
          <td>
            {item.name}
          </td>
          <td>
            {item.task}
            </td> 
            <td>
            <div className='d-flex justify-content-evenly'>
                <Link to={'view:/id'}>
                <i onClick={()=>viewTask(item.id)} className='fa-solid fa-eye text-success'></i>
                </Link>

                <Link to={'edit/:id'}>
                <i className='fa-solid fa-pen text-primary'></i>
                </Link>
                <i onClick={()=>deleteTask(item.id)} className='fa-solid fa-trash text-danger'></i>
                </div>  
                </td>       
        </tr>
            ))
        }
      </MDBTableBody>
    </MDBTable>
        </div>

    </div>
  )
}

export default Admin