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

    "drawer.aria.toggle": "Toggle mobile menu",

    "about.title": "Our Company",
    "about.url": "about",
    "about.aria": "Go to About page",

    "location.title": "Locations",
    "location.url": "location",
    "location.aria": "Go to Location page",

    "contact.title": "Contact",
    "contact.url": "contact",
    "contact.aria": "Go to Contact page",

    "404.title": "Page Not Found",

    "hero.heading": "Award-winning custom designs and digital branding solutions",
    "hero.content":
      "With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.",
    "hero.btn.url": "about",
    "hero.btn.aria": "Learn more about our company",
    "hero.btn.title": "Learn more",

    "illustration.first.heading": "Passionate",
    "illustration.first.content":
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    "illustration.second.heading": "Resourceful",
    "illustration.second.content":
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    "illustration.third.heading": "Friendly",
    "illustration.third.content":
      " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",

    "get-in-touch.btn.url": "contact",
    "get-in-touch.btn.aria": "Go to contact page",
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
