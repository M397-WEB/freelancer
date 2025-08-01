import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import apiServices, { BASE_IMAGE_URL } from "../ApiServices/apiServices";
import {toast} from "react-toastify";

export default function Project(){
   const [projectData, setProjectData] = useState([]);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    apiServices.getallProjects()
      .then((res) => {
        const allProjects = res.data.data;
        const filteredProjects = allProjects.filter(project => project.orderId === id);
        setProjectData(filteredProjects);
        console.log("data is:",projectData)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);
    return(
        <>
        <>
  {/* Page Header Start */}
  <div className="container-fluid page-header py-5">
    <div className="container text-center py-5">
      <h1 className="display-2 text-white mb-4 animated slideInDown">
      Final Project Info
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          
          <li className="breadcrumb-item" aria-current="page">
           Final Project Info
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
        
        <h1 className="mb-3">FINAL PROJECT INFO</h1>
       
      </div>
      <div className="contact-detail position-relative p-5">
       
        <div className="row g-5">
          
          <div className="col-lg-12  wow fadeIn" data-wow-delay=".5s">
       <div className="table-responsive">
         <table class="table mt-5 mb-5 table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">Completion Date</th>
                    <th scope="col">Attachment</th>
                    <th scope="col">Message</th>
                  </tr>
                </thead>
                <tbody>
                         {
                         projectData?.map((el,index) =>(
                         <>
                         <tr>
                        <td>{index+1}</td>
                        <td>{el.completionDate}</td>
                        <td>
                        {el?.attachment ? (
                            <a
                            href={`${BASE_IMAGE_URL}${el.attachment}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <button className="btn btn-info">View Attachment</button>
                            </a>
                        ) : (
                            <span>No Attachment</span>
                        )}
                        </td>
                        <td>
                            {el.message}
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