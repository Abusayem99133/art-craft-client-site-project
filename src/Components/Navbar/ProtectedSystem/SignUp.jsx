import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [signUpError, setSignUpError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="">
        <div className="w-1/2 flex mx-auto border-2 rounded-xl ">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                placeholder="Photo URl"
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
                className="ml-96 -mt-8"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              {signUpError && (
                <p className="text-red-400 font-display ">{setSignUpError}</p>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary ">Sign In</button>
            </div>
          </form>
        </div>
        <p className="p-3 ml-80  text-white">
          Please Sign Up ?
          <Link to="/signin" className="btn-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
