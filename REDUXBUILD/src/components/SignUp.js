import React from "react";

const SignUp = () => (
  <div className="row">
    <form action="/auth/local_signup" method="post" className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" />
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        Submit
      </button>
    </form>
  </div>
);

export default SignUp;
