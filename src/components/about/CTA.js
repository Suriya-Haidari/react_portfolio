import { useTranslation } from "react-i18next";
import CV from "../../assets/Resume.docx";
export default function CTA() {
  const { t } = useTranslation("about");
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        {t("about.download")}
      </a>
    </div>
  );
}
