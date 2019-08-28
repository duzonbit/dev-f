import React, { Component } from 'react';
import { NavbarBrand, Navbar, Container } from "reactstrap";

class CommonHeader extends Component {
    render() {
        return (
          <>
          <section>
          <Navbar className="navbar-dark bg-default" expand="lg">
            <Container>
              <NavbarBrand href="/" onClick={e => e.preventDefault()}>
                2JO
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar-info">
                <span className="navbar-toggler-icon" />
              </button>
            </Container>
          </Navbar>
          </section>
          </>
        );
    }
}

export default CommonHeader;
