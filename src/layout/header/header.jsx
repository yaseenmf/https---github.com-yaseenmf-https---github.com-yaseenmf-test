import { useState } from "react";
import Date from "./date";
import Drop from "./drop";
import Search from "./search";
import SearchIcon from "./searchIcon";

export default function header() {
  const [date, setDate] = useState([{ key: "selection" }]);

  const [options, setOptions] = useState({ adult: 1, children: 0, room: 1 });

  const [searcher, setSearcher] = useState("");

  return (
    <>
      <ul className="nav">
        <li className="nav-item nav-item-search">
          <Search searcher={searcher} setSearcher={setSearcher} />
        </li>
        <span className="line" />
        <li className="nav-item nav-item-search">
          <Date date={date} setDate={setDate} />
        </li>
        <span className="line" />
        <li className="nav-item">
          <Drop options={options} setOptions={setOptions} />
        </li>
        <span className="line" />
        <li className="nav-item">
          <SearchIcon date={date} options={options} searcher={searcher} />
        </li>
      </ul>
    </>
  );
}
