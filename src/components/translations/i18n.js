import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import header_en from "./en/header.json";
import header_fr from "./fr/header.json";
import header_de from "./de/header.json";
import header_zh from "./zh/header.json";
import header_tr from "./tr/header.json";

import about_en from "./en/about.json";
import about_fr from "./fr/about.json";
import about_de from "./de/about.json";
import about_zh from "./zh/about.json";
import about_tr from "./tr/about.json";

import services_en from "./en/services.json";
import services_fr from "./fr/services.json";
import services_de from "./de/services.json";
import services_zh from "./zh/services.json";
import services_tr from "./tr/services.json";

import timeline_en from "./en/timeline.json";
import timeline_tr from "./tr/timeline.json";
import timeline_fr from "./fr/timeline.json";
import timeline_de from "./de/timeline.json";
import timeline_zh from "./zh/timeline.json";

import skill_de from "./de/skill.json";
import skill_fr from "./fr/skill.json";
import skill_en from "./en/skill.json";
import skill_zh from "./zh/skill.json";
import skill_tr from "./tr/skill.json";

import project_en from "./en/projects.json";
import project_fr from "./fr/projects.json";
import project_de from "./de/projects.json";
import project_zh from "./zh/projects.json";
import project_tr from "./tr/projects.json";

import contact_en from "./en/contact.json";
import contact_fr from "./fr/contact.json";
import contact_de from "./de/contact.json";
import contact_zh from "./zh/contact.json";
import contact_tr from "./tr/contact.json";

import footer_en from "./en/footer.json";
import footer_fr from "./fr/footer.json";
import footer_de from "./de/footer.json";
import footer_zh from "./zh/footer.json";
import footer_tr from "./tr/footer.json";

i18next.use(initReactI18next).init({
  interpolation: { escapValue: false },
  lang: "en",
  fallbackLng: "en",
  resources: {
    en: {
      about: about_en,
      header: header_en,
      skill: skill_en,
      timeline: timeline_en,
      project: project_en,
      contact: contact_en,
      services: services_en,
      footer: footer_en,
    },
    fr: {
      about: about_fr,
      header: header_fr,
      skill: skill_fr,
      timeline: timeline_fr,
      project: project_fr,
      contact: contact_fr,
      services: services_fr,
      footer: footer_fr,
    },
    de: {
      about: about_de,
      header: header_de,
      skill: skill_de,
      timeline: timeline_de,
      project: project_de,
      contact: contact_de,
      services: services_de,
      footer: footer_de,
    },
    tr: {
      about: about_tr,
      header: header_tr,
      skill: skill_tr,
      timeline: timeline_tr,
      project: project_tr,
      contact: contact_tr,
      services: services_tr,
      footer: footer_tr,
    },
    zh: {
      about: about_zh,
      header: header_zh,
      skill: skill_zh,
      timeline: timeline_zh,
      project: project_zh,
      contact: contact_zh,
      services: services_zh,
      footer: footer_zh,
    },
  },
});
