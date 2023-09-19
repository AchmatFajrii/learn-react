import Label from "./Label";
import Input from "./Input";

const FormInput = ({htmlFor, type, placeholder, name}) => {
  return (
    <>
      <div className="mb-6">
        <Label htmlFor={htmlFor}>{name}</Label>
        <Input type={type} placeholder={placeholder} name={name} />
      </div>
    </>
  );
};

export default FormInput;
