export default function Team(){
    return(
        <>
        <>
  {/* Page Header Start */}
  <div className="container-fluid page-header py-5">
    <div className="container text-center py-5">
      <h1 className="display-2 text-white mb-4 animated slideInDown">
        Our Team
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item" aria-current="page">
            Our Team
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Fact Start */}
  <div className="container-fluid bg-secondary py-5">
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
  {/* Team Start */}
  <div className="container-fluid py-5 my-5 team">
    <div className="container py-5">
      <div
        className="text-center mx-auto pb-5 wow fadeIn"
        data-wow-delay=".3s"
        style={{ maxWidth: 600 }}
      >
        <h5 className="text-primary">Our Team</h5>
        <h1>Meet our expert Team</h1>
      </div>
      <div
        className=" team-carousel wow fadeIn"
        data-wow-delay=".5s"
      >
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12" style={{textAlign:"center"}}>
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                <img
                  src="img/team-1.jpg"
                  className="img  rounded-circle "
                  alt=""
                  style={{height:"400px"}}
                />
              </div>
              <div className="team-name py-3">
                <h4 className="">Full Name</h4>
                <p className="m-0">Designation</p>
              </div>
            
            </div>
          </div>
        </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12" style={{textAlign:"center"}}>
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                <img
                  src="img/team-2.jpg"
                  className="img-fluid  rounded-circle"
                  alt=""
                  style={{height:"400px"}}
                />
              </div>
              <div className="team-name  py-3">
                <h4 className="">Full Name</h4>
                <p className="m-0">Designation</p>
              </div>
              
            </div>
          </div>
        </div>
        </div>
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12" style={{textAlign:"center"}}>
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                <img
                  src="img/team-3.jpg"
                  className="img-fluid  rounded-circle"
                  alt=""
                  style={{height:"400px"}}
                />
              </div>
              <div className="team-name  py-3">
                <h4 className="">Full Name</h4>
                <p className="m-0">Designation</p>
              </div>
              
            </div>
          </div>
        </div>
        </div>
       <div className="col-lg-6 col-md-6 col-sm-12" style={{textAlign:"center"}}>
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                <img
                  src="img/team-4.jpg"
                  className="img-fluid  rounded-circle"
                  alt=""
                  style={{height:"400px"}}
                />
              </div>
              <div className="team-name  py-3">
                <h4 className="">Full Name</h4>
                <p className="m-0">Designation</p>
              </div>
              
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  {/* Team End */}
</>

        </>
    )
}