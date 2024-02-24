import { useTranslation } from "react-i18next";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export function GetFooterData() {
  const { t } = useTranslation("footer");

  return [
    {
      href: "#",
      name: t("footer.Home"),
    },
    {
      href: "#about",
      name: t("footer.About"),
    },
    {
      href: "#skill",
      name: t("footer.Skills"),
    },
    {
      href: "#projects",
      name: t("footer.Portfolio"),
    },
    {
      href: "#contact",
      name: t("footer.Contact"),
    },
  ];
}

export function GetFooterLinksData() {
  return [
    {
      name: <AiOutlineInstagram />,
      href: "https://instagram.com/https://www.instagram.com/suriyahaidari?igsh=ajk2ZGoxaWhudDQw",
    },
    {
      name: <AiOutlineTwitter />,
      href: "https://twitter.com/Suriya_Haidari",
    },
    { name: <AiFillGithub />, href: "https://github.com/Suriya-Haidari" },
  ];
}
