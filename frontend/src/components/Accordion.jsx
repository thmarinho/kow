import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useState } from "react";

const Accordion = ({ label, children, initialOpen }) => {
  const [open, setOpen] = useState(initialOpen || false);

  return (
    <>
      <button className="w-full text-start py-3 px-2 flex justify-between items-center border-b border-gray-300 mt-6 md:mt-10 font-semibold text-xl" onClick={() => {setOpen(old => !old)}}>
        {label}
        <ChevronDownIcon className={clsx("h-4 aspect-square transition-all duration-300", open ? "rotate-180" : "rotate-0")} />
      </button>
      <div className={clsx("overflow-hidden transition-all ease-in-out duration-300", open ? "max-h-800 pt-3" : "max-h-0")}>
        {children}
      </div>
    </>
  );
};

export default Accordion;
