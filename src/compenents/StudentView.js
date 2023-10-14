import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function StudentView() {
    const params = useParams()
    const [Studentdetails, setStudentdetails] = useState({})
    console.log(params.id)

    const fetchStudentdetails = () => {
        axios.get(`https://6526013c67cfb1e59ce7cecd.mockapi.io/Students/${params.id}`).then((res) => {
            if (res.status == 200) {
                setStudentdetails(res.data)
            }
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        fetchStudentdetails()
    }, [])

    return (
        <div className='container'>
            <div>
                <div class="card" style={{ width: "18rem;" }}>
                    {/* <img src="..." class="card-img-top" alt="..." /> */}
                    <div class="card-body">
                        <h5 class="card-title">Name:{Studentdetails.firstName} {Studentdetails.lastName}</h5>
                        <h6>Email:{Studentdetails.email}</h6>
                        <h6>Location:{Studentdetails.Location}</h6> 
                        <h6>Hobby:{Studentdetails?.Hobby?.join(',')}</h6>
                        <p class="card-text">About:Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to={'/students'}>
                        <a  class="btn btn-primary">Back </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentView