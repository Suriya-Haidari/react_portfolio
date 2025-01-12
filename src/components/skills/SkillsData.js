import { useTranslation } from "react-i18next";

export const GetSkillData = () => {
  const { t } = useTranslation("skill");

  return [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      text1: "100 %",
      text2: t("skill.JavaScript"),
      tx1Class: "precentage",
      tx2Class: "text",
      cx: "100",
      cy: "100",
      r: "70",
    },
    {
      id: 5,
      className: "path path-5",
      className2: "progress-bar",
      text1: "100 %",
      tx1Class: "precentage",
      tx2Class: "text",
      text2: t("skill.React"),
      cx: "100",
      cy: "100",
      r: "70",
    },
    {
      id: 6,
      className: "path path-3",
      className2: "progress-bar",
      text1: "100 %",
      text2: "Node js",
      tx1Class: "precentage",
      cx: "100",
      cy: "100",
      r: "70",
    }, {
      id: 7,
      className: "path path-3",
      className2: "progress-bar",
      text1: "100 %",
      text2: "Express js",
      tx1Class: "precentage",
      cx: "100",
      cy: "100",
      r: "70",
    },

    {
      id: 8,
      className: "path path-3",
      className2: "progress-bar",
      text1: "100 %",
      text2: "Postgresql",
      tx1Class: "precentage",
      cx: "100",
      cy: "100",
      r: "70",
    },
    {
      id: 9,
      className: "path path-3",
      className2: "progress-bar",
      text1: "100 %",
      text2: "MongoDB",
      tx1Class: "precentage",
      cx: "100",
      cy: "100",
      r: "70",
    },
    {
      id: 10,
      className: "path path-3",
      className2: "progress-bar",
      text1: "100 %",
      text2: "Embeded JS",
      tx1Class: "precentage",
      cx: "100",
      cy: "100",
      r: "70",
    },
    {
      id: 11,
      className: "path path-3",
      className2: "progress-bar",
      text1: "100 %",
      text2: "Next JS",
      tx1Class: "precentage",
      cx: "100",
      cy: "100",
      r: "70",
    },
    {
      id: 12,
      className: "path path-3",
      className2: "progress-bar",
      text1: "100 %",
      text2: "Git & GitHub",
      tx1Class: "precentage",
      cx: "100",
      cy: "100",
      r: "70",
    },

  ];
};
