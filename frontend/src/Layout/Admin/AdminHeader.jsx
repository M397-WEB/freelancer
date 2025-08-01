import { Link,useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState,useEffect } from "react";

export default function AdminHeader(){
  const [token, setToken] = useState(sessionStorage.getItem("token"));
    const nav  = useNavigate();
     useEffect(() => {
       const interval = setInterval(() => {
         setToken(sessionStorage.getItem("token")); // Update token whenever it changes
       }, 1000); 
   
       return () => clearInterval(interval); 
     }, []);
   
     console.log("Token in Header:", token);
    const logout=()=>{
       sessionStorage.removeItem("token");
       sessionStorage.removeItem("name");
       sessionStorage.removeItem("userId");
       toast.success("Logout successfully")
       setTimeout(() => {
         nav('/login');
       }, 1000);
     }
    return(
        <>
        <>
  {/* Topbar Start */}
  <div className="container-fluid bg-dark py-2 d-none d-md-flex">
    <div className="container">
      <div className="d-flex justify-content-between topbar">
        <div className="top-info">
          <small className="me-3 text-white-50">
            <a href="#">
              <i className="fas fa-map-marker-alt me-2 text-secondary" />
            </a>
            23 Ranking Street, New York
          </small>
          <small className="me-3 text-white-50">
            <a href="#">
              <i className="fas fa-envelope me-2 text-secondary" />
            </a>
            Email@Example.com
          </small>
        </div>
        <div id="note" className="text-secondary d-none d-xl-flex">
          <small>Note : We help you to Grow your Business</small>
        </div>
        <div className="top-link">
          <a
            href=""
            className="bg-light nav-fill btn btn-sm-square rounded-circle"
          >
            <i className="fab fa-facebook-f text-primary" />
          </a>
          <a
            href=""
            className="bg-light nav-fill btn btn-sm-square rounded-circle"
          >
            <i className="fab fa-twitter text-primary" />
          </a>
          <a
            href=""
            className="bg-light nav-fill btn btn-sm-square rounded-circle"
          >
            <i className="fab fa-instagram text-primary" />
          </a>
          <a
            href=""
            className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"
          >
            <i className="fab fa-linkedin-in text-primary" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid bg-primary">
    <div className="container">
      <nav className="navbar navbar-dark navbar-expand-lg py-0">
        <a href="index.html" className="navbar-brand">
          <h1 className="text-white fw-bold d-block">
            FREE<span className="text-secondary">LANCE</span>{" "}
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler me-0"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse bg-transparent"
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto mx-xl-auto p-0">
            <Link
              to={'/admin'}
              className="nav-item nav-link  text-light"
            >
              Dashboard
            </Link>
            <div className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Technology
              </Link>
              <div className="dropdown-menu rounded">
                <Link to={'/admin/addtechnologies'} className="dropdown-item">
                  Add Technology
                </Link>
                <Link to={'/admin/managetechnologies'} className="dropdown-item">
                  Manage Technology
                </Link>
               
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Orders
              </Link>
              <div className="dropdown-menu rounded">
                <Link to={'/admin/pendingorders'} className="dropdown-item">
                  Pending Orders
                </Link>
                <Link to={'/admin/acceptedorders'} className="dropdown-item">
                  Accepted Orders
                </Link>
                  <Link to={'/admin/completedorders'} className="dropdown-item">
                  Completed Orders
                </Link>
                <Link to={'/admin/rejectedorders'} className="dropdown-item">
                  Rejected Orders
                </Link>
                  <Link to={'/admin/cancledorders'} className="dropdown-item">
                  Canceled Orders
                </Link>
               
              </div>
            </div>
            <Link to={'/admin/viewenquiries'} className="nav-item nav-link">
              Enquiries
            </Link>
            <Link to={'/admin/viewreviews'} className="nav-item nav-link">
              Reviews
            </Link>
        
          </div>
        </div>
        <div className="d-none d-xl-flex flex-shirink-0">
          
         <div className="d-flex align-items-center justify-content-center ms-4 ">
            <Link onClick={logout}>
             <button className="btn btn-secondary">Logout</button>
            </Link>
           
          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Navbar End */}
</>

        </>
    )
}