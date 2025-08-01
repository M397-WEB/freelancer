import { useState } from "react"
import { useNavigate } from "react-router-dom"
import apiServices from "../ApiServices/apiServices";
import {toast} from "react-toastify";
import Loader from "../Loader/Loader";

export default function Login(){
  
 const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
      const[loader,setLoader] = useState(false)
  const[display,setDisplay] = useState("block")
    
    const nav = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
     
      let data = {
        email: email,
        password: password,
      };
        setLoader(true)
        setDisplay("none")
        apiServices.login(data)
        .then((res) => {
          if (res.data.success) {
            
            sessionStorage.setItem("token", res.data.tokenData);
            console.log("TOKEN AFTER LOGIN :",sessionStorage.getItem("token"))
            sessionStorage.setItem("name", res.data.data.name);
            sessionStorage.setItem("userId", res.data.data._id);
            sessionStorage.setItem("userType", res.data.data.userType);
  
            if (res.data.data.userType === 1) {
              toast.success(res.data.message, { position: 'top-center' });
              setTimeout(() => {
                nav("/admin");
              }, 1500);
            } else if (res.data.data.userType === 2) {
              if(res.data.data.status=="Unblock"){
              sessionStorage.setItem("customerId", res.data.data.customerId);
              console.log("customer id is :",sessionStorage.getItem("customerId"))
               toast.success(res.data.message, { position: 'top-center' });
               setTimeout(() => {
                 nav("/");
               }, 1500);
             }  
             else {
              toast.error("You need admin approval! Please wait for approval", { position: 'top-center' });
              setTimeout(() => {
                
              }, 1500);
            }
            } 
          } else {
            toast.error(res.data.message, { position: 'top-center' });
            
          }
        })
        .catch((err) => {
          toast.error(err.message, { position: 'top-center' });
          
        });
        setTimeout(() => {
          setLoader(false)
          setDisplay("block")
        },1500);
    }; 
    return(
        <>
        <>
  {/* Page Header Start */}
  <div className="container-fluid page-header py-5">
    <div className="container text-center py-5">
      <h1 className="display-2 text-white mb-4 animated slideInDown">
      Login
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          
          <li className="breadcrumb-item" aria-current="page">
           Login
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
  <div className="container-fluid py-5 mt-5" style={{display:display}}>
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeIn"
        data-wow-delay=".3s"
        style={{ maxWidth: 600 }}
      >
        
        <h1 className="mb-3">LOGIN TO CONTINUE..</h1>
       
      </div>
      <div className="contact-detail position-relative p-5">
       
        <div className="row g-5">
          
          <div className="col-lg-8 offset-md-2 wow fadeIn" data-wow-delay=".5s">
          <form onSubmit={handleLogin}>
              <div className="p-5 rounded contact-form">
              
              <div className="mb-4">
                <label>Enter Email:</label>
                <input
                  type="email"
                  className="form-control border-0 py-3"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                />
              </div>
              <div className="mb-4">
                <label>Enter Password:</label>
                <input
                  type="password"
                  className="form-control border-0 py-3"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>
              
              
              <div className="text-start">
                <button
                  className="btn bg-primary text-white py-3 px-5"
                  type="submit"
                >
                 Login
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