import React from "react";
import { Image } from "./Image";
import avatar from "../img/avatar.jpg";

export const Avatar = () => {
  return (
    <button className="avatar">
      <Image src={avatar} alt="Avatar" />
    </button>
  );
};
