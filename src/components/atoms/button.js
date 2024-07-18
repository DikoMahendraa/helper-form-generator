import React from "react";

export default function Button({
  styles,
  isDisabled = false,
  onclick,
  text,
  image,
  icon,
}) {
  const buttonStyles = [
    styles,
    "px-4 py-2 hover:bg-cyan-600/50 flex text-sm items-center gap-2  border border-cyan-500 text-white rounded",
  ].join(" ");
  return (
    <button disabled={isDisabled} onClick={onclick} className={buttonStyles}>
      {icon && icon}
      {image && <img src={image} alt="zod logo" width={20} height={20} />}
      {text}
    </button>
  );
}
