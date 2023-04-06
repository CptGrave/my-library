import React from "react"

export default function Rating(props) {
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);

  React.useEffect(()=>{
    //Create a way to save ratings in each book, and save it into memory
    console.log(rating)
  },[rating])

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};