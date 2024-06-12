import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Addcookie = () => {
    const [data, setData] = useState(
        {
            "name": "",
            "price": "",
            "quantity": "",
            "category": "",
            "description": "",
            "image": ""
        }
    )
    const inputHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8000/add",data).then(
            (Response)=>{
                console.log(Response.data)
                if (Response.data.status == "success") {
                    alert("Successfully added")
                } else {
                    alert("Error")
                }
            }
        ).catch().finally()
    } 
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>Name</label>
                                <input type="text" className='form-control' name="name" value={data.name} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>Price</label>
                                <input type="text" className='form-control' name="price" value={data.price} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>Quantity</label>
                                <input type="text" className='form-control' name="quantity" value={data.quantity} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>Category</label>
                                <select id="" className="form-control" name="category" value={data.category} onChange={inputHandler}>
                                    <option value="Chocolate Chip">Chocolate Chip</option>
                                    <option value="Oatmeal">Oatmeal</option>
                                    <option value="Macaroons">Macaroons</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>Description</label>
                                <textarea id="" className='form-control' name="description" value={data.description} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className='form-label'>Image</label>
                                <input type="text" className='form-control' name="image" value={data.image} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-primary" onClick={readValue}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addcookie