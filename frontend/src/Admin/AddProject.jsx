import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import apiServices from "../ApiServices/apiServices";
import {toast} from "react-toastify";
import { useEffect } from "react";
import Loader from "../Loader/Loader";

export default function AddProject(){
    const[attachments,setAttachments] = useState({})
    const[attachmentsName,setAttachmentsName] = useState("")
    const[message,setMessage] = useState("")
    const[clientId,setClientId]=useState("");
    const[loader,setLoader] = useState(false)
    const[display,setDisplay] = useState("block")
    const params = useParams();
    const id = params.id;

    const nav = useNavigate()

    useEffect(() => {
            let data ={
                _id:id
            }
            apiServices.getsingleOrder(data)
              .then((res) => {
                setClientId(res.data.data.clientId);
              })
              .catch((err) => {
                console.log(err.message);
              });
          }, [id]);

    const attachmentsHandle = (e) =>{
        setAttachments(e.target.files[0])
        setAttachmentsName(e.target.value)
    }

    const addData = (e) => {
        e.preventDefault();
      let token = sessionStorage.getItem("token")
        const currentDate = new Date().toISOString().slice(0, 10); 
        setLoader(true)
        setDisplay("none")
        const data = new FormData();
        data.append("attachment", attachments);
        data.append("message", message);
        data.append("orderId", id);
        data.append("status", "Completed");
        data.append("clientId", clientId);
        data.append("completionDate", currentDate); 
    
        
    
        apiServices.addProject(data,{headers:{authorization:token}})
            .then((res) => {
                if (res.data.success) {
                    toast.success(res.data.message);
    
                    // Call updateStatus here
                    updateStatus();
    
                    setTimeout(() => {
                        nav("/admin/completedorders");
                    }, 1500);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((err) => {
                toast.error(err.message);
            });
    
        setTimeout(() => {
            setLoader(false);
            setDisplay("block");
        }, 1500);
    };
    

     const updateStatus = () => {
            const data = {
                _id: id,
                status:"Completed"
            }
            apiServices.updateOrderStatus(data)
                .then((res) => {
                    setLoader(true)
                    setDisplay("none")
                    toast.success(res.data.message)
                })
                .catch((err) => {
                    setTimeout(() => {
                        setLoader(false)
                        setDisplay("block")
                    }, 1000);
                    console.log(err)
                })
        }       
    return(
        <>
        <>
  {/* Page Header Start */}
  <div className="container-fluid page-header py-5">
    <div className="container text-center py-5">
      <h1 className="display-2 text-white mb-4 animated slideInDown">
       Add Project
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          
          <li className="breadcrumb-item" aria-current="page">
            Add Project
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
        
        <h1 className="mb-3">ADD PROJECT</h1>
       
      </div>
      <div className="contact-detail position-relative p-5">
       
        <div className="row g-5">
          
          <div className="col-lg-8 offset-md-2 wow fadeIn" data-wow-delay=".5s">
          <form onSubmit={addData}>
              <div className="p-5 rounded contact-form">
             
              <div className="mb-4">
                <label>Choose Attachment:</label>
                <input
                  type="file"
                  className="form-control border-0 py-3"
                  placeholder="Choose Image"
                  onChange={attachmentsHandle}
                />
              </div>
              <div className="mb-4">
                <label>Enter Message:</label>
                <textarea
                  className="w-100 form-control border-0 py-3"
                  rows={6}
                  cols={10}
                  placeholder="Message"
                  value={message}
                  onChange={(e)=>{setMessage(e.target.value)}}
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