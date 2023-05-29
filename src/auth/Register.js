import { useState } from "react";
import "./styles.scss";
import RegisterForm from "../components/RegisterForm";


const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password });
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <div className="content">
          <h2 className="text_shadows">Register</h2>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <RegisterForm handleSubmit={handleSubmit} name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
