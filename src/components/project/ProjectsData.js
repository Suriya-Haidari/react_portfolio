import p3 from "../../assets/carstore.png";
import p2 from "../../assets/guessnumber.png";
import p1 from "../../assets/expensessitem.png";
import p4 from "../../assets/rockpaper.png";
import p5 from "../../assets/simon.png";
import { useTranslation } from "react-i18next";
export function GetProjectData() {
  const { t } = useTranslation("project");

  return [
    {
      id: 1,
      category: "React",
      image: p1,
      title: t("project.title1"),
      text: t("project.text1"),
      github: "https://github.com/Suriya-Haidari/expense-item",
    },
    {
      id: 2,
      category: "Java Script",
      image: p2,
      title: t("project.title2"),
      text: t("project.text2"),
      github: "https://github.com/Suriya-Haidari/Guess-Number",
    },
    {
      id: 3,
      category: "Raect",
      image: p3,
      title: t("project.title3"),
      text: t("project.text3"),
      github: "https://github.com/Suriya-Haidari/Car-Store-Project",
    },
    {
      id: 4,
      category: "Java Script",
      image: p4,
      title: t("project.title4"),
      text: t("project.text4"),
      github: "https://github.com/Suriya-Haidari/rock-paper-scissorsgame",
    },
    {
      id: 5,
      category: "HTML",
      image: p5,
      title: t("project.title5"),
      text: t("project.text5"),
      github: "https://github.com/Suriya-Haidari/SimonGame",
    },
  ];
}
