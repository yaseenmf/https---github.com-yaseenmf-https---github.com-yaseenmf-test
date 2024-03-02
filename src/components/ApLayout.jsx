import { Outlet } from "react-router-dom";
// import Map from "./map";
// import { useHotels } from "../contexts/hotelProvider";

export default function AppLayout() {
  // const { hotels } = useHotels();
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      {/* <Map markerLocations={hotels} /> */}
    </div>
  );
}
