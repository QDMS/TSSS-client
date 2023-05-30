import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import './styles.scss'

const LoginForm = ({
  handleSubmit,
  email,
  password,
  passwordShown,
  setPasswordShown,
  setEmail,
  setPassword,
}) => (
  <form onSubmit={handleSubmit} className="mt-3">

    <div className="form-group mb-3">
      <label className="form-label">Email Address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <div className="form-group mb-3">
      <label className="form-label">Password</label>
      
      <input
        type={passwordShown ? "text" : "password"}
        className="form-control"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <i onClick={() => setPasswordShown(!passwordShown)}>
      {passwordShown ? <AiTwotoneEye size={30} /> : <AiTwotoneEyeInvisible size={30} />}
      </i>
    </div>
    
    <div className="wrap">
      <button disabled={!email || !password} className="button">Submit</button>
    </div>
  </form>
);

export default LoginForm;