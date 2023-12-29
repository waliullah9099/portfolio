const Hero = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: "url(https://i.ibb.co/r6jnSnP/banner.png)",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="flex gap-20">
        <div className="hero-content text- text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">I'm MD Waliullah</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-outline border-white text-white">
              Download Resume
            </button>
          </div>
        </div>
        <div>
          <img
            className=" h-[580px]"
            src="https://i.ibb.co/sJz1XBH/Man-PNG-Free-Download.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
