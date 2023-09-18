import FormInput from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  return (
    <>
      <form action="">
        <FormInput
          htmlFor="email"
          type="email"
          name="Email"
          placeholder="example@mail.com"
        />
        <FormInput
          htmlFor="password"
          type="password"
          name="Password"
          placeholder="******"
        />
        <Button variant="bg-blue-600 w-full text-white">Login</Button>
      </form>
    </>
  );
};

export default FormLogin;
