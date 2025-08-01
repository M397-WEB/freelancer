import { useEffect, useState } from "react";
import apiServices from "../ApiServices/apiServices";

export default function Reviews() {
  const [reviewData, setReviewData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    apiServices
      .getallReviews()
      .then((res) => {
        setReviewData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5">
        <div className="container text-center py-5">
          <h1 className="display-2 text-white mb-4 animated slideInDown">
            Reviews
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Reviews
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}

      {/* Stats Section */}
      <div className="container-fluid bg-secondary py-5">
        <div className="container">
          <div className="row">
            {/* You can keep or remove this section based on your needs */}
            <div className="col-lg-3 text-white">
              <h1 className="text-primary">99</h1>
              <p>Success in getting happy customers</p>
            </div>
            <div className="col-lg-3 text-white">
              <h1 className="text-primary">25</h1>
              <p>Thousands of successful businesses</p>
            </div>
            <div className="col-lg-3 text-white">
              <h1 className="text-primary">120</h1>
              <p>Total clients who love HighTech</p>
            </div>
            <div className="col-lg-3 text-white">
              <h1 className="text-primary">5</h1>
              <p>Stars reviews given by satisfied clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container py-5">
        <div className="row g-4">
          {reviewData?.map((el, index) => (
            <div className="col-md-6" key={index}>
              <div className="card shadow-lg border-0 h-100">
                <div className="card-body d-flex flex-column">
                  <div className="mb-3">
                    <h5 className="card-title mb-1">
                      {el?.clientId?.name}{" "}
                      <span className="text-muted" style={{ fontSize: "0.9rem" }}>
                        ({el?.clientId?.email})
                      </span>
                    </h5>
                    <p className="mb-0 text-muted" style={{ fontSize: "0.85rem" }}>
                      {el?.clientId?.address}
                    </p>
                  </div>

                  <div className="mb-2">
                    <strong>Project:</strong> {el?.orderId?.title} <br />
                    <strong>Budget:</strong> ₹{el?.orderId?.budget}
                  </div>

                  <div className="mb-2">
                    <strong>Rating:</strong>{" "}
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`fa-star me-1 ${
                          i < el.rating ? "fas text-warning" : "far text-muted"
                        }`}
                      ></i>
                    ))}
                  </div>

                  <p className="card-text">
                    <strong>Review:</strong> {el.reviewMessage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
