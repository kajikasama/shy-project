import React from "react";
import { imgRegister } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import "./register.scss";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  return (
    <div className="patokan">
      <div className="img-kiri">
        <img className="img-register" src={imgRegister} alt="imageBG" />
      </div>
      <div className="form-kanan">
        <p className="title">Register Project Kanan</p>
        <Input label="Full Name" placeholder="Enter your full name .." />
        <Gap height={18} />
        <Input label="Email" placeholder="Your email .." />
        <Gap height={18} />
        <Input label="Password" placeholder="Your password" />
        <Gap height={50} />
        <Button title="Register" onClick={() => history.push("/login")} />
        <Gap height={100} />
        <Link title="Kembali Ke Login" onClick={() => history.push("/login")} />
      </div>
    </div>
  );
};

export default Register;
