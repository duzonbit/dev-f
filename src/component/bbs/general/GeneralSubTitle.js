import React from 'react'
import {
  NavbarBrand,
  Navbar,
  Container,
} from "reactstrap";

const GeneralSubTitle = ({subtitle}) => {
  return (
    <section>
          <Navbar className="navbar-dark bg-primary" expand="lg">
            <Container>
              <NavbarBrand href="">
                {subtitle}
              </NavbarBrand>
            </Container>
          </Navbar>
    </section>
  )
}

export default GeneralSubTitle
