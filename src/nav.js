import React from "react";
import styled from "styled-components";

export const createNav = ({ height = 48 }) => {
  const NavWrapper = styled.nav`
    position: fixed;
    transform: ${({ isScrolled, isOpen }) =>
      isScrolled && !isOpen ? `translateY(-${height}px)` : `translateY(0)`};
    z-index: 100;
    width: 100%;
    box-sizing: border-box;
    top: 0;
    transition: height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1), transform 400ms,
      background-color 400ms, opacity 300ms;
    height: ${({ isOpen }) => (isOpen ? "100%" : `${height}px`)};
  `;

  return ({ children, isScrolled, isOpen, ...rest }) => {
    return (
      <Nav
        {...rest}
        isScrolled={isScrolled}
        NavWrapper={NavWrapper}
        isOpen={isOpen}
      >
        {children}
      </Nav>
    );
  };
};

const Nav = ({ NavWrapper, children, isScrolled, isOpen, ...rest }) => {
  return (
    <NavWrapper isOpen={isOpen} isScrolled={isScrolled} {...rest}>
      {children}
    </NavWrapper>
  );
};

export default Nav;
