import React from "react";
import Button from "../components/button";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/images/food-bowl.jpg")`,
        backgroundSize: "cover",
      }}
      className="h-screen w-full px-8 py-11 flex flex-col justify-between"
    >
      <Image
        src="/icons/chef-hat-icon.svg"
        alt="chef hat icon"
        height={164}
        width={164}
        className="invert self-center"
      ></Image>

      <div className="text-white font-montserrat flex flex-col gap-6">
        <p className="text-2xl">
          Find your <br />
          <span className="text-5xl font-medium"> Next Meal</span>
        </p>
        <Link href={"/"}>
          <Button text="Explore" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
