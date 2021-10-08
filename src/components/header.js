import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { selectMenuItems } from "../features/menu/menuSlice";
import { useSelector } from "react-redux";

function Header() {
  const [menuStatus, setMenuStatus] = useState(false);
  const cars = useSelector(selectCars);
  const menuItems = useSelector(selectMenuItems);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg"></img>
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <CustomMenu
          onClick={() => {
            setMenuStatus(true);
          }}
        />
      </RightMenu>
      <BurgerNav show={menuStatus}>
        <CloseWrapper>
          <CloseButton
            onClick={() => {
              setMenuStatus(false);
            }}
          />
        </CloseWrapper>
        {menuItems &&
          menuItems.map((Item, index) => (
            <li>
              <a key={index} href="#">
                {Item}
              </a>
            </li>
          ))}
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    padding: 0 30px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    margin-right: 30px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s;
  li {
    padding: 15px;
    a {
      font-weight: 550;
    }
  }
`;

const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  padding: 15px;
  display: flex;
  justify-content: flex-end;
`;
