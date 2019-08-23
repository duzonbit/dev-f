import React from 'react';
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
            </Container>
          </Navbar>
      </>
      //   <div>
      //   {/* 로그인 액션 필요
      //           input태그 작성필요 - setstate필요*/}
      //   <h1> 로그인 </h1>
        // <form onSubmit={props.onSubmit}>
        //   <div>
        //     <label> id </label> <input name="user_id" />
        //   </div>
        //   <div>
        //     <label> password </label> <input name="pw" />
        //   </div>
        //   <button type="submit"> 로그인 </button>
        // </form>
      // </div>
    );
};

export default LoginComponent;
