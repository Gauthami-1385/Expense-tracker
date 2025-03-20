import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
const Login = () => {
  const {login,registerUser}=useContext(AuthContext)
  const [logIn, setLogIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");


  return (
    <div className="flex min-h-screen items-center justify-center px-4 bg-[#354a2f] ">
      {/* Main Card */}
      <div className="relative  md:w-[80%] lg:w-[50%] h-[50%] bg-[#f5f5d5] [#a3b68a]    rounded-xl shadow-lg flex overflow-hidden">
        {/* Moving Background Inside the Card */}
        <motion.div
          className="absolute inset-0 w-1/2 h-full bg-[#5c724a] [#c7b793]  text-white rounded-xl shadow-lg"
          initial={{ x: "100%" }}
          animate={{ x: logIn ? "100%" : "0%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {/* Left Section (Sign In) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative z-10  md:w-1/2 flex flex-col items-center justify-center item-center px-6 py-8"
        >
          {logIn ? (
            <>
              <h2 className="my-6 text-center text-2xl font-bold ">SIGN IN</h2>
              <form
                onSubmit={()=>login(email,password)}
                className="space-y-4 w-full flex flex-col justify-center items-center m-3  "
              >
                <input
                  className="w-full rounded-lg border border-gray-200 shadow-sm p-2 focus:border-gray-400 focus:outline-none"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="w-full rounded-lg border border-gray-200 shadow-sm p-2 focus:border-gray-400 focus:outline-none"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  className="mt-3 rounded-lg px-4 py-2 text-[#354a2f] border border-gray-400 hover:shadow-lg hover:scale-105  transition-transform duration-300 ease-in-out"
                  type="submit"
                >
                  Login
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-white text-center m-4 ">
                Welcome Friend!
              </h2>
              <p className="text-center text-white space-y-4 ">
                Enter your details to use all the site features.
              </p>
              <button
                className="mt-4 w-full rounded-lg p-2 text-white border border-gray-400 hover:shadow-lg hover:scale-105  transition-transform duration-300 ease-in-out"
                onClick={() => setLogIn(true)}
              >
                SIGN IN
              </button>
            </>
          )}
        </motion.div>

        {/* Right Section (Sign Up) */}
        <div
          className="relative z-10  md:w-1/2 flex flex-col items-center justify-center item-center px-6 py-8"
        >
          {!logIn ? (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-col justify-center items-center">
              <h2 className="my-6 text-center text-2xl font-bold ">
                CREATE ACCOUNT
              </h2>
              <form
                onSubmit={registerUser(name,email,password)}
                className="space-y-4 w-full flex flex-col justify-center items-center m-3  "
              >
                <input
                  className="w-full rounded-lg border border-gray-200 shadow-sm p-2 focus:border-gray-400 focus:outline-none"
                  placeholder="Name"
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className="w-full rounded-lg border border-gray-200 shadow-sm p-2 focus:border-gray-400 focus:outline-none"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="w-full rounded-lg border border-gray-200 shadow-sm p-2 focus:border-gray-400 focus:outline-none"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  className="mt-3 rounded-lg px-4 py-2 text-[#354a2f] border border-gray-400 hover:shadow-lg hover:scale-105  transition-transform duration-300 ease-in-out"
                  type="submit"
                >
                  SIGN UP
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 0.5, delay: 0.5 }} className="flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-white text-center mb-8 ">
                Welcome Back!
              </h2>
              <p className="text-center text-white mb-5">
                Enter your personal details to use all site features.
              </p>
              <button
                className="text-center mt-4 w-1/2 rounded-lg p-2 text-white border border-gray-400 hover:shadow-lg hover:scale-105  transition-transform duration-300 ease-in-out"
                onClick={() => setLogIn(false)}
              >
                SIGN UP
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
