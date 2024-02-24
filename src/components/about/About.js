import React from "react";
import "./about.css";
import image from "../../assets/me.jpg";
import CTA from "./CTA";
import { useTranslation } from "react-i18next";
import Services from "../services/Services";
import Timeline from "./Timeline";

export default function About() {
  const { t } = useTranslation("about");

  return (
    <section id="about">
      <h5>{t("about.getToKnow")}</h5>
      <h2>{t("about.aboutMe")}</h2>
      <div className="container about__container">
        <div className="about__me-image">
          <img alt="My" src={image} className="img-fluid" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card ">
              <h5>{t("about.experience")}</h5>
              <small>{t("about.experienceYears")}</small>
            </article>
            <article className="about__card ">
              <h5>{t("about.workexperience")}</h5>
              <small>{t("about.have")}</small>
            </article>
            <article className="about__card ">
              <h5>{t("about.project")}</h5>
              <small>{t("about.completedProjects")}</small>
            </article>
          </div>
          <p>{t("about.description")}</p>

          {/* Imported MyCV */}
          <CTA />
        </div>
      </div>

      {/* Imported Servie component thst hsow my achivement */}
      <Services />

      {/* imported the timeline section by Timeline component */}
      <div className="time">
        <Timeline />
      </div>
    </section>
  );
}
