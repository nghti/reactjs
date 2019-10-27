import React from "react";
import { bindActionCreators } from 'redux'
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
  }

  componentDidMount() {
    const {fetchPlaceDetailRequest} = this.props
    fetchPlaceDetailRequest()
  }

  handleClick() {
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
        <div>
          <h2 onClick={this.handleClick}>title</h2>
          {this.state.isOpen &&
            <p>noi dung cua content</p>
          }
        </div>
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
         fetchPlaceDetailRequest: fetchPlaceDetailRequest
         }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Top);

// export default connect(
//   mapStateToProps,
//   {fetchPlaceDetailRequest}
// )(Top)
