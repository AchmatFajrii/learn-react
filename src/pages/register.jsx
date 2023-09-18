import { Link } from "react-router-dom";

import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <>
      <div className="container flex justify-center items-center gap-x-5 mx-auto w-full min-h-screen">
        <AuthLayout title="Register">
          <FormRegister />
          <p className="text-center font-normal mt-4">Have an account? <Link className="text-blue-600 font-semibold" to="/login">Login</Link></p>
        </AuthLayout>
      </div>
    </>
  );
};

export default RegisterPage;
