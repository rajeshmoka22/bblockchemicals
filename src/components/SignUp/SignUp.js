import React, {useState} from 'react';
import { useHistory, Link } from 'react-router-dom';

function SignUp(props) {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')

  const onUsernameChange = (e) => {
    const { value } = e.target;
    setUsername(value);
  }

  const onPasswordChange = (e) => {
    setShowError(false);
    const { value } = e.target;
    setPassword(value);
  }

  const onRePasswordChange = (e) => {
    setShowError(false)
    const { value } = e.target;
    setRePassword(value);
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    if(password !== rePassword) {
      setShowError(true);
      setErrorMsg('Passwords do not match');
    }else if(password.length<8){
      setShowError(true);
      setErrorMsg('Password should be atleast 8 chracters');
    }else {
      history.push('/');
    }
  }

  return (
    <div className="d-flex flex-column ml-auto mr-auto col-md-5 col-lg-5 col-sm-10 mt-5 mb-5">
      <h2 className="mt-5 text-green"> Sign Up </h2>
      <form>
        {showError && (<div className="text-danger">{errorMsg}</div>)}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">@</span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={username}
            onChange={onUsernameChange}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1" onClick={() => setShowPassword(!showPassword)}>
              {
                showPassword?  (<i className="bi bi-eye-slash" />): (<i className="bi bi-eye" />)
              }
            </span>
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-control"
            placeholder="password"
            name="password"
            aria-label="password"
            aria-describedby="basic-addon1"
            value={password}
            onChange={onPasswordChange}
          />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1" onClick={() => setShowPassword(!showPassword)}>
              {
                showPassword?  (<i className="bi bi-eye-slash" />): (<i className="bi bi-eye" />)
              }
            </span>
          </div>
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-control"
            placeholder="re-enter password"
            name="re-password"
            aria-label="re-password"
            aria-describedby="basic-addon1"
            value={rePassword}
            onChange={onRePasswordChange}
          />
        </div>
        <div className="d-flex justify-content-end mt-4">
          <button type="button" className="btn  mr-2">
            <Link to="/signin">Log In</Link>
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSignUp}
            disabled={!username || !password || !rePassword}
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;