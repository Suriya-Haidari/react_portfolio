import { useTranslation } from "react-i18next";

export const GetSkillData = () => {
  const { t } = useTranslation("skill");

  return [
    {
      id: 2,
      className: "path path-1",
      className2: "progress-bar",
      text1: "100 %",
      text2: t("skill.HTML"),
      tx1Class: "precentage",
      cx: "100",
      cy: "100",
      r: "70",
    },
    {
      id: 3,
      className: "path path-2",
      className2: "progress-bar",
      text1: "100 %",
      text2: t("skill.CSS"),
      tx1Class: "precentage",
      cx: "100",
      cy: "100",
      r: "70",
    },
    {
      id: 5,
      className: "path path-3",
      className2: "progress-bar",
      text1: "100 %",
      text2: t("skill.Bootstrap"),
      tx1Class: "precentage",
      cx: "100",
      cy: "100",
      r: "70",
    },
    {
      id: 4,
      className: "path path-4",
      className2: "progress-bar",
      text1: "60 %",
      text2: t("skill.JavaScript"),
      tx1Class: "precentage",
      tx2Class: "text",
      cx: "100",
      cy: "100",
      r: "70",
    },
    {
      id: 6,
      className: "path path-5",
      className2: "progress-bar",
      text1: "70 %",
      tx1Class: "precentage",
      tx2Class: "text",
      text2: t("skill.React"),
      cx: "100",
      cy: "100",
      r: "70",
    },
  ];
};
