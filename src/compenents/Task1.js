import React, { useState } from 'react'
import { List } from 'reactstrap'

function Task1() {
    const [taskList, settaskList]=useState([])
    const [finallist, setfinallist]=useState([])
    const handleadd=()=>{
        settaskList([...taskList,''])
    }
    const handleremove=(i)=>{
        console.log(i)
        taskList.splice(i,1)
        settaskList([...taskList])
    }
    const handlelistchange=(e,i)=>{
        taskList[i]=e.target.value
        settaskList([...taskList])
    }
    const handlesubmit=()=>{
        setfinallist(taskList)
        settaskList([])
    }
  return (
    <div className='container w-25 '>
        <button className='btn btn-sm btn-outline-primary my-3'onClick={()=>handleadd()}> Add +</button>
        {
            finallist.length>0? <div>
                <ul>
                    {
                        finallist.map((e)=>{
                            return <li>{e}</li>
                        })
                    }
                    
                </ul>
            </div>:  <div className=' my-5'>
            {
                taskList.map((List,i)=>{
                    return <div className='d-flex my-1'>
                        <input type="text" class="form-control mx-1" value={List} onChange={(e)=>handlelistchange(e,i)}/><button className='btn btn-sm btn-outline-danger roundred-pill'onClick={()=>handleremove(i)}>X</button>
                    </div>
                })
            }
        
        </div>
        }
       
        {
            taskList.length!==0 && <button className='btn btn-sm btn-outline-primary my-3' onClick={()=>handlesubmit()}>Submit</button>
        }
        
        </div>
  )
}

export default Task1