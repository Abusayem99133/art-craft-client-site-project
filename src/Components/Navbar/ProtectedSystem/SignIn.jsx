import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [signInError, setSignInError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const from = location?.state || "/";
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    setSignInError();
    signInUser(email, password).then((result) => {
      toast.success("Success SignIn");
      if (result.user) {
        navigate(from);
      }
    });
  };
  const handleSocialSignin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(from);
        console.log(result.user);
      }
    });
  };
  return (
    <div className="">
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/wT5YWMXk/house-in-nature-4k-1540131726-jpg.webp)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-45 "></div>
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold font-display text-white">
              SignIn
            </h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl  bordered">
            <form onSubmit={handleSignIn} className="card-body">
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
                  className="ml-48 text-purple-600 -mt-8"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
                {signInError && (
                  <p className="text-red-400 font-display ">{signInError}</p>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn hover:bg-purple-200 font-display">
                  Login
                </button>
              </div>
            </form>
            <p className="p-3 text-white">
              Do not have an account?{" "}
              <Link to="/signup" className="btn-link text-purple-300">
                SignUp
              </Link>
            </p>
            <div className="p-2">
              <div>
                <h2 className="divider text-center text-white">
                  Or sign in with
                </h2>
                <div className="text-center space-x-6 bg-purple-400 p-3 rounded-md">
                  <button
                    onClick={() => handleSocialSignin(googleSignIn)}
                    className="text-4xl "
                  >
                    <FcGoogle />
                  </button>

                  <button
                    onClick={() => handleSocialSignin(githubSignIn)}
                    className="text-4xl"
                  >
                    <FaGithub />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default SignIn;
