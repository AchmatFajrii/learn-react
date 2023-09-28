import Button from "../Elements/Button";

const CardProduct = ({ children }) => {
  return (
    <>
      <div className="w-full max-w-xs p-4 rounded-lg bg-blue-600 shadow-lg transition-all ease-in-out duration-300 hover:-translate-y-2">
        {children}
      </div>
    </>
  );
};

const Header = ({ image }) => {
  return (
    <>
      <img className="rounded h-60 w-full" src={image} alt="Gambar sepatu" />
    </>
  );
};

const Body = ({ name, children }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-white mt-2">{name}</h1>
      <p className="text-sm font-normal text-white">{children}</p>
    </>
  );
};

const Footer = ({ price, handleAddToCart, id }) => {
  return (
    <>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-white">
          Rp{" "}
          {price.toLocaleString("id-ID", {
            styles: "currency",
            currency: "IDR",
          })}
        </span>
        <Button
          variant="bg-white text-blue-600"
          onclick={() => handleAddToCart(id)}
        >
          Add to cart
        </Button>
      </div>
    </>
  ); 
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
