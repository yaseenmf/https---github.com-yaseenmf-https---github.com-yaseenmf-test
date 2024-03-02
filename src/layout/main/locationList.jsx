import useFetch from "../../hooks/usefetch";
import Loader from "../../Page/loader";

export default function Location() {
  const { data, isLoading } = useFetch("http://localhost:5000/hotels", "");
  if (isLoading) <Loader />;
  return (
    <div className="locations">
      <h2>لیست مکان ها{}</h2>
      <div className="location-list">
        {data.map((item) => {
          return (
            <div className="location-item" key={item.id}>
              <img
                className="location-img"
                src={item.picture_url.url}
                alt={item.name}
              />
              <div className="location-descs">
                <p className="location-desc">{item.smart_location}</p>
                <p className="location-name">{item.name}</p>
                <p className="location-price">{item.price} IRR </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
