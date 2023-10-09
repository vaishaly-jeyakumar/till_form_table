import React from 'react'

function Dashboard() {
    const data = [
        {
            name: 'Primary Card',
            color:'primary'
        },
        {
            name: 'Warning Card',
            color:'warning'
        },
        {
            name: 'Success Card',
            color:'success'
        },
        {
            name: 'Danger Card',
            color:'danger'
        },
    ]
    return (
        <div className='container my-5'>
            <div className='row'>
                {
                    data.map((card) => {
                        return <div className='col-3'>
                            <div class={`card bg-${card.color}`}>

                                <div class="card-body">
                                    <h5 class="card-title">{card.name}</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                </div>
                                <div class="card-header">
                                    Featured
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default Dashboard