import React, {useState} from 'react';
import { withRouter, useLocation, Link } from 'react-router-dom';

function SignIn(props) {
  const { history } = props;
  const redirectTo = new URLSearchParams(useLocation().search).get("redirectTo");
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const onUsernameChange = (e) => {
    const { value } = e.target;
    setUsername(value);
  }

  const onPasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if(redirectTo) {
      history.push(redirectTo);
    } else history.push('/');
  }

  return (
    <div className="d-flex flex-column ml-auto mr-auto col-md-5 col-lg-5 col-sm-10 mt-5 mb-5">
      <h2 className="mt-5 text-green"> Log In </h2>
      <form>
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
        <div className="d-flex justify-content-end mt-4">
          <button type="button" className="btn  mr-2">
            <Link to="/signup">Sign Up</Link>
          </button>
          <button type="submit" className="btn btn-primary" onClick={handleLogin} disabled={!username || !password}>Log in</button>
        </div>
      </form>
    </div>
  )
}

export default withRouter(SignIn);