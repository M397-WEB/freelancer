import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import apiServices, { BASE_IMAGE_URL } from "../ApiServices/apiServices";
import {toast} from "react-toastify";
import Loader from "../Loader/Loader";

export default function ManageTechnologies(){
   const[technologyData,setTechnologyData] = useState([])
    const[isDelete,setIsDelete]=useState(false);
    const[loader,setLoader] = useState(false)
    const[display,setDisplay] = useState("block")
    useEffect(() =>{
        apiServices.getallTechnology()
        .then((res) =>{
            setTechnologyData(res.data.data)
        })
        .catch((err) =>{
            console.log(err.message)
        })
    },[isDelete])

    const deleteData = (id) =>{
      setIsDelete(true);
      setLoader(true)
      setDisplay("none")
      let data = {
          _id : id
      }
      let token = sessionStorage.getItem("token")
      apiServices.deleteTechnology(data,{headers:{authorization:token}})
      .then((res) =>{
          toast.success(res.data.message)
          setIsDelete(false)
          setTimeout(() => {
            setLoader(false)
            setDisplay("block")
          }, 1000);
      })
      .catch((err) =>{
          console.log(err)
          setTimeout(() => {
            setLoader(false)
            setDisplay("block")
          }, 1000);
      })
  }
    return(
        <>
        <>
  {/* Page Header Start */}
  <div className="container-fluid page-header py-5">
    <div className="container text-center py-5">
      <h1 className="display-2 text-white mb-4 animated slideInDown">
       Manage Technologies
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          
          <li className="breadcrumb-item" aria-current="page">
            Manage Technologies
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
        
        <h1 className="mb-3">MANAGE TECHNOLOGIES</h1>
       
      </div>
      <div className="contact-detail position-relative p-5">
       
        <div className="row g-5">
          
          <div className="col-lg-12  wow fadeIn" data-wow-delay=".5s">
       <div className="table-responsive">
         <table class="table mt-5 mb-5 table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Sr. No.</th>
                    <th scope="col">Technology Name</th>
                    <th scope="col">Technology Image</th>
                    <th scope="col">Description</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Edit</th>
                  </tr>
                </thead>
                <tbody>
                         {
                         technologyData?.map((el,index) =>(
                         <>
                         <tr>
                        <td>{index+1}</td>
                        <td>{el.technologyName}</td>
                        <td><img  src={BASE_IMAGE_URL + el.techImg} style={{height:"150px"}}/>
                        {console.log(BASE_IMAGE_URL + el.techImg)}</td>
                        <td>{el.description}</td>
                        <td><button className=" btn btn-danger" onClick={ () =>deleteData(el._id)}>Delete</button></td>
                        <td><Link to={"/admin/updatetechnology/"+el._id} >
                        <button className=" btn btn-info">Update</button>
                        </Link></td>
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