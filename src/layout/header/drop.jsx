import { useRef, useState } from "react";
import useOutSideClick from "../../hooks/useOutsideclick";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";

export default function Drop({ options, setOptions }) {
  const [open, setOpen] = useState(false);

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div>
      <div id="dropnumber" onClick={() => setOpen(!open)}>
        بزرگسال {options.adult} &bull; کودک {options.children} &bull; اتاق{" "}
        {options.room}
      </div>
      <div>
        {open && (
          <OpenDrop
            setOpen={setOpen}
            handleOptions={handleOptions}
            options={options}
          />
        )}
      </div>
    </div>
  );
}

function OpenDrop({ options, handleOptions, setOpen }) {
  const optionsRef = useRef();
  useOutSideClick(optionsRef, "dropnumber", () => setOpen(false));
  return (
    <div className="opendrop" ref={optionsRef}>
      <Dropitem
        handleOptions={handleOptions}
        type="adult"
        options={options}
        minLimit={1}
      />

      <Dropitem
        handleOptions={handleOptions}
        type="children"
        options={options}
        minLimit={0}
      />

      <Dropitem
        handleOptions={handleOptions}
        type="room"
        options={options}
        minLimit={1}
      />
    </div>
  );
}

function Dropitem({ options, minLimit, type, handleOptions }) {
  return (
    <div className="Drop-item">
      <span>{type}</span>
      <div>
        <button
          onClick={() => handleOptions(type, "dec")}
          className="drop-btn"
          disabled={options[type] <= minLimit}
        >
          <MinusIcon />
        </button>

        <span> {options[type]} </span>

        <button onClick={() => handleOptions(type, "inc")} className="drop-btn">
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}
