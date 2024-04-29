import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { SiSnapcraft } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-purple-300 ">
        <aside>
          <SiSnapcraft className="text-5xl text-purple-700" />
          <p className=" font-bold text-purple-800">
            Art & Craft Ltd. <br />
            Providing reliable tech since 2023
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
