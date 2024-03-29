import { createContext, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/usefetch";

const HotelContext = createContext();
const BASE_URL = "http://localhost:5000/hotels";

function HotelsProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searcher = searchParams.get("searcher");
  const room = JSON.parse(searchParams.get("options"))?.room;

  const { isLoading, data: hotels } = useFetch(
    BASE_URL,
    `q=${searcher || ""}&accommodates_gte=${room || 1}`
  );

  return (
    <HotelContext.Provider
      value={{
        isLoading,
        hotels,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
}

export default HotelsProvider;

export function useHotels() {
  return useContext(HotelContext);
}
