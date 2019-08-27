import React from 'react';
import SignUpPaneContainer from "container/sign/SignUpPaneContainer"

import {
  NavbarBrand,
  Navbar,
  Container,
  Row,
  Col,
  Input,
  Button
} from "reactstrap";

const LoginComponent = (props) => {
    return (
      <>
      <Navbar className="navbar-dark bg-success" expand="lg">
            <Container>
              <NavbarBrand href="">
                LOGIN
              </NavbarBrand>
              <form onSubmit={props.onSubmit}>
                <Row>
                  <Col>
                  <small className="text-uppercase font-weight-bold">ID</small> 
                  <Input style={{height:'35px'}} name="user_id" placeholder="ID" />
                  </Col>
                  <Col>
                  <small className="text-uppercase font-weight-bold">PASSWORD</small> 
                  <Input style={{height:'35px'}} name="pw" placeholder="PASSWORD" />
                  </Col>
                  <Button className="btn-1 ml-1" color="neutral" type="submit">로그인</Button>                  
                </Row>
               
              </form>
              <SignUpPaneContainer className="btn-1 ml-1" color="neutral"/>
            </Container>
          </Navbar>
      </>
    );
};

export default LoginComponent;
