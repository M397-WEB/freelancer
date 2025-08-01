import { useState } from "react"
import { useNavigate } from "react-router-dom"
import apiServices from "../ApiServices/apiServices";
import {toast} from "react-toastify";
import Loader from "../Loader/Loader";

export default function AddTechnologies(){
   const[technologyName,setTechnologyName] = useState("")
    const[technologyImage,setTechnologyImage] = useState({})
    const[imageName,setImageName] = useState("")
    const[description,setDescription] = useState("")
    const[loader,setLoader] = useState(false)
    const[display,setDisplay] = useState("block")

    const nav = useNavigate()

    const imageHandle = (e) =>{
      console.log(e.target.files[0]);
        setTechnologyImage(e.target.files[0])
        setImageName(e.target.value)
    }

    const addData = (e) =>{
        e.preventDefault()
        setLoader(true)
        setDisplay("none")
        let token = sessionStorage.getItem("token")
        console.log("the token in add technology page is:",token);
        const data = new FormData()
        data.append("technologyName",technologyName)
        data.append("techImg",technologyImage)
        data.append("description",description)
        
        

        apiServices.addTechonology(data,{headers:{authorization:token}})
        .then((res) =>{
            if(res.data.success){
                toast.success(res.data.message)
            setTimeout(() =>{
                nav("/admin/managetechnologies")
            },3000)
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
        }, 3000);

    }        
    return(
        <>
        <>
  {/* Page Header Start */}
  <div className="container-fluid page-header py-5">
    <div className="container text-center py-5">
      <h1 className="display-2 text-white mb-4 animated slideInDown">
       Add Technologies
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          
          <li className="breadcrumb-item" aria-current="page">
            Add Technologies
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Fact Start */}
  {loader?<Loader />:null}
  <div className="container-fluid bg-secondary py-5" style={{display:display}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 wow fadeIn" data-wow-delay=".1s">
          <div className="d-flex counter">
            <h1 className="me-3 text-primary counter-value">99</h1>
            <h5 className="text-white mt-1">
              Success in getting happy customer
            </h5>
          </div>
        </div>
        <div className="col-lg-3 wow fadeIn" data-wow-delay=".3s">
          <div className="d-flex counter">
            <h1 className="me-3 text-primary counter-value">25</h1>
            <h5 className="text-white mt-1">
              Thousands of successful business
            </h5>
          </div>
        </div>
        <div className="col-lg-3 wow fadeIn" data-wow-delay=".5s">
          <div className="d-flex counter">
            <h1 className="me-3 text-primary counter-value">120</h1>
            <h5 className="text-white mt-1">Total clients who love HighTech</h5>
          </div>
        </div>
        <div className="col-lg-3 wow fadeIn" data-wow-delay=".7s">
          <div className="d-flex counter">
            <h1 className="me-3 text-primary counter-value">5</h1>
            <h5 className="text-white mt-1">
              Stars reviews given by satisfied clients
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Fact End */}
  {/* Contact Start */}
  <div className="container-fluid py-5 mt-5"style={{display:display}}>
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeIn"
        data-wow-delay=".3s"
        style={{ maxWidth: 600 }}
      >
        
        <h1 className="mb-3">ADD TECHNOLOGIES</h1>
       
      </div>
      <div className="contact-detail position-relative p-5">
       
        <div className="row g-5">
          
          <div className="col-lg-8 offset-md-2 wow fadeIn" data-wow-delay=".5s">
          <form onSubmit={addData}>
              <div className="p-5 rounded contact-form">
              <div className="mb-4">
                <label>Enter Technology Name:</label>
                <input
                  type="text"
                  className="form-control border-0 py-3"
                  placeholder="Your Name"
                  value={technologyName}
                  onChange={(e)=>{setTechnologyName(e.target.value)}}
                />
              </div>
              <div className="mb-4">
                <label>Choose Image:</label>
                <input
                  type="file"
                  className="form-control border-0 py-3"
                  placeholder="Choose Image"
                  onChange={imageHandle}
                />
              </div>
              <div className="mb-4">
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