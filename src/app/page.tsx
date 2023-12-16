import React from "react";
import Button from "./components/button";
import Image from "next/image";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/images/landscape.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "90%",
      }}
      className="h-screen w-full px-8 py-11 flex flex-col justify-between"
    >
      <div className="flex gap-4 bg-white p-2 rounded-2xl w-fit items-center ">
        <h1 className=" text-5xl font-montserrat font-bold text-right">
          Travel <br /> App
        </h1>
        <Image
          alt="location pin icon"
          src={"/icons/location-pin.svg"}
          width={70}
          height={70}
        ></Image>
      </div>

      <div className="text-white font-montserrat flex flex-col gap-6">
        <p className="text-2xl">
          Plan your <br />
          <span className="text-5xl font-medium"> Luxurious Vacation</span>
        </p>
        <Button text="Explore"></Button>
      </div>
    </div>
  );
};

export default Home;
