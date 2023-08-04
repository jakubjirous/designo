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
    "company.url": "company",

    "location.title": "Locations",
    "location.url": "location",

    "contact.title": "Contact",
    "contact.url": "contact",

    "404.title": "Page Not Found",

    "get-in-touch.btn.url": "contact",
    "get-in-touch.btn.aria": "Get In Touch",
    "get-in-touch.btn.title": "Get In Touch",
    "get-in-touch.heading": "Let’s talk about your project",
    "get-in-touch.content":
      "Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.",

    "social.facebook.title": "Facebook",
    "social.facebook.url": "https://www.facebook.com/",
    "social.youtube.title": "YouTube",
    "social.youtube.url": "https://www.youtube.com/",
    "social.twitter.title": "Twitter",
    "social.twitter.url": "https://twitter.com/",
    "social.pinterest.title": "Pinterest",
    "social.pinterest.url": "https://www.pinterest.com/",
    "social.instagram.title": "Instagram",
    "social.instagram.url": "https://www.instagram.com/",
  },
};
