"use client";
import { ICustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({ title, styles, handleClick }: ICustomButtonProps) => {
  return (
    <button
      disabled={false}
      type="button"
      className={`custom-btn ${styles}`}
      onClick={handleClick}
    >
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
