import React, { useState } from 'react'

function Forms() {
    const[firstname,setFirstname]=useState("")
    const[lastname,setLastname]=useState("")
    const[email,setEmail]=useState("")
    const[password,setpassword]=useState("")
    const handlesubmit=()=>{
        if(firstname===""){
            alert('first name required')
            return
        }
        if(firstname.length<4){
            alert('minimun 4 word requires')
            return
        }
        if(lastname===""){
            alert('last name required')
            return
        }
        
        if(email===""){
            alert('email required')
            return
        }
        if(password===""){
            alert('passwordrequired')
            return
        }
        console.log({
            fistname:firstname,
            lastname:lastname,
            email:email,
            password:password
        }

        );
    }

    return (
        <div className='container w-50 mt-5'>
            <h2>Create Student</h2>
            <div className='row '>
                <div className='col-6'>
                    <label class="form-label">First Name</label>
                    <input type="text"
                        class="form-control"
                        name='first-name'
                        onChange={(event)=>setFirstname(event.target.value)} />
                </div>
                <div className='col-6'>
                    <label class="form-label">Last Name</label>
                    <input type="text"
                        class="form-control"
                        name='last-name'
                        onChange={(event)=>setLastname(event.target.value)} />
                </div>
                <div className='col-6'>
                    <label class="form-label">Email </label>
                    <input type="email"
                        class="form-control"
                        name='email' 
                        onChange={(event)=>setEmail(event.target.value)}/>
                </div>
                <div className='col-6'>
                    <label class="form-label">Password</label>
                    <input type="password"
                        class="form-control"
                        name='password' 
                        onChange={(event)=>setpassword(event.target.value)}/>
                </div>

            </div>
            <div>
                <div className='text-end mt-5'>
                    <button className='btn btn-sm btn-outline-success'onClick={()=>handlesubmit()}>Submit</button>
                </div>
            </div>


        </div>
    )
}

export default Forms