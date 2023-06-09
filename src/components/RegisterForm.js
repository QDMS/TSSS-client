import { AiTwotoneEye, AiTwotoneEyeInvisible } from "react-icons/ai";
import './styles.scss'

const RegisterForm = ({
  handleSubmit,
  name,
  email,
  password,
  passwordShown,
  setPasswordShown,
  setEmail,
  setName,
  setPassword,
}) => (
  <form onSubmit={handleSubmit} className="mt-3">
    <div className="form-group mb-3">
      <label className="form-label">Name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>

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
      <button disabled={!name || !email || !password} className="button">Submit</button>
    </div>
  </form>
);

export default RegisterForm;
