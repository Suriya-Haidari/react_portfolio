import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./skill.css";
import { useTranslation } from "react-i18next";
import { GetSkillData } from "./SkillsData";
import Slider from "react-slick";

// I used React Slick library to make carousel

export default function Skill() {
  const { t } = useTranslation("skill");
  const Data = GetSkillData();

  // Used carousel to show my skills bars

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <section id="skill" className="skill-top">
      <h3 className="heading1">{t("skill.heading1")}</h3>
      <h5 className="heading2">{t("skill.heading2")}</h5>
      <section id="skill" className="skills">
        <Slider {...settings}>
          {Data.map((skills) => {
            return (
              // The data is getting dynamically by map() mathod

              <div key={skills.id}>
                <div className={skills.class2}>
                  <div className={skills.class3}>
                    <div className={skills.class4}>
                      <svg className="svg" viewBox="0 0 200 200">
                        <circle
                          className={skills.className2}
                          cx={skills.cx}
                          cy={skills.cy}
                          r={skills.r}
                        ></circle>
                        <circle
                          className={skills.className}
                          cx={skills.cx}
                          cy={skills.cy}
                          r={skills.r}
                        ></circle>
                      </svg>
                      <p className={skills.tx1Class}>
                        <span className="text">{t(skills.text2)}</span> <br />
                        {skills.text1}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </section>
  );
}
