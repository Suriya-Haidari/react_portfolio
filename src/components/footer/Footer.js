import { useTranslation } from "react-i18next";
import TranslationsButton from "../translations/TranslationsButton";
import "./footer.css";
import { GetFooterData, GetFooterLinksData } from "./FooterData";

export default function Footer() {
  const FooterData = GetFooterData();
  const FooterLinksData = GetFooterLinksData();
  const year = new Date().getFullYear();
  const { t } = useTranslation("footer");
  return (
    <footer>
      <div className="footer__container">
        <p className="parag">{t("footer.text")}</p>
        <TranslationsButton />

        <div className="footer__content">
          <ul className="permalinks">
            {FooterData.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>

          <div className="footer__social">
            {FooterLinksData.map((item, index) => (
              <a key={index} href={item.href}>
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__copyright">
          <small>
            &copy; {year} Suriya Haidari {t("footer.All")}{" "}
          </small>
        </div>
      </div>
    </footer>
  );
}
