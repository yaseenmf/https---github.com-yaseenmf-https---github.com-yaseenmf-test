import { CalendarDaysIcon } from "@heroicons/react/24/solid";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { DateRange } from "react-date-range";
import { useState } from "react";

export default function Date({ setDate, date }) {
  const [openDate, setOpenDate] = useState(false);

  return (
    <>
      <div
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => setOpenDate(!openDate)}
      >
        <div>
          <CalendarDaysIcon className="date-icon" />
        </div>
        <div>date</div>
      </div>
      <div>
        {openDate && (
          <DateRange
            className="date"
            ranges={date}
            onChange={(item) => setDate([item.selection])}
            monthDisplayFormat={false}
          />
        )}
      </div>
    </>
  );
}
