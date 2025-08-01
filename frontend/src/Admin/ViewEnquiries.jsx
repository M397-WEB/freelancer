import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import apiServices, { BASE_IMAGE_URL } from "../ApiServices/apiServices";
import {toast} from "react-toastify";

export default function ViewEnquiries(){
   const[enquiryData,setEnquiryData] = useState([])
    const[loader,setLoader] = useState(false)

    useEffect(() =>{
        apiServices.getallEnquiries()
        .then((res) =>{
            setEnquiryData(res.data.data)
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
     View Enquiries
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          
          <li className="breadcrumb-item" aria-current="page">
          View Enquiries
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
        
        <h1 className="mb-3">MANAGE ENQUIRIES</h1>
       
      </div>
      <div className="contact-detail position-relative p-5">
       
        <div className="row g-5">
          
          <div className="col-lg-12  wow fadeIn" data-wow-delay=".5s">
       <div className="table-responsive">
         <table class="table mt-5 mb-5 table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Subject</th>
                    <th scope="col">Message</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                         {
                         enquiryData?.map((el,index) =>(
                         <>
                         <tr>
                        <td>{index+1}</td>
                        <td>{el.name}</td>
                        <td>{el.email}</td>
                        <td>{el.subject}</td>
                        <td>{el.message}</td>
                        <td>
                            <a
                        href={`https://mail.google.com/mail/?view=cm&to=${el.email}&su=Replying to your enquiry&body=Hi ${el.name},`}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <button className="btn btn-primary">Reply</button>
                        </a>
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