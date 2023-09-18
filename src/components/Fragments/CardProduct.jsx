import Button from "../Elements/Button";

const CardProduct = ({ children }) => {
  return (
    <>
      <div className="w-full max-w-xs p-4 rounded-lg bg-blue-600">
        {children}
      </div>
    </>
  );
};

const Header = ({ image }) => {
  return (
    <>
      <img className="rounded" src={image} alt="Gambar sepatu" />
    </>
  );
};

const Body = ({ title, children }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-white mt-2">{title}</h1>
      <p className="text-sm font-normal text-white">{children}</p>
    </>
  );
};

const Footer = ({ price }) => {
  return (
    <>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-white">{price}</span>
        <Button variant="bg-white text-blue-600">Add to cart</Button>
      </div>
    </>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
