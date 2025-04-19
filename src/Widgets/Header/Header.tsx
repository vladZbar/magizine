import { Link, useLocation } from "react-router-dom";
import cl from "./Header.module.scss";
import { CiShoppingBasket, CiPhone } from "react-icons/ci";
import { IoLogoReact } from "react-icons/io5";

const Header = () => {
  const location = useLocation();
  const path = location.pathname.slice(1);

  return (
    <header className={cl.header}>
      <nav className={cl.navbar}>
        <div className={cl.logo}>
          <IoLogoReact className={cl.icon} />
        </div>
        <ul className={cl.link_list}>
          <li>
            <Link
              to="/home"
              style={{
                color: path === "home" ? "#fff" : "rgb(253, 153, 119, 0.797)",
                transition: "0.3s",
              }}
            >
              HOME
            </Link>
          </li>

          <li>
            <Link
              to="/products"
              style={{
                color:
                  path === "products" ? "#fff" : "rgb(253, 153, 119, 0.797)",
                transition: "0.3s",
              }}
            >
              PRODUCTS
            </Link>
          </li>

          <li>
            <Link
              to="/users"
              style={{
                color: path === "users" ? "#fff" : "rgb(253, 153, 119, 0.797)",
                transition: "0.3s",
              }}
            >
              USERS
            </Link>
          </li>

          <li>
            <Link
              to="/register"
              style={{
                color:
                  path === "register" ? "#fff" : "rgb(253, 153, 119, 0.797)",
                transition: "0.3s",
              }}
            >
              REGISTER
            </Link>
          </li>
        </ul>

        <div className={cl.icons_wrap}>
          <CiShoppingBasket className={cl.icon} />
          <div className={cl.decor}></div>
          <CiPhone className={cl.icon} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
