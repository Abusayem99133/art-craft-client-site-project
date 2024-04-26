import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    if (password.length < 6) {
      setSignUpError();
      toast.error("password should be at least 6 character...");

      return;
    } else if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
      toast.error("please show the on character in Uppercase and Lowercase");
      return;
    } else {
      toast.success("Successfully Register!");
    }
    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo).then(() => {});

        navigate(from);
      })
      .catch((error) => {
        toast.error("Error Register.");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Sign Up Page</title>
      </Helmet>
      <div
        className="hero min-h-screen bg-base-50"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/wT5YWMXk/house-in-nature-4k-1540131726-jpg.webp)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-45 "></div>
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white font-display">
              SignUp
            </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bordered">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-display">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-display">
                    {" "}
                    Photo
                  </span>
                </label>
                <input
                  type="photo"
                  name="photo"
                  placeholder="photo url here"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-display">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white font-display">
                    Password
                  </span>
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
                  className="ml-48 text-purple-400 -mt-8"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                {signUpError && (
                  <p className="text-orange-300">{signUpError}</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn hover:bg-purple-300 font-display">
                  Sign Up
                </button>
              </div>
            </form>
            <p className="p-3 font-display text-white">
              Already have an account ?{" "}
              <Link to="/signin" className="btn-link text-purple-300">
                SignIn
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};
export default SignUp;
