import clsx from "clsx";

const PageLayout = ({ className, children, fullscreen }) => {
  return (
    <div className={clsx(className, "p-4 w-full h-full mx-auto", !fullscreen && "max-w-7xl")}>
      {children}
    </div>
  );
};

export default PageLayout;
