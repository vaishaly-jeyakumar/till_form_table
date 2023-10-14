import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function StudentList() {
    const[student,setstudent]=useState([])
    const [loading,setloading]=useState((true))
    const navigate=useNavigate()
    const fetchStudentList=()=>{
        axios.get('https://6526013c67cfb1e59ce7cecd.mockapi.io/Students').then((res)=>{
            setstudent(res.data);
            setloading(false)
        }).catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        fetchStudentList()
    },[])
    const handledelete=(id)=>{
        console.log(id);
        if(id===undefined){
            return toast.error('id required')
        }
        axios.delete(`https://6526013c67cfb1e59ce7cecd.mockapi.io/Students/${id}`).then((res)=>{
        if(res.status===200){
            toast.success('Deleted successfuly')
            fetchStudentList()
        }
    }).catch((error)=>{
            console.log(error)
        })

    }

    return (
        <div className='container mt-5'>
            <div className='d-flex justify-content-between'>
            <h3>Student List</h3>
             <button className='btn btn-sm btn-outline-primary'onClick={()=>navigate('/Form1')}>Create Student +</button>
            </div>
            <div className='container mt-5'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email </th>
                            <th scope="col">Password</th>
                            <th scope="col">Location</th>
                            <th scope="col">Hobby</th>
                            <th scope="col">Action</th>



                        </tr>
                    </thead>
                    <tbody>
                        {
                            loading?<div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                          </div>:
                            student.map((list,i)=>{
                                return  <tr>
                                <td>{i + 1}</td>
                                <td>{list.firstName}</td>
                                <td>{list.lastName}</td>
                                <td>{list.email}</td>
                                <td>{list.password}</td>
                                <td>{list.Location}</td>
                                <td>{list.Hobby.join(',')}</td>
                                <td>
                                    <button className='btn btn-sm btn-outline-primary'onClick={()=>navigate(`/students/${list.id}`)}>View</button>
                                    <button className='btn btn-sm btn-outline-warning'>Edit</button>
                                    <button className='btn btn-sm btn-outline-danger'onClick={()=>handledelete(list.id)}>Delete</button>


                                </td>
    
    
                            </tr>
                            })
                        }

                       

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StudentList