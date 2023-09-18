import CardProduct from "../components/Fragments/CardProduct";

const products = () => {
  return (
    <>
      <div className="container flex justify-center gap-x-5 mt-20 mx-auto w-full">
        <CardProduct>
          <CardProduct.Header image="/shoes-1.jpg" />
          <CardProduct.Body title="Sepatu Biru">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
            expedita quam quas nemo enim natus! Commodi voluptatibus unde
            numquam
          </CardProduct.Body>
          <CardProduct.Footer price="Rp 1.000.000" />
        </CardProduct>

        <CardProduct>
          <CardProduct.Header image="/shoes-2.jpg" />
          <CardProduct.Body title="Sepatu Abu">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
            expedita quam quas nemo enim natus! Commodi voluptatibus unde
            numquam
          </CardProduct.Body>
          <CardProduct.Footer price="Rp 2.000.000" />
        </CardProduct>
      </div>
    </>
  );
};

export default products;
