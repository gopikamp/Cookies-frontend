import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Searchcookie = () => {
    const [data, setData] = useState(
        {
            "name": ""
        }
    )

    const Deletecookie = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8000/delete", input).then(
            (Response) => {
                console.log(Response.data)
                if (Response.data.status == "success") {
                    alert("Successfully deleted")
                } else {
                    alert("Error")
                }
            }
        ).catch().finally()
    }

    const [result, setResult] = useState([])

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8000/search", data).then(
            (Response) => {
                setResult(Response.data)
            }
        ).catch(
            (error) => {
                console.log(Response.data)
            }
        )
    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className='form-label'>Name</label>
                                <input type="text" className='form-control' name="name" value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Search</button>
                            </div>
                            {result.map(
                                (value, index) => {
                                    return <div className="col col-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src={value.image} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <h5 class="card-title">{value.name}</h5>
                                                <p class="card-text">{value.quantity}</p>
                                                <p class="card-text">{value.category}</p>
                                                <p class="card-text">{value.description}</p>
                                                <p class="card-text">{value.price}</p>
                                                <a href="#" class="btn btn-danger" onClick={()=>(Deletecookie(value._id))}>Delete</a>
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

export default Searchcookie