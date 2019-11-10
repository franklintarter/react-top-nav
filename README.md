# react-top-nav

Top navigation component for React

## Install

```shell
yarn add react-top-nav
```

## Use

Use in a layout component.

```js
import React from "react";
import { createTopNav } from "react-top-nav";

const { MenuIcon, Nav, MobileMenu, useMobileMenu } = createTopNav({
  mobileMenu: { backgroundColor: "#2fedf1" },
  menuIcon: { size: 48, barThickness: 2, barColor: "#0f0f0f" },
  height: 64
});


export default ({ children }) => {
  const { isOpen, isScrolled, close, open, toggle } = useMobileMenu();
  return (
    <div>
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
      <main>{children}</main>
    </div>
  );
};

```

### Contribute

Suggestions, issues, PRs welcome!
