import { Link } from "react-router-dom";
import logo from "../assets/logo/logo_2.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md flex items-center justify-between px-4 py-4 sticky top-0">
      <div>
        <img className="h-12 w-40" src={logo} alt="" />
      </div>
      <nav className="flex space-x-4">
        <Link className="menuItem" to="/favorites">
          Favorites
        </Link>
        <Link className="menuItem" to="/resources">
          Resources
        </Link>
        <Link className="menuItem" to="/latest-ai-news">
          Latest AI News
        </Link>
        <Link className="menuItem" to="dashboard">
          dashboard
        </Link>
        <button className="menuItem">Join Discord</button>
        <button className="inline-block px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700">
          Subscribe
        </button>
      </nav>
    </header>
  );
};

export default Header;
