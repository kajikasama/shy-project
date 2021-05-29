import React from "react";
import {
  iconDiscord,
  iconFacebook,
  iconGithub,
  iconTwitter,
  iconYoutube,
  imgLogo,
} from "../../../assets";
import "./footer.scss";
const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-mendos" src={img} alt="icon" />
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="">
          <img className="logo" src={imgLogo} />
        </div>
        <div className="social-wrapper">
          <Icon img={iconYoutube} />
          <Icon img={iconFacebook} />
          <Icon img={iconDiscord} />
          <Icon img={iconGithub} />
          <Icon img={iconTwitter} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
