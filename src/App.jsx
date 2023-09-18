import { Link } from "react-router-dom";
const App = () => {
  return (
    <>
      <div className="container flex justify-center items-center flex-col gap-x-5 mx-auto w-full min-h-screen">
        <h1 className="text-2xl font-bold">Hello Welcome! Please select one</h1>
        <div className="flex gap-x-4 mt-4">
          <p className="text-xl bg-blue-600 py-2 px-4 rounded-xl font-semibold text-white">
            <Link to={"/login"}>Login</Link>
          </p>
          <p className="text-xl bg-blue-600 py-2 px-4 rounded-xl font-semibold text-white">
            <Link to={"/register"}>Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default App;
