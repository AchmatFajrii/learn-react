import Button from "./Button";

const App = () => {
  return (
    <>
      <div className="container flex justify-center items-center gap-x-5 mx-auto w-full min-h-screen">
        <Button variant="bg-green-500">Login</Button>
        <Button variant="bg-red-500">Logout</Button>
        <Button variant="bg-slate-500">Register</Button>
      </div>
    </>
  );
};

export default App;
