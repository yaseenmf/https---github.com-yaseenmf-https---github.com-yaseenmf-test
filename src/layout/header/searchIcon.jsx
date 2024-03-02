import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export default function SearchIcon({ date, options, searcher }) {
  // const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const handleSearch = () => {
    // console.log(encodedParams);
    const encodedParams = createSearchParams({
      date: JSON.stringify(date),
      searcher,
      options: JSON.stringify(options),
    });
    navigate({
      pathname: "/hotels",
      search: encodedParams.toString(),
    });
  };

  return (
    <>
      <button className="back-icon" onClick={handleSearch}>
        <MagnifyingGlassIcon className="search-icon" />
      </button>
    </>
  );
}
