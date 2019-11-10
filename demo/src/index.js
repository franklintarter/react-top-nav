import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from "react-dom";

import { createTopNav } from "../../src";

const { MenuIcon, Nav, MobileMenu, useMobileMenu } = createTopNav({
  mobileMenu: { backgroundColor: "#2fedf1" },
  menuIcon: { size: 48, barThickness: 2, barColor: "#0f0f0f" },
  height: 64
});

const Spacer = () => {
  return (
    <p style={{ fontSize: "24px", padding: "2rem" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  );
};

const Demo = () => {
  const { isOpen, isScrolled, close, open, toggle } = useMobileMenu();
  console.log(isOpen);
  return (
    <div style={{ paddingTop: "64px" }}>
      <Nav isScrolled={isScrolled} style={{ backgroundColor: "#ddd" }}>
        <MenuIcon onClick={toggle} isOpen={isOpen} style={{ padding: "8px" }} />
        <MobileMenu isOpen={isOpen}>
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </MobileMenu>
      </Nav>
      <h1>react-top-nav Demo</h1>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
    </div>
  );
};

// eslint-disable-next-line no-undef
render(<Demo />, document.querySelector("#demo"));
