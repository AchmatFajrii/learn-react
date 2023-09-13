import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout"

const LoginPage = () => {
  return (
    <>
      <div className="container flex justify-center items-center gap-x-5 mx-auto w-full min-h-screen">
        <AuthLayout title="Login">
          <FormLogin />
        </AuthLayout>
      </div>
    </>
  );
};

export default LoginPage;
