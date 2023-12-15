import Button from "./components/button";

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
      <h1 className=" text-7xl font-montserrat self-center">Travel App</h1>
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
