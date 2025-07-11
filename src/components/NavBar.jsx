import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function NavBar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary w-100">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          My React App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            {currentUser && (
              <Nav.Link as={NavLink} to="/profile">
                Profile
              </Nav.Link>
            )}
          </Nav>
          <Nav className="ms-auto">
            {currentUser ? (
              <NavDropdown
                title={currentUser.email || "User"}
                id="user-dropdown"
                align="end"
              >
                <NavDropdown.Item as={NavLink} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <div className="d-flex gap-2">
                <Button
                  as={NavLink}
                  to="/login"
                  variant="outline-primary"
                  size="sm"
                  className="text-decoration-none"
                >
                  Login
                </Button>
                <Button
                  as={NavLink}
                  to="/register"
                  variant="primary"
                  size="sm"
                  className="text-decoration-none"
                >
                  Register
                </Button>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
