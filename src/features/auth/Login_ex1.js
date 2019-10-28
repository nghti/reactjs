import React from "react"
import {connect} from "react-redux"
import PropTypes from "prop-types"

import LoginForm from "./components/form/Login"
import {loginRequest} from "./store/actions"
import {fetchPlaceDetailRequest} from  "../top/store/actions"

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      toggle: true
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    const {fetchPlaceDetailRequest} = this.props
    fetchPlaceDetailRequest()
  }

  handleToggle() {
    this.setState({
        toggle: !this.state.toggle
    })
  }

  onSubmit(value) {
    const {loginRequest} = this.props
    loginRequest(value)
  }

  render() {
    const {placeDetail} = this.props
    console.log('log', placeDetail)
    return (
      <div>
        <LoginForm onSubmit={this.onSubmit}></LoginForm>
        <h2 onClick={this.handleToggle}>title</h2>
        {this.state.toggle &&
        <p>content</p>
        }
      </div>
    )
  }
}

Login.propTypes = {
  loginRequest: PropTypes.func,
  fetchPlaceDetailRequest: PropTypes.func
}

function mapStateToProps(state) {
  return { placeDetail: state.top.placeDetail }
}

export default connect(mapStateToProps, {loginRequest, fetchPlaceDetailRequest})(Login)
