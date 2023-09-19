import { Link } from "react-router-dom";
import React from "react";
const AuthLayout = ({ title, children, type }) => {
  return (
    <>
      <div className="w-full max-w-xs ">
        <h1 className="text-3xl text-blue-600 font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome please enter your details
        </p>
        {children}

        {type === "login" ? (
          <p className="text-center font-normal mt-4">
            Don&apos;t have an account?{" "}
            <Link className="text-blue-600 font-semibold" to="/register">
              Register
            </Link>
          </p>
        ) : (
          <p className="text-center font-normal mt-4">
            Have an account?{" "}
            <Link className="text-blue-600 font-semibold" to="/login">
              Login
            </Link>
          </p>
        )}
      </div>
    </>
  );
};

export default AuthLayout;
