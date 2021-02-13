import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import gameService from "../services/game";

export default class NavbarTop extends Component {
  state = { content: "" };

  async componentDidMount() {
    const { data } = await gameService.getAllCategories();
    this.setState({
      content: data,
    });
  }

  handleChange = (e) => {
    const { change } = this.props;
    change(e.currentTarget.value);
  };
  handleSubmit = () => {
    const { submit } = this.props;
    submit();
  };

  render() {
    const { content } = this.state;
    const { value, isDisable, searchBar } = this.props;

    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Free Games</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {content && (
                <>
                  {content.categories.slice(0, 5).map((g) => {
                    return (
                      <Nav.Link key={g} href={"/Category/" + g}>
                        {g}
                      </Nav.Link>
                    );
                  })}

                  <NavDropdown
                    title="All Categories"
                    id="collasible-nav-dropdown"
                  >
                    {content.categories.map((g) => {
                      return (
                        <NavDropdown.Item key={g} href={"/Category/" + g}>
                          {g}
                        </NavDropdown.Item>
                      );
                    })}

                    <NavDropdown.Item href="#action/3.4">
                      wait..
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
            <Form
              inline
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <FormControl
                onChange={this.handleChange}
                type="text"
                value={value || ""}
                placeholder="Search"
                className="mr-sm-2"
                required
                readOnly={searchBar}
              />
              <Button
                onClick={this.handleSubmit}
                variant="outline-primary"
                disabled={isDisable}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
