const Button = ({ variant = "bg-blue-600 text-white", children }) => {
    return (
      <>
        <button
          className={`h-10 px-6 font-semibold rounded-md ${variant}`}
          type="submit"
        >
          {children}
        </button>
      </>
    );
  };
  
  export default Button;
  