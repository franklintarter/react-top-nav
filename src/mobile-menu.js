import React from "react";
import styled from "styled-components";

export const createMobileMenu = ({ height = 48, backgroundColor = "#fff" }) => {
  const Container = styled.div`
    position: absolute;
    background-color: ${backgroundColor};
    top: ${height}px;
    left: 0;
    transition: height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
    height: ${({ isOpen }) => (isOpen ? `calc(100vh - ${height}px)` : "0")};
    z-index: 100;
    overflow: scroll;
    overflow-y: auto;
  `;

  return ({ isOpen, children }) => {
    return <Container isOpen={isOpen}>{children}</Container>;
  };
};
