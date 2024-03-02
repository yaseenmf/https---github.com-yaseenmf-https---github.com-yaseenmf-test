import { Link } from "react-router-dom";
// import Loader from "../Page/loader";
import { useHotels } from "../contexts/hotelProvider";

export default function Hotels() {
  const { isLoading, hotels } = useHotels();
  if (isLoading) <div>Loader</div>;

  return (
    <div className="hotel-list-item ">
      <h2> :تعداد هتل های یافت شده{hotels.length}</h2>
      <div style={{ gap: "10px", display: "grid", width: "400px" }}>
        {hotels.map((item) => {
          return (
            <Link
              key={item.id}
              to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
            >
              <div className="hotel-items">
                <img
                  src={item.picture_url.url}
                  alt={item.name}
                  className="hotel-item-img"
                />
                <div className="searchItemDesc">
                  <p className="black">{item.smart_location}</p>
                  <p className="black">{item.name}</p>
                  <p className="location-price">{item.price} IRR </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
