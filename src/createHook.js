/* eslint-disable no-undef */
import { useState } from "react";
import useEvent from "./useEvent";

let initialYOffset = 0;

if (typeof window !== `undefined`) {
  initialYOffset = window.pageYOffset;
}

export default ({ height = 48 }) => () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  const close = () => {
    setOpen(false);
  };

  const open = () => {
    setOpen(true);
  };

  const [isScrolled, setScrolled] = useState(false);

  const [lastScroll, setLastScroll] = useState(initialYOffset);
  const handler = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScroll) {
      if (lastScroll > height) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    } else {
      setScrolled(false);
    }
    setLastScroll(st <= 0 ? 0 : st);
  };
  useEvent("scroll", handler);

  return {
    isOpen,
    isScrolled,
    close,
    open,
    toggle
  };
};
