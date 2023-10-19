import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import { Modal, ModalBody, ModalFooter, ModalHeader, Popover, PopoverBody, PopoverHeader } from 'reactstrap'

function StudentList() {
    const [student, setstudent] = useState([])
    const [loading, setloading] = useState((true))
    const [deleteid, setdeleteid] = useState('')
    const [editmodal, seteditmodal]=useState(false)
    const [editdata, seteditdata]=useState({})
    const handlechange=(e)=>{
        seteditdata({...editdata,[e.target.name]:e.target.value})
    }
    const navigate = useNavigate()
    const fetchStudentList = () => {
        axios.get('https://6526013c67cfb1e59ce7cecd.mockapi.io/Students').then((res) => {
            setstudent(res.data);
            setloading(false)
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        fetchStudentList()
    }, [])
    const handledelete = (id) => {
        console.log(id);
        if (id === undefined) {
            return toast.error('id required')
        }
        axios.delete(`https://6526013c67cfb1e59ce7cecd.mockapi.io/Students/${id}`).then((res) => {
            if (res.status === 200) {
                toast.success('Deleted successfuly')
                fetchStudentList()
            }
        }).catch((error) => {
            console.log(error)
        })

    }
    const onedit=(data)=>{
        console.log(data)
        seteditmodal(!editmodal)
        seteditdata(data)
    }

    return (
        <div className='container mt-5'>
            <div className='d-flex justify-content-between'>
                <h3>Student List</h3>
                <button className='btn btn-sm btn-outline-primary' onClick={() => navigate('/Form1')}>Create Student +</button>
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
                            loading ? <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div> :
                                student.map((list, i) => {
                                    return <tr>
                                        <td>{i + 1}</td>
                                        <td>{list.firstName}</td>
                                        <td>{list.lastName}</td>
                                        <td>{list.email}</td>
                                        <td>{list.password}</td>
                                        <td>{list.Location}</td>
                                        <td>{list.Hobby.join(',')}</td>
                                        <td>
                                            <button className='btn btn-sm btn-outline-primary' onClick={() => navigate(`/students/${list.id}`)}>View</button>
                                            <button className='btn btn-sm btn-outline-warning'onClick={()=>onedit(list)}>Edit</button>
                                            <button className='btn btn-sm btn-outline-danger' id={`popover-${i}`} onClick={() => setdeleteid(list.id)}>Delete</button>

                                            <Popover target={`popover-${i}`} isOpen={list.id === deleteid} placement='top'>
                                                <PopoverHeader>Are u sure </PopoverHeader>
                                                <PopoverBody>
                                                    <h4>u want to delete permanently?</h4>
                                                    <div>
                                                        <button className='btn btn-sm btn-outline-primary mx-3' onClick={() => handledelete(list.id)}>Yes</button>
                                                        <button className='btn btn-sm btn-outline-danger mx-3' onClick={() => setdeleteid('')}>No</button>

                                                    </div>
                                                </PopoverBody>
                                            </Popover>
                                        </td>


                                    </tr>
                                })
                        }



                    </tbody>
                </table>
            </div>
            <Modal isOpen={editmodal}>
                <ModalHeader  toggle={()=>seteditmodal(!editmodal)}> Edit student </ModalHeader>
                <ModalBody>
                <div className='container  '>
               
                <div className='row'>
                    <div className='col-6'>
                        <label class="form-label">First Name</label>
                        <input type="text" class="form-control" name='firstName' value={editdata.firstName} onChange={(e)=>handlechange(e)} />
                    </div>
                    <div className='col-6'>
                        <label class="form-label">Last Name</label>
                        <input type="text" class="form-control" name='lastName' value={editdata.lastName}onChange={(e)=>handlechange(e)} />
                    </div>
                    <div className='col-6'>
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" name='email' value={editdata.email} onChange={(e)=>handlechange(e)}/>
                    </div>
                    <div className='col-6'>
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" name='password' value={editdata.password} onChange={(e)=>handlechange(e)} />
                    </div>
                    <div className='col-6'>
                        <label class="form-label">Location</label>
                        <Select />
                    </div>
                    <div className='col-6'>
                        <label class="form-label">Hobbies</label>
                        <Select isMulti />
                    </div>

                </div>
                
            </div>
                </ModalBody>
                <ModalFooter className='d-flex justify-content-end'>
                    <button className='btn btn-sm btn-outline-primary mx-3' >Update</button>
                    <button className='btn btn-sm btn-outline-danger mx-3'onClick={()=>seteditmodal(!editmodal)} >cancel</button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default StudentList