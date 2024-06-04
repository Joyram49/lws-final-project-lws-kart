export const getStarFillArray = (rating) => {
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1;
  const starsArray = new Array(5).fill(0).map((_, index) => {
    if (index < fullStars) {
      return 100;
    } else if (index === fullStars) {
      return Math.round(partialStar * 100);
    } else {
      return 0;
    }
  });
  return starsArray;
};
