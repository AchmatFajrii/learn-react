import { useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
// import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    image: "/shoes-1.jpg",
    name: "Sepatu Biru",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea expedita quam quas nemo enim natus! Commodi voluptatibus undenumquam",
    price: 1000000,
  },
  {
    id: 2,
    image: "/shoes-2.jpg",
    name: "Sepatu Abu",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea expedita quam quas nemo enim natus! Commodi voluptatibus undenumquam",
    price: 1200000,
  },
  {
    id: 3,
    image: "/shoes-3.jpg",
    name: "Sepatu Merah",
    description:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea expedita quam quas nemo enim natus! Commodi voluptatibus undenumquam",
    price: 900000,
  },
];

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="bg-blue-600 text-white px-20 flex items-center justify-end gap-x-4 h-16">
        {localStorage.getItem("email")}
        <Button variant="bg-red-600 text-white" onclick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="container flex gap-x-16 mt-20 mx-auto w-full px-8">
        <div className="flex gap-4 w-[65%]">
          {products.map((product, index) => {
            return (
              <CardProduct key={index}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.name}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            );
          })}
        </div>
        <div className="cart w-[35%]">
          <h1 className="text-4xl font-bold text-blue-600">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.id}</td>
                    <td>
                      {" "}
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {/* <Counter /> */}
    </>
  );
};

export default ProductsPage;
