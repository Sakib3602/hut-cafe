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
          <div className="w-[760px]">
            <h1 className="mb-5 text-5xl font-bold">
              Hello there, Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="space-x-9">
              <button className="btn bg-[#0BE58A] rounded-3xl text-white border-none w-[181px] ">
                Get Started
              </button>
              <button className="btn btn-outline rounded-3xl text-white w-[181px] ">
                Default
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
