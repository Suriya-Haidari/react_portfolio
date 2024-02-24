import "./header.css";
import image from "../../assets/my-img.jpg";
import HeaderSocials from "./HeaderSocials";
import { BsArrowDown } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation("header");
  return (
    <section>
      <header>
        <p id="Home"></p>
        <div className="container header__container">
          <div className="header__text">
            <h5 className="head-5">{t("header.head")}</h5>
            <h1 className="header-name">Suriya Haidari</h1>
            <p className="bio">{t("header.data")}</p>

            {/* Got the socials dunamically from HeaderSocials component */}
            <HeaderSocials />
          </div>

          <a className="h-bth btn btn-primary" href="#contact">
            {t("header.talk")}
          </a>
        </div>

        {/* I used React icons to get this website iconss like <BsArrowDown />*/}
        <a href="#footer">
          <BsArrowDown className="scroll__down-icon" />
        </a>
        <div className="img">
          <img src={image} alt="MyPicture" className="myImage" />
        </div>
      </header>
    </section>
  );
}
