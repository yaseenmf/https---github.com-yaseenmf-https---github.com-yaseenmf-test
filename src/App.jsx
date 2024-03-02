import { Route, Routes } from "react-router-dom";
import Header from "./layout/header/header";
import Location from "./layout/main/locationList";
import ApLayout from "./components/ApLayout";
import Hotels from "./components/hotels";
import HotelProvider from "./contexts/hotelProvider";
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <HotelProvider>
      <Toaster />
      <Header />
      <Routes>
        <Route path="/" element={<Location />} />
        <Route path="/hotels" element={<ApLayout />}>
          <Route index element={<Hotels />} />
          <Route path=":id" element={<div>single hotel</div>} />
        </Route>
      </Routes>
    </HotelProvider>
  );
}
