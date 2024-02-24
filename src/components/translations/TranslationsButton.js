import i18next from "i18next";

export default function TranslationsButton() {
  const handleChangeLanguage = (language) => {
    i18next.changeLanguage(language);
  };

  return (
    <select
      className="form-select"
      onChange={(e) => handleChangeLanguage(e.target.value)}
    >
      <option value="en">English</option>
      <option value="de">Almanian</option>
      <option value="fr">French</option>
      <option value="tr">Turkish</option>
      <option value="zh">Chinies</option>
    </select>
  );
}
