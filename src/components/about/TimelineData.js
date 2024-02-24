import { IoMdSchool } from "react-icons/io";
import { MdComputer } from "react-icons/md";
import { PiFirstAidBold } from "react-icons/pi";
import { RiEnglishInput } from "react-icons/ri";
import { useTranslation } from "react-i18next";

export function GetTimelineData() {
  const { t } = useTranslation("timeline");
  return [
    {
      id: 1,
      class1: "container2 left-container",
      icon: <IoMdSchool />,
      class4: "icon",
      class2: "text-box",
      H1Text: t("timeline.text1"),
      small: "2018 - 2019",
      para: t("timeline.para1"),
      class3: "left-container-arrow",
    },
    {
      id: 2,
      class1: "container2 right-container",
      icon: <PiFirstAidBold />,
      class4: "icon",
      class2: "text-box",
      H1Text: t("timeline.text2"),
      small: "2018 - 2019",
      para: t("timeline.para2"),
      class3: "right-container-arrow",
    },
    {
      id: 3,
      class1: "container2 left-container",
      icon: <RiEnglishInput />,
      class4: "icon en",
      class2: "text-box",
      H1Text: t("timeline.text3"),
      small: "2022 - 2013",
      para: t("timeline.para3"),
      class3: "left-container-arrow",
    },
    {
      id: 4,
      class1: "container2 right-container",
      icon: <MdComputer />,
      class4: "icon",
      class2: "text-box",
      H1Text: t("timeline.text4"),
      small: "2018",
      para: t("timeline.para4"),
      class3: "right-container-arrow",
    },
  ];
}
export default GetTimelineData;
