import { useTranslation } from "react-i18next";
import graduated from "../../assets/graduated.png";
import "./services.css";
import GetServicesData from "./ServicesData";
export default function Services() {
  const ServicesData = GetServicesData();
  const { t } = useTranslation("about");
  return (
    <div className="containerr">
      <h2 className="h2">{t("about.achievements")}</h2>
      <div className="row">
        {ServicesData.map((service) => {
          return (
            <div key={service.id} className={service.service}>
              <>
                <img
                  src={graduated}
                  className={service.cert_img}
                  alt={service.certificate_img}
                />
                <h3>{service.title}</h3>
              </>
              <h2>{service.title2}</h2>
              <p>{service.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
