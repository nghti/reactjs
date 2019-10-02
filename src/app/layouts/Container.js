import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { logoutRequest } from "../../features/auth/store/actions";

class Top extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.toggle = this.toggle.bind(this)
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
    // const {Footer} = this.props
    // console.log('Footer', Footer)

    return (
      <Fragment>
        <Navbar color="light" light expand="md">
          <Link to="/" className="navbar-brand">Logo</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/about' className="nav-link">About</Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <p onClick={this.handleClick} className="nav-link c-pointer">LogOut</p>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {this.props.children}
      </Fragment>
    )
  }
}

export default connect(
  null,
  {logoutRequest}
)(Top)
