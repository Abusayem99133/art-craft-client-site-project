import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import logo from ".././assets/Canvas Haven.png";
import { Typewriter } from "react-simple-typewriter";
// import { SiSnapcraft } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-purple-300 ">
        <aside>
          {/* <SiSnapcraft className="text-5xl text-purple-700" /> */}
          <img className="w-70 -mb-5" src={logo} alt="" />
          <p className=" font-bold text-purple-800">
            Painting Gallery <br />
            {""}
            <span style={{ color: "purple", fontWeight: "semiBold" }}>
              <Typewriter
                words={[" Providing reliable tech since 2023"]}
                loop={100}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </p>
          <p className="text-purple-800">
            Copyright © 2024 - All right reserved
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4 text-4xl text-purple-800">
            <a>
              <FaTwitter />
            </a>
            <a>
              <FaFacebook />
            </a>
            <a>
              <FaGithub />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
