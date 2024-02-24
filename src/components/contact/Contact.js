import "./contact.css";
import { MdEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import Googlemap from "./Googlemap";
import { useTranslation } from "react-i18next";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const { t } = useTranslation("contact");

  const [map, setMap] = useState(false);
  const showMap = () => {
    setMap((current) => !current);
  };

  // Used the Email JS to the contact form

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();
    emailjs
      .sendForm(
        "service_ewb98ra",
        "template_plhlrf5",
        form.current,
        "YRT0-Vi6p5C3Kap5r"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contacts">
      <div id="contact">
        <h5 className="head">{t("contact.h5_1")}</h5>
        <h2 className="head2">{t("contact.h2")}</h2>
        <div className="container contact__container">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder={t("contact.form_name_placeholder")}
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder={t("contact.form_email_placeholder")}
              required
            ></input>
            <textarea
              name="message"
              rows="7"
              placeholder={t("contact.form_message_placeholder")}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary sub-btn">
              {t("contact.form_submit_button")}
            </button>
          </form>
        </div>

        {/* End of form  */}

        <div className="contact__options">
          <article className="contact__option">
            <i className="contact__option-icon">
              <MdEmail />
            </i>
            <h4>{t("contact.h4_2")}</h4>
            <h5>soriahaidary17@gmail.com</h5>
            <a
              href="mailto:mailto:soriahaidary17@gmail.com "
              target="_blank"
              rel="noreferrer noopener"
            >
              {t("contact.a_text_1")}
            </a>
          </article>
          <article className="contact__option">
            <i className="contact__option-icon">
              <FaTelegram />
            </i>
            <h4>{t("contact.h4_3")}</h4>
            <h5>@Soria_Haidari</h5>
          </article>
          <article className="contact__option">
            <i className="contact__option-icon">
              <FaLocationDot />
            </i>
            <h4>{t("contact.Mylocation")}</h4>
            <button
              className="google-btn btn btn-primary "
              href="#"
              onClick={showMap}
            >
              {t("contact.button_text")}
            </button>
            <div className="map"> {map && <Googlemap />}</div>
          </article>
        </div>
      </div>
    </section>
  );
}
