import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Select from 'react-select'

function Form1() {
    const [newStudent, setnewStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        Location: "",
        Hobby: []
    })
    const locationoption = [
        { label: 'Chennai', value: 'Chennai' },
        { label: 'Andhra', value: 'Andhra' },
        { label: 'Kerala', value: 'Kerala' },
        { label: 'Pondy', value: 'Pondy' },

    ]
    const hobbyoption = [
        { label: 'Cricket', value: 'cricket' },
        { label: 'Reading', value: 'Reading' },
        { label: 'Carrom', value: 'Carrom' },
        { label: 'Gardening', value: 'Gardening' },
        { label: 'Drawing', value: 'Drawing' },
    ]
    const [list, setlist] = useState([])
    const handlechange = (e) => {
        // console.log(e.target.name,e.target.value)//
        setnewStudent({ ...newStudent, [e.target.name]: e.target.value })

    }
    const handlesubmit = () => {
        if (newStudent.firstName === "") {
            toast.error('first name required')
            return
        }
        if (newStudent.lastName === "") {
            toast.error('last name required')
            return
        }
        if (newStudent.email === "") {
            toast.error('email required')
            return
        }
        if (newStudent.password === "") {
            toast.error('password required')
            return
        }
        toast.success('Form Submitted')
        setnewStudent({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            Location: "",
            Hobby: [],

        })
        setlist([...list, newStudent])
    }
    console.log(newStudent)
    return (
        <>
            <div className='container w-50 mt-5'>
                <h3>Create Student</h3>
                <div className='row'>
                    <div className='col-6'>
                        <label class="form-label">First Name</label>
                        <input type="text" class="form-control" name='firstName' value={newStudent.firstName} onChange={(e) => handlechange(e)} />
                    </div>
                    <div className='col-6'>
                        <label class="form-label">Last Name</label>
                        <input type="text" class="form-control" name='lastName' value={newStudent.lastName} onChange={(e) => handlechange(e)} />
                    </div>
                    <div className='col-6'>
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" name='email' value={newStudent.email} onChange={(e) => handlechange(e)} />
                    </div>
                    <div className='col-6'>
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" name='password' value={newStudent.password} onChange={(e) => handlechange(e)} />
                    </div>
                    <div className='col-6'>
                        <label class="form-label">Location</label>
                        <Select options={locationoption} value={locationoption.filter((op) => op.value === newStudent.Location)} onChange={(e) => setnewStudent({ ...newStudent, Location: e.value })} />
                    </div>
                    <div className='col-6'>
                        <label class="form-label">Hobbies</label>
                        <Select isMulti options={hobbyoption} value={hobbyoption.filter((op) => { return newStudent.Hobby.some((pt) => op.value === pt) })} onChange={(e) => setnewStudent({ ...newStudent, Hobby: e.map((hobby) => hobby.value) })} />
                    </div>

                </div>
                <div className='text-end mt-5'>
                    <div className='btn btn-sm btn-outline-success' onClick={() => handlesubmit()}>
                        Submit
                    </div>
                </div>
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


                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.map((student, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.email}</td>
                                    <td>{student.password}</td>
                                    <td>{student.Location}</td>
                                    <td>{student.Hobby.join(',')}</td>


                                </tr>
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Form1