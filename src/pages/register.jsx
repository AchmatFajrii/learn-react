import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <>
      <div className="container flex justify-center items-center gap-x-5 mx-auto w-full min-h-screen">
        <AuthLayout title="Register">
          <FormRegister />
        </AuthLayout>
      </div>
    </>
  );
};

export default RegisterPage;
