import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"

import { loginRequest } from "./store/actions";
import LoginForm from "./components/form/Login";

import { fetchPlaceDetailRequest } from "../top/store/actions"

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
        toggle: true
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  componentDidMount() {
    const {fetchPlaceDetailRequest} = this.props
    fetchPlaceDetailRequest()
  }

  onSubmit(values) {
    const {loginRequest} = this.props
    loginRequest(values)
  }

  handleToggle() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    const {placeDetail} = this.props
    console.log('placeDetail', placeDetail)
    return (
      <div className="mg-auto w-50 mt-50">
        <h2 onClick={this.handleToggle}>LOGIN</h2>
        {this.state.toggle &&
          <p>noi dung noi dung noi dung noi dung noi dung</p>
        }
        <LoginForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

// const Login = () => {
//   return (
//     <div>
//       this is stateless component
//     </div>
//   )
// }

Login.propTypes = {
  loginRequest: PropTypes.func,
  placeDetail: PropTypes.array
}

const mapStateToProps = state => {
  return {
    placeDetail: state.top.placeDetail
  }
}

export default connect(mapStateToProps, {loginRequest, fetchPlaceDetailRequest})(Login)
