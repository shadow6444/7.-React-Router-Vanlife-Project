import "./HostReview.css";
import { BsStarFill } from "react-icons/bs";

const Review = () => {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ];

  return (
    <section className="host-vans-reviews-container">
      <div className="host-vans-reviews-header">
        <h1>Your reviews</h1>
        <p>
          last <span>30 days</span>
        </p>
      </div>

      <div className="reviews-rating">
        <div className="rating-header">
          <h2>5.0</h2>
          <BsStarFill className="star-icon" />
          <p>overall rating</p>
        </div>
        <div className="ratings">
          <ul className="rating-list">
            <li>
              <p>5 stars</p>
              <div className="progress-bar complete"></div>
              <p className="rating-percent">100%</p>
            </li>
            <li>
              <p>4 stars</p>
              <div className="progress-bar"></div>
              <p className="rating-percent">0%</p>
            </li>
            <li>
              <p>3 stars</p>
              <div className="progress-bar"></div>
              <p className="rating-percent">0%</p>
            </li>
            <li>
              <p>2 stars</p>
              <div className="progress-bar"></div>
              <p className="rating-percent">0%</p>
            </li>
            <li>
              <p className="star-1">1 star</p>
              <div className="progress-bar"></div>
              <p className="rating-percent">0%</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="reviews-container">
        <h2>Reviews (2)</h2>

        <ul className="reviews">
          {reviewsData.map((review) => {
            return (
              <>
                <li>
                  <div className="review-stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <BsStarFill className="review-star" key={i} />
                    ))}
                  </div>
                  <div className="review-header">
                    <h3>{review.name}</h3>
                    <h3 className="review-date">{review.date}</h3>
                  </div>
                  <div className="review-text">
                    <p>{review.text}</p>
                  </div>
                </li>
                <hr />
              </>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Review;
