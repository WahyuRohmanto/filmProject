import { FaBell } from "react-icons/fa";
import { Li, Nav, Ul, Dropdown } from "./navbar.styled";

function Navbar() {
  return (
    <div>
      <Nav>
        <Ul>
          <ul>
            <Li>
            
              <li>
                <a class="active" href="#home">
                  Home
                </a>
              </li>
             
            </Li>
            <Li>
              <li>
                <a href="#news">Genre</a>
              </li>
            </Li>
            <Li>
              <li>
                <a href="#contact">Country</a>
              </li>
            </Li>
            <Li>
              <li>
                <input type="text" placeholder="Search.." />
              </li>
            </Li>
            <Li>
              <li>
                <a href="#about">Movie</a>
              </li>
            </Li>
            <Li>
              <li>
                <a href="#about">Series</a>
              </li>
            </Li>
            <Li>
              <li>
                <a href="#about">Animation</a>
              </li>
            </Li>
            <Li>
              <li>
                <Li>
                  <li>
                    <a href="#about">
                      Login/SignUp <FaBell />
                    </a>
                  </li>
                </Li>
              </li>
            </Li>
          </ul>
        </Ul>
      </Nav>
    </div>
  );
}

export default Navbar;
