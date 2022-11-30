import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useOnClickOutside from "use-onclickoutside";
import Logo from "../../assets/icons/logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { RootState } from "store";
import { logoutUser } from "store/reducers/user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


type HeaderType = {
  isErrorPage?: Boolean;
};

const Header = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { name, token, idRol } = user?.user || {};

  const { cartItems } = useSelector((state: RootState) => state.cart);
  const arrayPaths = ["/"];

  const [onTop, setOnTop] = useState(
    !arrayPaths.includes(router.pathname) || isErrorPage ? false : true
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);
  const handleLogout = () => {
    localStorage.removeItem("tokenUser");
    // deelte cookie
    document.cookie =
      "tokenUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    dispatch(logoutUser());
    router.push("/login");
    // toast.success(res.data.message);
  };

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  const handleAdminNavigate = () => {
    try {
    if (idRol != 1) {
      toast.error('no tienes permiso con tu rol')
     
    }
    else {
      toast.success('Accediendo a entorno privado')
      setTimeout(() => {
        router.push('/admin')
      }, 3000);
    }
  } catch {
    toast.error('se produjo un error, contacta al administrador')
  }
    
  }

  const handlePlatosNavigate = () => { 
    try {
      if (!token) {
        toast.error('debes iniciar sesion primero')
        setTimeout(() => {
          router.push("/login")
        }, 3000);
      } else {
        router.push('/platos')
      }
    } catch {
      toast.error('se produjo un error, contacta al administrador')
    }
  }

  return (
    <header className={`site-header ${!onTop ? "site-header--fixed" : ""}`}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="container">
        <Link href="/">
          <a>
            <h1 className="site-logo">
              <img src="https://i.imgur.com/1lQd8jB.png" alt="logo" style={{width: '150px', padding: '0px'}} />
              Siglo XXI
            </h1>
          </a>
        </Link>
        <nav
          ref={navRef}
          className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
        >
          

            <a onClick={handlePlatosNavigate} style={{cursor: 'pointer'}}>Platos</a>
          
          
            <a onClick={handleAdminNavigate} style={{cursor: 'pointer'}}>Admin</a>

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
              <Link href="/cart">
                <button className="btn-cart">
                  <i className="icon-cart"></i>
                  {cartItems.length > 0 && (
                    <span className="btn-cart__count">{cartItems.length}</span>
                  )}
                </button>
              </Link>
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
              <button
                onClick={handleLogout}
                className="site-header__btn-avatar"
              >
                Logout
              </button>
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
  );
};

export default Header;
