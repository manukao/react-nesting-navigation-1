import React from "react";
import { Image } from "./Image";
import logo from "../img/logo.jpg";

export const Logo = () => {
  return (
    <a href="#home">
      <Image src={logo} alt="Logo" />
    </a>
  );
};
