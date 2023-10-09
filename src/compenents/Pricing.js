import React from 'react'

function Pricing() {
  const data = [
    {
      Heading: 'Free',
      Cost: '0',
      User: 'Single User'
    },
    {
      Heading: 'Plus',
      Cost: '9',
      User: '5 User'
    },
    {
      Heading: 'Pro',
      Cost: '49',
      User: 'Unlimited User'
    },
  ]
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {
            data.map((list) => {
              return <div class="col-lg-4">
                <div class="card mb-5 mb-lg-0">
                  <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">{list.Heading}</h5>
                    <h6 class="card-price text-center">${list.Cost}<span class="period">/month</span></h6>
                    <hr />
                    <ul class="fa-ul">
                      <li><span class="fa-li"><i class="fa fa-check"></i></span>{list.Heading === 'Free' ? list.User : <b>{list.User}</b>}</li>
                      <li><span class="fa-li"><i class="fa fa-check"></i></span>5GB Storage</li>
                      <li><span class="fa-li"><i class="fa fa-check"></i></span>Unlimited Public Projects</li>
                      <li><span class="fa-li"><i class="fa fa-check"></i></span>Community Access</li>
                      <li class={list.Heading === 'Free' ? "text-muted" : ""}><span class="fa-li"><i class={list.Heading === 'Free' ? "fa fa-times" : "fa fa-check"}></i></span>Unlimited
                        Private Projects</li>
                      <li class={list.Heading==='Free' ? "text-muted":""}><span class="fa-li"><i class={list.Heading==='Free' ?"fa fa-times" :"fa fa-check"}></i></span>Dedicated
                        Phone Support</li>
                      <li class={list.Heading==='Free'?"text-muted" :""}><span class="fa-li"><i class={list.Heading==='Free' ?"fa fa-times":"fa fa-check"}></i></span>{list.Heading==="Pro"?<b>Unlimited</b>:""}Free Subdomain
                      </li>
                      <li class={list.Heading==='Pro'?"text":"text-muted"}><span class="fa-li"><i class={list.Heading==='Pro'?"fa fa-check":"fa fa-times"}></i></span>Monthly Status
                        Reports</li>
                    </ul>
                    <div class="d-grid">
                      <a href="#" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                  </div>
                </div>
              </div>
            })
          }



        </div>
      </div>
    </section>)
}

export default Pricing