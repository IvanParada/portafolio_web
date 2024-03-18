import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark ">
      <Link className="navbar-brand" to="/" />

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link mx-2" to="/">
            Item-1
          </NavLink>

          <NavLink className="nav-item nav-link mx-2" to="/">
            Item-2
          </NavLink>

          <NavLink className="nav-item nav-link mx-2" to="/">
            Item-3
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
