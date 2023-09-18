import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <>
      <div className="container flex justify-center items-center gap-x-5 mx-auto w-full min-h-screen">
        <AuthLayout title="Login">
          <FormLogin />
          <p className="text-center font-normal mt-4">
            Don&apos;t  have an account?{" "}
            <Link className="text-blue-600 font-semibold" to="/register">
              Register
            </Link>
          </p>
        </AuthLayout>
      </div>
    </>
  );
};

export default LoginPage;
