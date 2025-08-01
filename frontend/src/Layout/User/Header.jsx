import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
export default function Header(){
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
     }, 500);
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
              to={'/'}
              className="nav-item nav-link  text-light"
            >
              Home
            </Link>
            <Link to={'/about'} className="nav-item nav-link">
              About
            </Link>
            <Link to={'/technologies'} className="nav-item nav-link">
              Technology
            </Link>
            <Link to={'/reviews'} className="nav-item nav-link">
              Customer Reviews
            </Link>
            <Link to={'/contact'} className="nav-item nav-link">
              Contact
            </Link>
          </div>
        </div>
        <div className="d-none d-xl-flex flex-shirink-0">
         
         {token ? (
          <>
           <div className="d-flex align-items-center justify-content-center ms-4 ">
            <div className="nav-item dropdown">
              <Link
                href="#"
                className="nav-link text-light dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Order
              </Link>
              <div className="dropdown-menu rounded">
                <Link to={'/addorder'} className="dropdown-item">
                  Add Order
                </Link>
                <Link to={'/trackorders'} className="dropdown-item">
                  Track Order
                </Link>
               
              </div>
            </div>
            <Link onClick={logout}>
             <button className="btn btn-secondary ms-3">Logout</button>
            </Link>
           
          </div>
          </>
         ):(
           <div className="d-flex align-items-center justify-content-center ms-4 ">
            <Link to={'/register'}>
             <button className="btn btn-success">Register</button>
            </Link>
            <Link to={'/login'}>
             <button className="btn btn-secondary ms-3">Login</button>
            </Link>
          </div>
         )}
        </div>
      </nav>
    </div>
  </div>
  {/* Navbar End */}
</>

        </>
    )
}