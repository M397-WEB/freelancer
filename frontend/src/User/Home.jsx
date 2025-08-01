export default function Home(){
    return(
        <>
        <>
  {/* Carousel Start */}
<div className="container-fluid px-0">
  <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
    <ol className="carousel-indicators">
      <li
        data-bs-target="#carouselId"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="First slide"
      />
      <li
        data-bs-target="#carouselId"
        data-bs-slide-to={1}
        aria-label="Second slide"
      />
    </ol>
    <div className="carousel-inner" role="listbox">
     
      <div className="carousel-item active">
        <img
          src="img/carousel-1.jpg"
          className="img-fluid"
          alt="First slide"
        />
        <div className="carousel-caption">
          <div className="container carousel-content">
            <h6 className="text-secondary h4 animated fadeInUp">
              Freelance Software Development
            </h6>
            <h1 className="text-white display-1 mb-4 animated fadeInRight">
              Turning Your Ideas Into Real Software Products
            </h1>
            <p className="mb-4 text-white fs-5 animated fadeInDown">
              Submit your software idea—be it a gaming platform, banking app, or business tool—and our expert freelance team will deliver it with quality and precision.
            </p>
            <a href="/about" className="me-2">
              <button
                type="button"
                className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft"
              >
                Learn More
              </button>
            </a>
            <a href="/contact" className="ms-2">
              <button
                type="button"
                className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight"
              >
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>

     
     <div className="carousel-item">
  <img
    src="img/carousel-2.jpg"
    className="img-fluid"
    alt="Second slide"
  />
  <div className="carousel-caption">
    <div className="container carousel-content">
      <h6 className="text-secondary h4 animated fadeInUp">
        Expert Freelance Team
      </h6>
      <h1 className="text-white display-1 mb-4 animated fadeInLeft">
        Reliable Delivery for Every Software Vision
      </h1>
      <p className="mb-4 text-white fs-5 animated fadeInDown">
        Our skilled freelancers specialize in custom software, from banking apps to e-commerce systems—delivering scalable, secure, and timely solutions.
      </p>
      <a href="/services" className="me-2">
        <button
          type="button"
          className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft"
        >
          View Services
        </button>
      </a>
      <a href="/order" className="ms-2">
        <button
          type="button"
          className="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight"
        >
          Place Order
        </button>
      </a>
    </div>
  </div>
</div>

    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselId"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselId"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
{/* Carousel End */}

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
 {/* About Start */}
<div className="container-fluid py-5 my-5">
  <div className="container pt-5">
    <div className="row g-5">
      <div
        className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
        data-wow-delay=".3s"
      >
        <div className="h-100 position-relative">
          <img
            src="img/about-1.jpg"
            className="img-fluid w-75 rounded"
            alt=""
            style={{ marginBottom: "25%" }}
          />
          <div
            className="position-absolute w-75"
            style={{ top: "25%", left: "25%" }}
          >
            <img
              src="img/about-2.jpg"
              className="img-fluid w-100 rounded"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
        data-wow-delay=".5s"
      >
        <h5 className="text-primary">About FreeLance</h5>
        <h1 className="mb-4">
          Bridging Ideas with Execution Through Expert Freelance Teams
        </h1>
        <p>
          FreeLance is your trusted platform for transforming software ideas into real, functional applications. Whether you're a startup, entrepreneur, or business owner, we provide access to top-tier freelance developers who specialize in building modern, scalable solutions.
        </p>
        <p className="mb-4">
          From gaming platforms and e-commerce sites to custom CRM tools and banking apps—FreeLance ensures your project is handled with precision, innovation, and timely delivery. Our team works closely with clients at every stage, offering transparency and high-quality results.
        </p>
        <a
          href="/about"
          className="btn btn-secondary rounded-pill px-5 py-3 text-white"
        >
          More Details
        </a>
      </div>
    </div>
  </div>
</div>
{/* About End */}

 {/* Services Start */}
<div className="container-fluid services py-5 mb-5">
  <div className="container">
    <div
      className="text-center mx-auto pb-5 wow fadeIn"
      data-wow-delay=".3s"
      style={{ maxWidth: 600 }}
    >
      <h5 className="text-primary">Our Services</h5>
      <h1>Tailored Software Solutions for Every Business</h1>
    </div>
    <div className="row g-5 services-inner">

      <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
        <div className="services-item bg-light">
          <div className="p-4 text-center services-content">
            <div className="services-content-icon">
              <i className="fa fa-code fa-7x mb-4 text-primary" />
              <h4 className="mb-3">Custom Web Design</h4>
              <p className="mb-4">
                We craft beautiful, user-friendly websites tailored to your business goals and branding.
              </p>
              <a href="#" className="btn btn-secondary text-white px-5 py-3 rounded-pill">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
        <div className="services-item bg-light">
          <div className="p-4 text-center services-content">
            <div className="services-content-icon">
              <i className="fa fa-file-code fa-7x mb-4 text-primary" />
              <h4 className="mb-3">Full-Stack Development</h4>
              <p className="mb-4">
                From front-end to back-end, we build scalable and high-performance software solutions.
              </p>
              <a href="#" className="btn btn-secondary text-white px-5 py-3 rounded-pill">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
        <div className="services-item bg-light">
          <div className="p-4 text-center services-content">
            <div className="services-content-icon">
              <i className="fa fa-external-link-alt fa-7x mb-4 text-primary" />
              <h4 className="mb-3">UI/UX Design</h4>
              <p className="mb-4">
                Enhance user engagement with intuitive and visually appealing designs for web and mobile.
              </p>
              <a href="#" className="btn btn-secondary text-white px-5 py-3 rounded-pill">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
        <div className="services-item bg-light">
          <div className="p-4 text-center services-content">
            <div className="services-content-icon">
              <i className="fas fa-user-secret fa-7x mb-4 text-primary" />
              <h4 className="mb-3">Web Security</h4>
              <p className="mb-4">
                We ensure your application is secure from cyber threats with the latest security practices.
              </p>
              <a href="#" className="btn btn-secondary text-white px-5 py-3 rounded-pill">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
        <div className="services-item bg-light">
          <div className="p-4 text-center services-content">
            <div className="services-content-icon">
              <i className="fa fa-envelope-open fa-7x mb-4 text-primary" />
              <h4 className="mb-3">Digital Marketing</h4>
              <p className="mb-4">
                We help launch and grow your product online with result-driven SEO, email, and social strategies.
              </p>
              <a href="#" className="btn btn-secondary text-white px-5 py-3 rounded-pill">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
        <div className="services-item bg-light">
          <div className="p-4 text-center services-content">
            <div className="services-content-icon">
              <i className="fas fa-laptop fa-7x mb-4 text-primary" />
              <h4 className="mb-3">Custom Programming</h4>
              <p className="mb-4">
                Whether it's a game engine or a business tool, we write clean, efficient code that powers results.
              </p>
              <a href="#" className="btn btn-secondary text-white px-5 py-3 rounded-pill">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
{/* Services End */}

  {/* Project Start */}
  <div className="container-fluid project py-5 mb-5">
    <div className="container">
      <div
        className="text-center mx-auto pb-5 wow fadeIn"
        data-wow-delay=".3s"
        style={{ maxWidth: 600 }}
      >
        <h5 className="text-primary">Our Project</h5>
        <h1>Our Recently Completed Projects</h1>
      </div>
      <div className="row g-5">
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
          <div className="project-item">
            <div className="project-img">
              <img
                src="img/project-1.jpg"
                className="img-fluid w-100 rounded"
                alt=""
              />
              <div className="project-content">
                <a href="#" className="text-center">
                  <h4 className="text-secondary">Web design</h4>
                  <p className="m-0 text-white">Web Analysis</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
          <div className="project-item">
            <div className="project-img">
              <img
                src="img/project-2.jpg"
                className="img-fluid w-100 rounded"
                alt=""
              />
              <div className="project-content">
                <a href="#" className="text-center">
                  <h4 className="text-secondary">Cyber Security</h4>
                  <p className="m-0 text-white">Cyber Security Core</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
          <div className="project-item">
            <div className="project-img">
              <img
                src="img/project-3.jpg"
                className="img-fluid w-100 rounded"
                alt=""
              />
              <div className="project-content">
                <a href="#" className="text-center">
                  <h4 className="text-secondary">Mobile Info</h4>
                  <p className="m-0 text-white">Upcomming Phone</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
          <div className="project-item">
            <div className="project-img">
              <img
                src="img/project-4.jpg"
                className="img-fluid w-100 rounded"
                alt=""
              />
              <div className="project-content">
                <a href="#" className="text-center">
                  <h4 className="text-secondary">Web Development</h4>
                  <p className="m-0 text-white">Web Analysis</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
          <div className="project-item">
            <div className="project-img">
              <img
                src="img/project-5.jpg"
                className="img-fluid w-100 rounded"
                alt=""
              />
              <div className="project-content">
                <a href="#" className="text-center">
                  <h4 className="text-secondary">Digital Marketing</h4>
                  <p className="m-0 text-white">Marketing Analysis</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
          <div className="project-item">
            <div className="project-img">
              <img
                src="img/project-6.jpg"
                className="img-fluid w-100 rounded"
                alt=""
              />
              <div className="project-content">
                <a href="#" className="text-center">
                  <h4 className="text-secondary">keyword Research</h4>
                  <p className="m-0 text-white">keyword Analysis</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Project End */}
 

 
</>

        </>
    )
}