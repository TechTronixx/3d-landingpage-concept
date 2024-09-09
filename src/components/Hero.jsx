const Hero = () => {
  return (
    <>
      <div className="absolute flex text-center flex-col items-center justify-center top-[7.6rem] font-[500] left-1/2 -translate-x-1/2 tracking-tighter text-8xl">
        <h1 className="masked">macbook pro.</h1>
        <span className="text-[1.1rem] font-normal tracking-tight text-center text-white/80">
          oh so pro!
        </span>
        <p className="w-3/4 py-1 text-[1.2rem] !font-light tracking-wide text-pretty text-center text-white/70">
          Macbook M4 Pro is the state of the art laptop for developers designed
          to make you more productive.
        </p>
      </div>
    </>
  );
};

export default Hero;
