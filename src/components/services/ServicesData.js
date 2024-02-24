import { useTranslation } from "react-i18next";

export default function GetServicesData() {
  const { t } = useTranslation("services");
  return [
    {
      id: 1,
      service: "service",

      cert_img: "cert-img",
      title: t("Services.title"),
      service__list: "",
      title2: "2011 - 2023",
      text: t("Services.text"),
    },
    {
      id: 2,
      service: "service",
      cert_img: "cert-img",
      title: t("Services.title2"),
      title2: "2022 - 2024",
      text: t("Services.text2"),
    },
    {
      id: 3,
      service: "service",
      cert_img: "cert-img",
      title: t("Services.title3"),
      title2: "2021 - 2022",
      text: t("Services.text3"),
    },
  ];
}
