import { useState } from "react";

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
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-orange-600 p-20">
        <form
          onSubmit={(e) => {
            HandleFormSubmit(e);
          }}
          className="flex flex-col items-center justify-center mt-3 mb-3"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter Your Email"
            required
            className="outline-none bg-transparent border-2 rounded-full border-orange-600 px-6 py-2  placeholder:text-gray-400 font-semibold text-lg"
          />

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter Password"
            required
            className="outline-none bg-transparent border-2 rounded-full border-orange-600 px-6 py-2 mt-3 placeholder:text-gray-400 font-semibold text-lg"
          />

          <button className="border-none outline-none rounded-full border-orange-600 px-8 py-2 mt-8 bg-orange-600 font-bold text-lg hover:bg-orange-700 w-full transition duration-300">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
