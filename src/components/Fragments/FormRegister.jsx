import FormInput from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <>
      <form action="">
        <FormInput
          htmlFor="name"
          type="text"
          name="Fullname"
          placeholder="John Doe"
        />
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
        <FormInput
          htmlFor="confirmPassword"
          type="password"
          name="Confirm Password"
          placeholder="******"
        />
        <Button variant="bg-blue-600 w-full text-white">Register</Button>
      </form>
    </>
  );
};

export default FormRegister;
