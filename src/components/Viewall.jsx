import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const Viewall = () => {
    const [data, setData] = useState([])
    const fetchData = () => {
        axios.post("http://localhost:8000/view",data).then(
            (Response) => {
                setData(Response.data)
            }
        ).catch().finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.image} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.name}</h5>
                                                <p class="card-text">{value.quantity}</p>
                                                <p class="card-text">{value.category}</p>
                                                <p class="card-text">{value.description}</p>
                                                <a href="#" class="btn btn-primary">{value.price}</a>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall