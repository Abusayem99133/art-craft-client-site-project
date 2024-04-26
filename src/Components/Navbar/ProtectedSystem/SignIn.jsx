import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [signInError, setSignInError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const from = location?.state || "/";

  return (
    <div className="">
      <div
        className="hero min-h-screen bg-base-50"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/wT5YWMXk/house-in-nature-4k-1540131726-jpg.webp)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-1/3 flex mx-auto  ">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="ml-80 -mt-8"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {signInError && (
                <p className="text-red-400 font-display ">{setSignInError}</p>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary ">Sign In</button>
            </div>
            <p className="p-3   text-white">
              Please Sign Up ?
              <Link to="/signup" className="btn-link">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
