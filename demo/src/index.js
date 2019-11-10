import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from "react-dom";

import { createTopNav } from "../../src";
import "./styles.css";

const { MenuIcon, Nav, MobileMenu, useMobileMenu } = createTopNav({
  mobileMenu: { backgroundColor: "#2fedf1" },
  menuIcon: { size: 64, barThickness: 2, barColor: "#0f0f0f" },
  height: 64
});

const Spacer = () => {
  return (
    <p style={{ fontSize: "24px" }}>
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
  return (
    <div
      style={{
        paddingTop: "64px"
      }}
    >
      <Nav
        isScrolled={isScrolled}
        isOpen={isOpen}
        style={{
          paddingLeft: "16px",
          paddingRight: "16px",
          backgroundColor: "#ddd"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <MenuIcon onClick={toggle} isOpen={isOpen} />
          <MenuIcon onClick={toggle} isOpen={isOpen} />
        </div>
        <MobileMenu isOpen={isOpen}>
          <ul>
            <li>
              <button type="button" onClick={close}>
                Item
              </button>
            </li>
            <li>
              <button type="button" onClick={close}>
                Item
              </button>
            </li>
            <li>
              <button type="button" onClick={close}>
                Item
              </button>
            </li>
          </ul>
        </MobileMenu>
      </Nav>
      <main style={{ padding: "16px" }}>
        <h1>Demo</h1>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
      </main>
    </div>
  );
};

// eslint-disable-next-line no-undef
render(<Demo />, document.querySelector("#demo"));
