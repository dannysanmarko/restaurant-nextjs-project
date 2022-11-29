import Logo from "assets/icons/logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";

type HeaderType = {
    isErrorPage?: Boolean;
  };
const AdminHeader = ({ isErrorPage }: HeaderType) => {
    const navRef = useRef(null);
    const searchRef = useRef(null);
    const router = useRouter();
    const arrayPaths = ["/"];

    const { user } = useSelector((state: RootState) => state.user);
    const { name, token } = user?.user || {};
    const [onTop, setOnTop] = useState(
        !arrayPaths.includes(router.pathname) || isErrorPage ? false : true
      );
      const [menuOpen, setMenuOpen] = useState(false);
      const [searchOpen, setSearchOpen] = useState(false);
    const headerClass = () => {
        if (window.pageYOffset === 0) {
          setOnTop(true);
        } else {
          setOnTop(false);
        }
      };
    
      useEffect(() => {
        if (!arrayPaths.includes(router.pathname) || isErrorPage) {
          return;
        }
    
        headerClass();
        window.onscroll = function () {
          headerClass();
        };
      }, []);
    return (
        <header className={`site-header ${!onTop ? "site-header--fixed" : ""}`}>
        <div className="container">
          <Link href="/">
            <a>
              <h1 className="site-logo">
                <Logo />
                Siglo XXI
              </h1>
            </a>
          </Link>
          <nav
            ref={navRef}
            className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
          >
            <Link href="/admin/table">
              <a>Tables</a>
            </Link>

  
            <button className="site-nav__btn">
              <p>Account</p>
            </button>
          </nav>
  
          <div className="site-header__actions">
            <button
              ref={searchRef}
              className={`search-form-wrapper ${
                searchOpen ? "search-form--active" : ""
              }`}
            >
              <form className={`search-form`}>
                <i
                  className="icon-cancel"
                  onClick={() => setSearchOpen(!searchOpen)}
                ></i>
                <input
                  type="text"
                  name="search"
                  placeholder="Enter the product you are looking for"
                />
              </form>
              <i
                onClick={() => setSearchOpen(!searchOpen)}
                className="icon-search"
              ></i>
            </button>
  
            {token ? (
              <>
                
                <Link href={"/account"}>
                  <div style={{ padding: "4px", cursor: "pointer" }}>
                    <i className="icon-avatar"></i>
                  </div>
                </Link>
  
                <h1
                  style={{
                    backgroundColor: "white",
                    padding: "4px",
                    borderRadius: "4px",
                  }}
                >
                  {name}
                </h1>
              
              </>
            ) : (
              <Link href="/login">
                <button className="site-header__login">
                  <h1>Login</h1>
                </button>
              </Link>
            )}
  
            <button
              onClick={() => setMenuOpen(true)}
              className="site-header__btn-menu"
            >
              <i className="btn-hamburger">
                <span></span>
              </i>
            </button>
          </div>
        </div>
      </header>
    )
};

export default AdminHeader;
