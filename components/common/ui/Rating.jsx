import Star from "./Star";

function Rating({ ratingArray }) {
  return (
    <div className='star-rating'>
      {ratingArray &&
        ratingArray.map((fill, index) => <Star key={index} fill={fill} />)}
    </div>
  );
}

export default Rating;
