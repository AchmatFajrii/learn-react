const Button = ({
  variant = "bg-blue-600 text-white",
  children,
  onclick = () => {},
  type = "button",
}) => {
  return (
    <>
      <button
        onClick={onclick}
        className={`h-10 px-6 font-semibold rounded-md ${variant}`}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
