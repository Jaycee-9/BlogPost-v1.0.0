import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import RecentActorsIcon from "@mui/icons-material/RecentActors";

function Header() {
  const { user } = useContext(DataContext);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        <HomeIcon />
      </Link>
      <Link to="/contact" className="nav-link">
        <RecentActorsIcon />
      </Link>

      <Link to="/login" className="nav-link">
        <LogoutIcon />
      </Link>
      <span className="nav-link">
        <span style={{ fontWeight: "bolder", fontSize: "20px" }}>
          {user.name}
        </span>
      </span>
    </nav>
  );
}

export default Header;
