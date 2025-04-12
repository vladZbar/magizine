import { Link } from "react-router-dom";
import cl from "./Header.module.scss";

const Header = () => {
  return (
    <header className={cl.header}>
      <nav className={cl.navbar}>
        <ul className={cl.link_list}>
          <li>
            <Link to="/home">HOME</Link>
          </li>

          <li>
            <Link to="/products">PRODUCTS</Link>
          </li>

          <li>
            <Link to="/users">USERS</Link>
          </li>

          <li>
            <Link to="/register">REGISTER</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
