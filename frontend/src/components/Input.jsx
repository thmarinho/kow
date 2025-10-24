import { forwardRef } from "react";

  const Input = forwardRef(({ label, id, ...props }, ref) => {
  return (
    <div>
      <label id={`label-${id}`} className="block text-sm/6 font-medium text-gray-900 ">
        {label}
      </label>
      <input
        aria-labelledby={`label-${id}`}
        id={id}
        ref={ref}
        {...props}
        className=" mt-2 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
      />
    </div>
  );
});

export default Input;
