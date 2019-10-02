import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"

import { loginRequest } from "./store/actions";
import LoginForm from "./components/form/Login";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(values) {
    const {loginRequest} = this.props
    loginRequest(values)
  }

  render() {
    return (
      <div className="mg-auto w-50 mt-50">
        <h2>LOGIN</h2>
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func
}

export default connect(null, {loginRequest})(Login)
