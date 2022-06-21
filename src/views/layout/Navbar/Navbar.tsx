import { InputSearch } from "../../components/components";
import { Fragment, useRef, useState } from "react";
import { SearchCardButtom } from "../../components/search_card_buttom";
import LabelButton from "../../components/label_button";
import { Theme } from "../../../core/utilis";
import SideBar from "../Sidebar/Sidebar";
import { Link, useLocation } from "react-router-dom";
import { BagHappy, HamburgerMenu, Keyfoor, Login } from "../../../assets";
import { useEffect } from "react";

function Navbar() {
  const [isShowSearchCard, setisShowSearchCard] = useState(false);
  const [isBlur, setBlur] = useState(false);
  const [isMouseLeave, setMouseLeave] = useState(false);

  useEffect(() => {
    if (isBlur == true && isMouseLeave == true) {
      setisShowSearchCard(false);
      setBlur(false);
      setMouseLeave(false);
    }
  }, [isBlur, isMouseLeave]);

  const location = useLocation().pathname;
  return (
    <header className="header">
      <nav className="desktop-Nav mx-auto">
        <div className="logo-Conteiner d-flex flex-row align-items-center ">
          <span className="logo">KEYFOOR</span>
          <div
            className="parent-search-input"
            onMouseLeave={() => setMouseLeave(true)}
            onBlur={() => setBlur(true)}
          >
            <InputSearch
              FocusInput={() => setisShowSearchCard(true)}
              isShow={isShowSearchCard}
            />
            {isShowSearchCard ? <SearchCardButtom /> : null}
          </div>
        </div>
        <div className="ms-5">
          <Link to="/login" className="text-decoration-none">
            <LabelButton
              type={Theme.dark}
              minHeight="50px"
              minWidth="140px"
              fontSize="14px"
              borderRadius="10px"
              className="px-3 mx-5 logout-Button"
              backgroundColor="#FFFFFF"
              color="#787878"
              border="1px solid #F3F3F3"
              children={
                <div className="w-100">
                  <img src={Login} alt="login" />
                  <span className="mx-1">ورود</span>
                </div>
              }
            />
          </Link>
          <img src={BagHappy} alt="bagHappy" />
        </div>
      </nav>
      <nav className="mobile-Nav mx-auto">
        <div className="w-100 d-flex flex-row align-items-center justify-content-between logo-Container-Mobile">
          <img src={HamburgerMenu} alt="hamburgerMenu" />
          <span>KEYFOOR</span>
          <img src={BagHappy} alt="bagHappy" />
        </div>
        {location === "/" ? (
          <div className="w-100 d-flex flex-row align-items-center justify-content-between mx-auto input-Container-Mobile">
            <div
              className={
                isShowSearchCard
                  ? "parent-search-input w-100 d-flex flex-column align-items-center"
                  : "parent-search-input"
              }
            >
              <InputSearch
                FocusInput={() => setisShowSearchCard(!isShowSearchCard)}
                isShow={isShowSearchCard}
              />
              {isShowSearchCard ? <SearchCardButtom /> : null}
            </div>
            <Link
              to="/login"
              className={isShowSearchCard ? "d-none" : "text-decoration-none"}
            >
              <LabelButton
                type={Theme.dark}
                minHeight="50px"
                minWidth="100px"
                fontSize="14px"
                borderRadius="10px"
                className=""
                backgroundColor="#FFFFFF"
                color="#787878"
                border=""
                children={
                  <div className="w-100">
                    <img src={Login} alt="login" />
                    <span className="mx-1">ورود</span>
                  </div>
                }
              />
            </Link>
          </div>
        ) : null}
      </nav>
    </header>
  );
}

export default Navbar;
