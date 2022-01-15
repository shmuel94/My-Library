import React,{useState} from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({bookRating, id, initRate})=>{
  const [rating, setRating] = useState(initRate);
  const [hover, setHover] = useState(null);
  return(
    <div>
      {[...Array(5)].map((star,i)=>{
        const ratingValue = i + 1;
        return(
          <label>
            <input 
            type="radio" 
            name="rating"
            value={ratingValue}
            onClick={()=>{setRating(ratingValue); bookRating(id, ratingValue) }}
            />
            <FaStar
            className="star"
            // value={star}
            color={ratingValue <= (hover || rating) ? "yellow" : "gray"}
            size={50}
            onMouseEnter={()=> setHover(ratingValue)}
            onMouseLeave={()=> setHover(null)}
            />
          </label>
        )
      })}
    </div>
  )
};
export default StarRating;