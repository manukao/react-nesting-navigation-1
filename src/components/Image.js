import React from "react";

export function Image({ src, alt }) {
  return <img className="round-image" src={src} alt={alt} />;
}
