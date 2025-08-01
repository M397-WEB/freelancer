import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import apiServices, { BASE_IMAGE_URL } from "../ApiServices/apiServices";
import {toast} from "react-toastify";
import Loader from "../Loader/Loader";

export default function PendingOrders(){
   const[orderData,setOrderData] = useState([])
    const[loader,setLoader] = useState(false)
    const[display,setDisplay] = useState("block")
   const [refresh, setRefresh] = useState(false); 
    

    useEffect(() =>{
        apiServices.getallOrders()
        .then((res) =>{
              const pendingOrders = res.data.data.filter(order => order.status === "Pending");
              setOrderData(pendingOrders);
              console.log(pendingOrders);
        })
        .catch((err) =>{
            console.log(err.message)
        })
    },[refresh])
    
       const updateStatus = (id, status) => {
          let token = sessionStorage.getItem("token")
            const data = {
                _id: id,
                status: status
            }
            setLoader(true)
            setDisplay("none")
            apiServices.updateOrderStatus(data,{headers:{authorization:token}})
                .then((res) => {
                    toast.success('Status updated successfully')
                    setRefresh(prev => !prev);
                    if(status == "Accepted"){
                        setTimeout(() => {
                           nav("/acceptedbiddings") 
                        }, 1500);
                    }
                    if(status == "Rejected"){
                        setTimeout(() => {
                            setLoader(false)
                           
                           nav("/rejectedbiddings") 
                        }, 1500);
                    }
                })
                .catch((err) => {
                    setTimeout(() => {
                        setLoader(false)
                        setDisplay("block")
                    }, 1500);
                    console.log(err)
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
       Pending Orders
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          
          <li className="breadcrumb-item" aria-current="page">
            Pending Orders
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
        
        <h1 className="mb-3">PENDING ORDERS</h1>
       
      </div>
      <div className="contact-detail position-relative p-5">
       
        <div className="row g-5">
          
          <div className="col-lg-12  wow fadeIn" data-wow-delay=".5s">
       <div className="table-responsive">
         <table class="table mt-5 mb-5 table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">Order Info</th>
                    <th scope="col">Technology</th>
                    <th scope="col">Client Info</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                         {
                         orderData?.map((el,index) =>(
                         <>
                         <tr>
                        <td>{index+1}</td>
                        <td>
                            <ul>
                                <li>Title:<span>{el.title}</span></li>
                                <li>Budget:<span>Rs. {el.budget}</span></li>
                                <li>Deadline:<span>{el.deadline}</span></li>
                                <li>Description:<span>{el.description}</span></li>
                            </ul>
                        </td>
                        
                        <td>{el?.technologyId?.technologyName}</td>
                        <td>
                          <ul>
                            <li>Name:<span>{el?.clientId?.name}</span></li>
                            <li>Email:<span>{el?.clientId?.email}</span></li>
                            <li>Contact:<span>{el?.clientId?.contact}</span></li>
                            <li>Address:<span>{el?.clientId?.address}</span></li>
                          </ul>
                        </td>
                        <td>{el.status}</td>
                       <td className="d-flex">
                        <button className="btn btn-success" onClick={() => updateStatus(el._id, "Accepted")}>Accept</button>
                        <button className="ms-2 btn btn-danger" onClick={() => updateStatus(el._id, "Rejected")}>Reject</button>
                      </td>
                        </tr>
                        </>
                        ))
                        }
                                        
                        </tbody>
              </table>
       </div>
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