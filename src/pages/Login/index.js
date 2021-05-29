import React from "react";
import { imgLogin } from "../../assets";
import { Input, Button, Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div className="patokan">
      <div className="img-kiri">
        <img className="img-register" src={imgLogin} alt="imageBG" />
      </div>
      <div className="form-kanan">
        <p className="title">Login Project Kanan</p>
        <Input label="Email" placeholder="Your email .." />
        <Gap height={18} />
        <Input label="Password" placeholder="Your password" />
        <Gap height={50} />
        <Button title="Login" onClick={() => history.push('/')} />
        <Gap height={100} />
        <Link title="Belum punya akun, silahkan daftar" onClick={() => history.push('/register')} />
      </div>
    </div>
  );
};

export default Login;
