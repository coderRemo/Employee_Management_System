import { useState } from "react";
import Loader from "./others/Logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    // console.log("EMAIL-", email);
    // console.log("PASS-", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex w-screen items-center justify-center h-screen">
      <div className="border-2 rounded-xl border-orange-600 p-16">
        <div>
          <Loader />
        </div>
        {/* <h1 className="text-3xl font-bold">Hello!</h1> */}
        {/* <p>Sign In to your Account!</p> */}
        <form
          onSubmit={(e) => {
            HandleFormSubmit(e);
          }}
          className="flex flex-col items-center justify-center mt-7 mb-3"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
            required
            className="w-full outline-none bg-transparent border-2 rounded-full border-orange-600 px-6 py-2  placeholder:text-gray-400 font-semibold text-lg"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
            required
            className="w-full outline-none bg-transparent border-2 rounded-full border-orange-600 px-6 py-2 mt-3 placeholder:text-gray-400 font-semibold text-lg"
          />

          <button className="border-none outline-none rounded-full border-orange-600 px-8 py-2 mt-8 bg-orange-600 font-bold text-lg hover:bg-orange-700 w-48 transition duration-300">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
