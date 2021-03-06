import React from 'react';
import { NavbarBrand, Navbar, Container, Row, Button } from "reactstrap";

const UserComponent = (props) => {

  return (
    <>
      <Navbar className="navbar-dark bg-success" expand="lg">
        <Container>
          <NavbarBrand style={{ textTransform: 'none' }} href="">
            WELCOME! {props.user_id}
          </NavbarBrand>
          <Row>
            <Button className="btn-1 ml-1" color="neutral" onClick={props.signOut}>로그아웃</Button>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default UserComponent;