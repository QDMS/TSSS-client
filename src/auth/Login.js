import { toast } from "react-toastify";
import "./styles.scss";
import { login } from "../actions/auth";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Login = ({history}) => {
  const [email, setEmail] = useState("qujuanmiller@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [passwordShown, setPasswordShown] = useState(true);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("SEND LOGIN DATA", { email, password });
    try {
      let res = await login({
        email,
        password,
      });
      if (res.data) {
        console.log(
          "SAVE USER RES IN REDUX AND LOCAL STORAGE THEN REDIRECT ===> "
        );
        // console.log(res.data);
        // save user and token to local storage
        window.localStorage.setItem("auth", JSON.stringify(res.data));
        // save user and token to redux
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        history.push("/");
      }
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <div className="content">
          <h2 className="text_shadows font-face-tb">Login</h2>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <LoginForm
              handleSubmit={handleSubmit}
              email={email}
              password={password}
              setEmail={setEmail}
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

export default Login;
