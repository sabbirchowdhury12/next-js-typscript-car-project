"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Find , book and rent a cart</h1>
        <p className="hero__subtitle">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          debitis commodi! Deleniti at, cum qui repellat quia nesciunt, iste
        </p>

        <CustomButton
          title="Explore More"
          styles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" fill className="object-contain" alt={""} />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
