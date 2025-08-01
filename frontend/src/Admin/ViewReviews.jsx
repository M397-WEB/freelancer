import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import apiServices, { BASE_IMAGE_URL } from "../ApiServices/apiServices";
import {toast} from "react-toastify";

export default function ViewReviews(){
   const[reviewData,setReviewData] = useState([])
    const[loader,setLoader] = useState(false)

    useEffect(() =>{
        apiServices.getallReviews()
        .then((res) =>{
            setReviewData(res.data.data)
        })
        .catch((err) =>{
            console.log(err.message)
        })
    },[])

  
    return(
        <>
        <>
  {/* Page Header Start */}
  <div className="container-fluid page-header py-5">
    <div className="container text-center py-5">
      <h1 className="display-2 text-white mb-4 animated slideInDown">
     View Reviews
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          
          <li className="breadcrumb-item" aria-current="page">
          View Reviews
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
 
  {/* Contact Start */}
  <div className="container-fluid py-5 mt-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeIn"
        data-wow-delay=".3s"
        style={{ maxWidth: 600 }}
      >
        
        <h1 className="mb-3">VIEW REVIEWS</h1>
       
      </div>
      <div className="contact-detail position-relative p-5">
       
        <div className="row g-5">
          
          <div className="col-lg-12  wow fadeIn" data-wow-delay=".5s">
       <div className="table-responsive">
         <table class="table mt-5 mb-5 table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">Client Info</th>
                    <th scope="col">Order Info</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Review</th>
                  </tr>
                </thead>
                <tbody>
                         {
                         reviewData?.map((el,index) =>(
                         <>
                         <tr>
                        <td>{index+1}</td>
                        <td>
                            <ul>
                                <li><span>Name:</span>{el?.clientId?.name}</li>
                                <li><span>Email:</span>{el?.clientId?.email}</li>
                                <li><span>Contact:</span>{el?.clientId?.contact}</li>
                                 <li><span>Address:</span>{el?.clientId?.address}</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                 <li><span>Title:</span>{el?.orderId?.title}</li>
                                <li><span>Deadline:</span>{el?.orderId?.deadline}</li>
                                <li><span>Budget:</span>Rs. {el?.orderId?.budget}</li>
                                <li><span>Description:</span>{el?.orderId?.description}</li>

                            </ul>
                        </td>
                       <td>
                    {[...Array(5)].map((_, i) => (
                        <i
                        key={i}
                        className={i < el.rating ? "fas fa-star text-warning" : "far fa-star text-muted"}
                        style={{ marginRight: 2 }}
                        ></i>
                    ))}
                    </td>

                        <td>{el.reviewMessage}</td>
                       
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