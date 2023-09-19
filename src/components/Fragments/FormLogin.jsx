import FormInput from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/products"
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInput
          htmlFor="email"
          type="email"
          name="email"
          placeholder="example@mail.com"
        />
        <FormInput
          htmlFor="password"
          type="password"
          name="password"
          placeholder="******"
        />
        <Button variant="bg-blue-600 w-full text-white" type="submit">
          Login
        </Button>
      </form>
    </>
  );
};

export default FormLogin;
