export const languages = {
  en: "English",
};

export const defaultLang = "en";

export interface TranslationObject {
  [lang: string]: {
    [key: string]: string;
  };
}

export const ui: TranslationObject = {
  en: {
    "site.author": "Jakub Jirous",
    "site.title": "Designo",
    "site.description": "Award-winning custom designs and digital branding solutions.",
    "site.ogImage": "assets/designo-og.webp",

    "company.title": "Our Company",

    "location.title": "Locations",

    "contact.title": "Contact",

    "404.title": "Page Not Found",
  },
};
