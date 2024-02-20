import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="border-b border-slate-700 flex items-center justify-between px-4 py-4 sticky top-0 bg-black z-10">
        <div>
          <h1 className="text-xl space-x-4 font-bold tracking-widest text-white">
            WALIULLAH
          </h1>
        </div>
        <nav className="flex space-x-4">
          <Link className="menuItem" to="/favorites">
            Home
          </Link>
          <Link className="menuItem" to="/resources">
            About
          </Link>
          {/* <Link className="menuItem" to="/resources">
            Service
          </Link>
          <Link className="menuItem" to="/resources">
            Contact
          </Link> */}
          <Link className="menuItem" to="/latest-ai-news">
            Latest AI News
          </Link>
          <Link className="menuItem" to="dashboard">
            Dashboard
          </Link>
          <button className="inline-block px-4 py-2 rounded-md bg-slate-700 text-white hover:bg-blue-700">
            Subscribe
          </button>
        </nav>
        {/* <motion.div
          className="w-full fixed top-10 bg-cyan-50"
          style={{ height: "1px", scaleX: scrollYProgress }}
        ></motion.div> */}
      </header>
    </div>
  );
};

export default Header;
