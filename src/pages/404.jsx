import { useRouteError } from "react-router-dom";

const Error404 = () => {
  const error = useRouteError();

  return (
    <>
      <div className="container flex justify-center flex-col items-center gap-y-2 mx-auto w-full min-h-screen">
        <h1 className="text-4xl font-bold ">Oops!</h1>
        <p className="text-xl font-medium">
          Sorry an unexpected error has occurred
        </p>
        <p className="text-lg text-slate-400">
          {error.statusText || error.message}
        </p>
      </div>
    </>
  );
};

export default Error404;
