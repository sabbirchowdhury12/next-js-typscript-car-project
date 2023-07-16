"use client";
import { ICustomButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

const CustomButton = ({
  title,
  styles,
  fontStyles,
  icon,
  handleClick,
  isDisabled,
}: ICustomButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${styles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${fontStyles}`}>{title}</span>
      {icon && (
        <div className="relative w-6 h-6">
          <Image className="object-contain" alt="icon" src={icon} fill />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
