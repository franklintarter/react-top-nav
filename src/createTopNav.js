import { createMenuIcon } from "./menu-icon";
import { createNav } from "./nav";
import { createMobileMenu } from "./mobile-menu";
import createHook from "./createHook";

export default ({ menuIcon = {}, height = 48, mobileMenu = {} } = {}) => {
  return {
    MenuIcon: createMenuIcon(menuIcon),
    Nav: createNav({ height }),
    MobileMenu: createMobileMenu({
      height,
      ...mobileMenu
    }),
    useMobileMenu: createHook({ height })
  };
};
