


const Banner = () => {


    return (
        <div>
        <div
        className="relative h-[60vh] md:h-[60vh] lg:h-[80vh]" 
        style={{
            backgroundImage: `url('/banner.jpg')`, // Reference the image using the public folder path
            backgroundSize: 'cover', // Optional: Adjust background size as needed
            backgroundPosition: 'center'
        }}
      >
        <div
          className="absolute inset-0 bg-black opacity-70" 
        ></div>
        <div className="absolute top-16 md:top-24 lg:top-32 left-10 md:left-24 lg:left-96 z-10 space-y-3">
          <h2 className="text-2xl lg:text-6xl font-bold text-gray-200">
            
           Let's Watch movies <br/>
            together
          </h2>
          <p className="text-white">
            Planning a Wedding, Proposal or Event in our busy city is not so
            easy,
            <br /> and its takes skills and time to make it all look easy going{" "}
          </p>
          <button className=" bg-white rounded-3xl px-4 py-2">
            Online request
          </button>
        </div>
      </div>

        </div>
    );
};

export default Banner;