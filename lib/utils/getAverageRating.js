export const getAverageRating = (reviews) => {
  let rating = 0;
  if (reviews.length === 0) {
    return rating;
  } else {
    let totalRating = 0;
    reviews.map((review) => {
      totalRating += review.rating;
    });
    rating = totalRating / reviews.length;
  }
  return rating;
};
