import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [shoppingdata,changedata] =useState(
        {
            "products": [  ]
        }
    
    )
  
     
const fetchData=()=>{
    axios.get("https://dummyjson.com/products").then(
        (response)=>{
            changedata(response.data)
        }).catch()
}

useEffect(()=>{fetchData()},[])

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="column col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">


                          {
                            shoppingdata.products.map(
                                (item,index)=>{
                                        return(
                                              <div className="column col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 mt-4 card-group">
                                <div class="card" >
                                    <img src={item.images} class="card-img-top" alt="..."></img>
                                    <div class="card-body">
                                        <h5 class="card-title">{item.title}</h5>
                                        <p class="card-text">{item.description}</p>
                                        <a href="#" class="btn btn-primary">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                                        )
                                }
                            )
                          }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View