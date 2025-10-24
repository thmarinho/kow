const Button = ({ type = "button", children, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/95 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary hover:scale-[1.01] transition-all duration-100"
    >
      {children}
    </button>
  );
};

export default Button;
