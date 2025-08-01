import { useEffect } from "react";
import { useState } from "react";
import apiServices from "../ApiServices/apiServices";

export default function Dashboard(){
  const [orderData, setorderData] = useState([]);
  const [technologyData, setTechnologyData] = useState([]);
  const [enquiryData, setenquiryData] = useState([]);
   const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    Promise.all([
      apiServices.getallOrders(),
      apiServices.getallTechnology(),
      apiServices.getallEnquiries(),
      apiServices.getallReviews()
    ])
      .then(([orderRes, techRes, enquiryRes,reviewRes]) => {
        setorderData(orderRes.data.data.length);
        setTechnologyData(techRes.data.data.length);
        setenquiryData(enquiryRes.data.data.length);
        setReviewData(reviewRes.data.data.length)
      })
      .catch((err) => {
        console.log("Error fetching dashboard data:", err.message);
      });
  }, []);

    return(
        <>
        {/* Page Header Start */}
  <div className="container-fluid page-header py-5">
    <div className="container text-center py-5">
      <h1 className="display-2 text-white mb-4 animated slideInDown">
       WELCOME ADMIN
      </h1>
      
    </div>
  </div>
  {/* Page Header End */}
  
  {/* Services Start */}
  <div className="container-fluid services py-5 my-5">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeIn"
        data-wow-delay=".3s"
        style={{ maxWidth: 600 }}
      >
        <h5 className="text-primary">
          <i className="fas fa-tachometer-alt me-2"></i> DASHBOARD
        </h5>
        <h1>TRACK ALL ACTIVITIES HERE</h1>

      </div>
      <div className="row g-5 services-inner">
     
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay=".5s">
          <div className="services-item bg-light">
            <div className="p-4 text-center services-content">
              <div className="services-content-icon">
                <i className="fas fa-cogs fa-7x mb-4 text-primary" />
                <h4 className="mb-3">TOTAL TECHNOLOGIES</h4>
                <h1 className="mb-4">
                 {technologyData}
                </h1>
               
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay=".7s">
          <div className="services-item bg-light">
            <div className="p-4 text-center services-content">
              <div className="services-content-icon">
                <i className="fas fa-shopping-cart fa-7x mb-4 text-primary" />
                <h4 className="mb-3">TOTAL ORDERS</h4>
                <h1 className="mb-4">
                  {orderData}
                </h1>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay=".3s">
          <div className="services-item bg-light">
            <div className="p-4 text-center services-content">
              <div className="services-content-icon">
               <i className="fas fa-question-circle fa-7x mb-4 text-primary" />
                <h4 className="mb-3">TOTAL ENQUIRIES</h4>
                <h1 className="mb-4">
                  {enquiryData}
                </h1>
                
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay=".5s">
          <div className="services-item bg-light">
            <div className="p-4 text-center services-content">
              <div className="services-content-icon">
                <i className="fas fa-star fa-7x mb-4 text-primary" />
                <h4 className="mb-3">TOTAL REVIEWS</h4>
                <h1 className="mb-4">
                  {reviewData}
                </h1>
               
              </div>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  </div>
  {/* Services End */}
        </>
    )
}