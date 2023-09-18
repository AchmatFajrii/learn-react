import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    image: "/shoes-1.jpg",
    name: "Sepatu Biru",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea expedita quam quas nemo enim natus! Commodi voluptatibus undenumquam",
    price: "Rp 1.000.000",
  },
  {
    id: 2,
    image: "/shoes-2.jpg",
    name: "Sepatu Abu",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea expedita quam quas nemo enim natus! Commodi voluptatibus undenumquam",
    price: "Rp 1.200.000",
  },
  {
    id: 3,
    image: "/shoes-3.jpg",
    name: "Sepatu Merah",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea expedita quam quas nemo enim natus! Commodi voluptatibus undenumquam",
    price: "Rp 900.000",
  },
];

const ProductsPage = () => {
  return (
    <>
      <div className="container flex justify-center gap-x-5 mt-20 mx-auto w-full">
        {products.map((product, index) => {
          return (
            <CardProduct key={index}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} />
            </CardProduct>
          );
        })}
      </div>
    </>
  );
};

export default ProductsPage;
