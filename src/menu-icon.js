import React from "react";
import styled from "styled-components";

export const createMenuIcon = ({
  barColor = "#0a0a0a",
  barThickness = 1,
  rounded = false,
  size = 48
} = {}) => {
  const scale = size / 16;

  const containerPosition = scale * 3;
  const innerContainerSize = size * 0.625;
  const barwidth = size / 3 + 1;
  const leftOffset = scale * 2 + 1;
  const yOffset = leftOffset * 2;

  const negativeLeftMargin = scale * 5.25;
  const negativeRightMargin = scale * 5.15;
  // const negativeMargin = 0;

  const Container = styled.div`
    /* display: block; */
    margin-left: -${negativeLeftMargin}px;
    margin-right: -${negativeRightMargin}px;
    height: ${size}px;
    width: ${size}px;
    position: relative;
  `;

  const Label = styled.label`
    display: block;
    position: relative;
    &:hover {
      cursor: pointer;
    }
  `;
  const offset = -((barThickness - 1) / 2) + (scale - 3) * 1.35;

  const closedContainerTransition =
    "transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96)";
  const openContainerTransition =
    "transform 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s";

  const TopContainer = styled.span`
    height: ${innerContainerSize}px;
    width: ${innerContainerSize}px;
    display: block;
    position: absolute;
    top: ${containerPosition}px;
    left: ${containerPosition}px;
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "none")};
    transition: ${({ isOpen }) =>
      isOpen ? openContainerTransition : closedContainerTransition};
  `;

  const BottomContainer = styled.span`
    height: ${innerContainerSize}px;
    width: ${innerContainerSize}px;
    display: block;
    position: absolute;
    top: ${containerPosition}px;
    left: ${containerPosition}px;
    transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "none")};
    transition: ${({ isOpen }) =>
      isOpen ? openContainerTransition : closedContainerTransition};
  `;

  const openBarTransition =
    "transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96)";
  const closeBarTransition =
    "transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.1008s";

  const TopBar = styled.span`
    top: ${yOffset}px;
    left: ${leftOffset}px;
    position: absolute;
    background-color: ${barColor};
    width: ${barwidth}px;
    height: ${barThickness}px;
    border-radius: ${rounded ? "500px" : "0"};
    transform: ${({ isOpen }) =>
      isOpen
        ? `translateY(${offset}px) translatex(${offset}px)`
        : `translateY(-${scale}px)`};
    transition: ${({ isOpen }) =>
      isOpen ? openBarTransition : closeBarTransition};
  `;

  const BottomBar = styled.span`
    bottom: ${yOffset}px;
    left: ${leftOffset}px;
    position: absolute;
    background-color: ${barColor};
    width: ${barwidth}px;
    height: ${barThickness}px;
    border-radius: ${rounded ? "500px" : "0"};
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : `translateY(${scale}px)`};
    transition: ${({ isOpen }) =>
      isOpen ? openBarTransition : closeBarTransition};
  `;

  return ({ isOpen, onClick, ...rest }) => {
    return (
      <MenuIcon
        {...rest}
        Container={Container}
        onClick={onClick}
        isOpen={isOpen}
        TopBar={TopBar}
        BottomBar={BottomBar}
        Label={Label}
        TopContainer={TopContainer}
        BottomContainer={BottomContainer}
      />
    );
  };
};

const MenuIcon = ({
  isOpen,
  onClick,
  TopBar,
  BottomBar,
  Label,
  TopContainer,
  BottomContainer,
  Container,
  ...rest
}) => {
  return (
    <Label {...rest} onClick={onClick}>
      <Container>
        <TopContainer isOpen={isOpen}>
          <TopBar isOpen={isOpen} />
        </TopContainer>
        <BottomContainer isOpen={isOpen}>
          <BottomBar isOpen={isOpen} />
        </BottomContainer>
      </Container>
    </Label>
  );
};
