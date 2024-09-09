const navbar = () => {
  return (
    <>
      <nav className="absolute top-0 z-10 flex items-center justify-between w-screen max-w-6xl px-6 py-4 -translate-x-1/2 text-slate-100/90 left-1/2">
        <div className="flex items-center space-x-2 logo">
          {/* Logo */}
          <img src="./appleb.png" alt="logo" className="h-12 w-15" />
          <a href="/" className="text-xl font-[600]">
            Papple
          </a>
        </div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-slate-400/70">
            Home
          </a>
          <a href="#" className="hover:text-slate-400/70">
            Products
          </a>
          <a href="#" className="hover:text-slate-400/70">
            About
          </a>
          <a href="#" className="hover:text-slate-400/70">
            Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default navbar;
