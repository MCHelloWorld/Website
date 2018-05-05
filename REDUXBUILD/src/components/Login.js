import React from "react";

const Login = () => (
  <div className="row">
    <form action="/auth/local_login" method="post" className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="text" className="validate" name="username" />
          <label>Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="password"
            type="password"
            className="validate"
            name="password"
          />
          <label>Password</label>
        </div>
      </div>
      <button class="btn waves-effect waves-light" type="submit" name="action">
        Submit
      </button>
    </form>
  </div>
);

export default Login;
