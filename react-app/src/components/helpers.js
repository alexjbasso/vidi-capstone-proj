export function starCalc(rating) {
  const stars = [];
  if (rating === 0) {
    for (let i = 0; i < 5; i++) {
      stars.push(<i className="fa-solid fa-star" key={i} style={{ color: "#grey" }}></i>)
    }
  } else {
    for (let i = 0; i < rating; i++) {
      stars.push(<i className="fa-solid fa-star" key={i} style={{ color: "#00E054" }}></i>)
    }
  }
  return stars;
};
