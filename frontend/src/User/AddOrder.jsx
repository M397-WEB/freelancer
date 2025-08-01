import { useState } from "react"
import { useNavigate } from "react-router-dom"
import apiServices from "../ApiServices/apiServices";
import {toast} from "react-toastify";
import { useEffect } from "react";
import Loader from "../Loader/Loader";

export default function AddOrder(){
   const[title,setTitle] = useState("")
    const[deadline,setDeadline] = useState("")
    const[technologyId,setTechnologyId] = useState("")
    const[budget,setBudget] = useState("")
    const[clientId,setClientId] = useState("")
    const[description,setDescription] = useState("")
    const[loader,setLoader] = useState(false)
    const[display,setDisplay] = useState("block")

    const nav = useNavigate()
    const[technologyData,setTechnologyData] = useState([])
    
        useEffect(() =>{
                apiServices.getallTechnology()
                .then((res) =>{
                    setTechnologyData(res.data.data)
                })
                .catch((err) =>{
                    console.log(err.message)
                })
            },[])

   

    const addorder = (e) =>{
        e.preventDefault()
        let token = sessionStorage.getItem("token")
        console.log("the token in add order page is:",token);
        setLoader(true)
        setDisplay("none")
        const data = {
            title:title,
            deadline:deadline,
            budget:budget,
            technologyId:technologyId,
            clientId:sessionStorage.getItem("customerId"),
            description:description
        }
       
        

        apiServices.addOrder(data,{headers:{authorization:token}})
        .then((res) =>{
            if(res.data.success){
                toast.success(res.data.message)
            setTimeout(() =>{
                nav("/trackorders")
            },1500)
            }
            else{
                toast.error(res.data.message)
            }
        })
        .catch((err) =>{
            toast.error(err.message)
        })
        setTimeout(() => {
            setLoader(false)
            setDisplay("block")
        }, 1500);

    }        
    return(
        <>
        <>
  {/* Page Header Start */}
  <div className="container-fluid page-header py-5">
    <div className="container text-center py-5">
      <h1 className="display-2 text-white mb-4 animated slideInDown">
       Add Order
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          
          <li className="breadcrumb-item" aria-current="page">
            Add Order
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  
  {/* Contact Start */}
  {loader?<Loader />:null}
  <div className="container-fluid py-5 mt-5" style={{display:display}}>
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeIn"
        data-wow-delay=".3s"
        style={{ maxWidth: 600 }}
      >
        
        <h1 className="mb-3">ADD ORDER</h1>
       
      </div>
      <div className="contact-detail position-relative p-5">
       
        <div className="row g-5">
          
          <div className="col-lg-8 offset-md-2 wow fadeIn" data-wow-delay=".5s">
          <form onSubmit={addorder}>
              <div className="p-5 rounded contact-form">
              <div className="mb-4">
                <label>Enter Title :</label>
                <input
                  type="text"
                  className="form-control border-0 py-3"
                  placeholder="Name"
                  value={title}
                  onChange={(e)=>{setTitle(e.target.value)}}
                />
              </div>
              <div className="mb-4">
                <label>Choose Technology:</label>
                <select
                  className="form-control border-0 py-3"
                  value={technologyId} onChange={(e)=>{setTechnologyId(e.target.value)}}
                >
                    <option>Choose Technology</option>
                    {
                        technologyData.map((el)=>(
                            <>
                            <option value={el._id}>{el.technologyName}</option>
                            </>
                        ))
                    }
                </select>
              </div>
               <div className="mb-4">
                <label>Choose Deadline :</label>
                <input
                  type="date"
                  className="form-control border-0 py-3"
                  placeholder="deadline"
                  value={deadline}
                  onChange={(e)=>{setDeadline(e.target.value)}}
                />
              </div>
               <div className="mb-4">
                <label>Enter Budget:</label>
                <input
                  type="number"
                  className="form-control border-0 py-3"
                  placeholder="Budget"
                  value={budget}
                  onChange={(e)=>{setBudget(e.target.value)}}
                />
              </div>
              <div className="mb-4">
                <label>Enter Description:</label>
                <textarea
                  className="w-100 form-control border-0 py-3"
                  rows={6}
                  cols={10}
                  placeholder="Description"
                  value={description}
                  onChange={(e)=>{setDescription(e.target.value)}}
                />
              </div>
              
              
              <div className="text-start">
                <button
                  className="btn bg-primary text-white py-3 px-5"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
</>

        </>
    )
}