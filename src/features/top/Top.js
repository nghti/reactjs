import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import _ from "lodash";
import {
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

import { fetchPlaceDetailRequest } from "./store/actions";

class Top extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  componentDidMount() {
    const {fetchPlaceDetailRequest} = this.props
    fetchPlaceDetailRequest()
  }

  handleClick() {
    const {logoutRequest} = this.props
    logoutRequest()
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const {placeDetail} = this.props
    return (
      <ListGroup>
        {!_.isEmpty(placeDetail) && placeDetail.map((name, key) =>
          <ListGroupItem key={key}>
            {name.name}
          </ListGroupItem>
        )}
      </ListGroup>
    )
  }
}

Top.propTypes = {
  placeDetail: PropTypes.array
}

const mapStateToProps = state => {
  return {
    placeDetail: state.top.placeDetail
  }
}

export default connect(
  mapStateToProps,
  {fetchPlaceDetailRequest}
)(Top)
