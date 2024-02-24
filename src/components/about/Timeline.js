import GetTimelineData from "./TimelineData";
import "./timeline.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function Timeline() {
  const TimelineData = GetTimelineData();

  const { t } = useTranslation("about");
  // Got the data dynamically by map() method from TimelineData with also using translation system

  const [isShow, setIsShow] = useState(false);
  const showTimeline = () => {
    setIsShow(true);
  };
  const closeTimeline = () => {
    setIsShow(false);
  };
  return (
    <>
      <button className=" btn btn-primary" onClick={showTimeline}>
        {t("about.timeline")}
      </button>
      {isShow && (
        <div className="timeline boxes">
          {TimelineData.map((timeline) => {
            return (
              <div className={timeline.class1} id="time" key={timeline.id}>
                <div className={timeline.class2}>
                  <h2>{timeline.H1Text}</h2>
                  <small>{timeline.small}</small>
                  <p>{timeline.para}</p>
                  <div className={timeline.class3}></div>
                </div>
              </div>
            );
          })}
          <button className=" btn btn-primary" onClick={closeTimeline}>
            {t("about.Hide")}
          </button>
        </div>
      )}
    </>
  );
}
