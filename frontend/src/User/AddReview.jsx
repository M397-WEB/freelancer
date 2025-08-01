import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import apiServices from "../ApiServices/apiServices";
import {toast} from "react-toastify";
import { useEffect } from "react";
import Loader from "../Loader/Loader";

export default function AddReview(){
  const[rating,setRating] = useState(1);
    const[reviewMessage,setReviewMessage] = useState("")
    const[clientId,setClientId] = useState("")
    const[orderId,setOrderId]=useState("");
    const[loader,setLoader] = useState(false)
    const[display,setDisplay] = useState("block")
    const params = useParams();
    const id = params.id;

    const nav = useNavigate()

   
     const addData = (e) =>{
        e.preventDefault()
         setLoader(true)
         setDisplay("none")
        let token = sessionStorage.getItem("token")
       const data = {
        clientId:sessionStorage.getItem('customerId'),
        orderId:id,
        rating:rating,
        reviewMessage:reviewMessage
       }
       
        

        apiServices.addReviews(data,{headers:{authorization:token}})
        .then((res) =>{
            if(res.data.success){
                toast.success(res.data.message)
            setTimeout(() =>{
                nav("/")
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
       Add Review
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          
          <li className="breadcrumb-item" aria-current="page">
            Add Review
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
        
        <h1 className="mb-3">ADD REVIEW</h1>
       
      </div>
      <div className="contact-detail position-relative p-5">
       
        <div className="row g-5">
          
          <div className="col-lg-8 offset-md-2 wow fadeIn" data-wow-delay=".5s">
          <form onSubmit={addData}>
              <div className="p-5 rounded contact-form">
             
              <div className="mb-4">
  <label className="mb-2">Rate Us:</label>
                <div style={{ fontSize: "2rem", color: "#ffc107" }}>
                    {[...Array(5)].map((_, index) => {
                    const starValue = index + 1;
                    return (
                        <i
                        key={index}
                        className={
                            starValue <= rating ? "fas fa-star" : "far fa-star"
                        }
                        style={{ cursor: "pointer", marginRight: 8 }}
                        onClick={() => setRating(starValue)}
                        onMouseEnter={() => setRating(starValue)}
                        onMouseLeave={() => setRating(rating)}
                        ></i>
                    );
                    })}
                </div>
                </div>

              <div className="mb-4">
                <label>Leave a  Review:</label>
                <textarea
                  className="w-100 form-control border-0 py-3"
                  rows={6}
                  cols={10}
                  placeholder="Message"
                  value={reviewMessage}
                  onChange={(e)=>{setReviewMessage(e.target.value)}}
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