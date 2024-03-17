const Hero = () => {
  return (
    <div>
      <div
        className="hero h-[550px] mt-7  rounded-3xl "
        style={{
          backgroundImage: "url(https://i.ibb.co/rMtT5sx/chefs2-Copy.jpg)",
        }}
      >
        <div className="hero-content text-center text-neutral-content ">
          <div className="w-full lg:w-[680px]">
            <h1 className="mb-5 text-xl lg:text-5xl font-bold">
              Hello there, Welcome To Our Cafe.
            </h1>
            <p className="mb-5">
              Indulge in our cafes charm, where each cup holds stories and
              every sip sparks moments of warmth and connection.
            </p>
            <div className="space-x-9">
              <button className="btn bg-[#0BE58A] rounded-3xl text-white border-none w-[181px] ">
                Explore Now
              </button>
              <button className="btn btn-outline rounded-3xl text-white w-[181px] ">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {};

export default Hero;
