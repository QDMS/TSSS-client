import { useState } from "react";
import "./styles.scss";
import RegisterForm from "../components/RegisterForm";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../actions/auth";

const Register = ({history}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(true);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await register({
        name,
        email,
        password,
      })
      console.log("REGISTER USER ===> ", res);
      toast.success("Registered Successfully, Please Login Now.");
      history.push("/login");
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <div className="content">
          <h2 className="text_shadows font-face-tb">Register</h2>
        </div>
      </div>

    

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <RegisterForm
              handleSubmit={handleSubmit}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              passwordShown={passwordShown}
              setPasswordShown={setPasswordShown}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
