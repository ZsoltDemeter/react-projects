import "./Footer.css";
import { SiFacebook, SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer-section" id="contact">
      <p id="name">Demeter Zsolt</p>
      <p id="phone">0770480551</p>
      <p>zsoltd.com@gmail.com</p>
      <nav>
        <a
          href="https://www.facebook.com/zsolt.demeter.12/"
          target="_blank"
          rel="noreferrer"
        >
          <SiFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/zsolt-demeter-788269143/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin />
        </a>
        <a
          href="https://github.com/ZsoltDemeter"
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub />
        </a>
      </nav>
    </div>
  );
};

export default Footer;
