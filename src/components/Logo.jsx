import "./Logo.css";
import Typed from "react-typed";

const Logo = () => {
  return (
    <div className="logo-component">
      <h1>.zsolt</h1>
      <Typed
        className="logo"
        strings={["{demeter}", "{", "{demeter}"]}
        typeSpeed={60}
        backSpeed={80}
        loop
      />
    </div>
  );
};

export default Logo;
