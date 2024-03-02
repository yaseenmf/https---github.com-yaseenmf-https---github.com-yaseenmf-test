import { MapPinIcon } from "@heroicons/react/24/solid";

export default function Search({ searcher, setSearcher }) {
  return (
    <>
      <div style={{ display: "grid" }}>
        <MapPinIcon className="map-icon" />
        <span className="mapicon-line"></span>
      </div>
      <input
        value={searcher}
        type="text"
        onChange={(e) => setSearcher(e.target.value)}
        className="input-search"
        placeholder="where you want go??"
        name="searcher"
        id="searcher"
      />
    </>
  );
}
