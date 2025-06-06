

const Main = () => {
 

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src="public/blog.jpg"
            alt="Background"
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
        <div className="relative  text-center  items-center pb-28 pt-16 md:pb-32 md:pt-44">
          <h1 className="text-white text-4xl md:text-6xl font-mono">
            One blog. Endless journeys.
          </h1>
          <p className="text-white pt-5">Serving You the best daily Updated Blogs that helps you to explore more about the world and Technologies</p>
          <button className="my-5 py-3 px-7 cursor-pointer text-white bg-gradient-to-r via-pink-800 to-purple-800 rounded-md hover:via-purple-800 hover:to-pink-800 transition-all duration-500 hover:rounded-3xl">Learn More</button>
        </div>
      </div>
    </>
  );
};

export default Main;
