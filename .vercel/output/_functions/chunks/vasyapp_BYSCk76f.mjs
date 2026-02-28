import { e as createAstro, c as createComponent, b as addAttribute, a as renderTemplate, s as spreadAttributes, u as unescapeHTML, r as renderComponent, f as renderSlot, g as renderHead } from './astro/server_D-coMkG4.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';

const $$Astro$8 = createAstro("https://vasya.app");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/suenot/projects/w_vasya/vasya_landing_astro/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$7 = createAstro("https://vasya.app");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/suenot/projects/w_vasya/vasya_landing_astro/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$6 = createAstro("https://vasya.app");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/suenot/projects/w_vasya/vasya_landing_astro/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$5 = createAstro("https://vasya.app");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/suenot/projects/w_vasya/vasya_landing_astro/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$4 = createAstro("https://vasya.app");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/Users/suenot/projects/w_vasya/vasya_landing_astro/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$3 = createAstro("https://vasya.app");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/suenot/projects/w_vasya/vasya_landing_astro/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$2 = createAstro("https://vasya.app");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/suenot/projects/w_vasya/vasya_landing_astro/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$1 = createAstro("https://vasya.app");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  const shouldRemoveTrailingSlash = Astro2.props.removeTrailingSlashForRoot && Astro2.url.pathname === "/";
  const canonicalHref = shouldRemoveTrailingSlash ? defaultCanonicalUrl.origin + defaultCanonicalUrl.search : defaultCanonicalUrl.href;
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || canonicalHref, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}${Astro2.props.noarchive ? ", noarchive" : ""}${Astro2.props.nocache ? ", nocache" : ""}${Astro2.props.robotsExtras ? `, ${Astro2.props.robotsExtras}` : ""}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/Users/suenot/projects/w_vasya/vasya_landing_astro/node_modules/astro-seo/src/SEO.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://vasya.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description = "The Telegram Client for Deep Focus" } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const ogImageURL = new URL("/og.png", Astro2.site);
  ogImageURL.searchParams.set("title", title);
  ogImageURL.searchParams.set("description", description);
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="apple-touch-icon" href="/vasyapp.png">', "<!-- Critical styles to prevent white flash --><style>\n			:root { --bg-primary: #0f171e; }\n			html, body { background-color: #0f171e; margin: 0; }\n		</style><script>\n			// Optimized script to avoid forced reflows and redundant work\n			(function() {\n				const savedLang = localStorage.getItem('lang');\n				const browserLang = navigator.language.split('-')[0];\n				const lang = savedLang || (browserLang === 'ru' ? 'ru' : 'en');\n				document.documentElement.setAttribute('lang', lang);\n				\n				const ua = navigator.userAgent.toLowerCase();\n				let os = 'web';\n				if (/android/.test(ua)) os = 'android';\n				else if (/mac/.test(ua)) os = 'mac';\n				else if (/win/.test(ua)) os = 'windows';\n				else if (/linux/.test(ua)) os = 'linux';\n				document.documentElement.setAttribute('data-os', os);\n			})();\n\n			function updateContent(lang) {\n				const translations = window.translations;\n				if (!translations || !translations[lang]) return;\n				\n				const t = translations[lang];\n				const elements = document.querySelectorAll('[data-t]');\n				const langBtns = document.querySelectorAll('.langBtn');\n				\n				// Batch all DOM writes in a single frame to avoid layout thrashing\n				requestAnimationFrame(() => {\n					for (let i = 0; i < elements.length; i++) {\n						const el = elements[i];\n						const key = el.getAttribute('data-t');\n						const val = t[key];\n						if (val) {\n							if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {\n								el.placeholder = val;\n							} else {\n								el.textContent = val;\n							}\n						}\n					}\n					\n					for (let i = 0; i < langBtns.length; i++) {\n						const btn = langBtns[i];\n						btn.setAttribute('data-active', btn.getAttribute('data-lang') === lang);\n					}\n				});\n\n				localStorage.setItem('lang', lang);\n			}\n\n			window.setLanguage = (lang) => {\n				if (document.documentElement.getAttribute('lang') === lang) return;\n				document.documentElement.setAttribute('lang', lang);\n				updateContent(lang);\n			};\n\n			document.addEventListener('DOMContentLoaded', () => {\n				const lang = document.documentElement.getAttribute('lang');\n				// Only run translation if not in English (which is the static default)\n				if (lang && lang !== 'en') {\n					updateContent(lang);\n				} else {\n					// Even in English, we need to set active state for buttons\n					document.querySelectorAll('.langBtn').forEach(btn => {\n						btn.setAttribute('data-active', btn.getAttribute('data-lang') === 'en');\n					});\n				}\n			});\n		<\/script>", "</head> <body> ", " </body></html>"])), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "canonical": canonicalURL.toString(), "openGraph": {
    basic: {
      title,
      type: "website",
      image: ogImageURL.toString(),
      url: canonicalURL.toString()
    },
    image: {
      alt: "Vasyapp Logo"
    }
  }, "twitter": {
    creator: "@suenot",
    card: "summary_large_image",
    site: "@suenot",
    title,
    description,
    image: ogImageURL.toString()
  }, "extend": {
    // web app meta
    meta: [
      { name: "viewport", content: "width=device-width" },
      { name: "generator", content: Astro2.generator },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" }
    ]
  } }), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/suenot/projects/w_vasya/vasya_landing_astro/src/layouts/BaseLayout.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const logoSvg = createSvgComponent({"meta":{"src":"/_astro/vasyapp.KrGaBXLV.svg","width":1024,"height":1024,"format":"svg"},"attributes":{"width":"1024","height":"1024","viewBox":"0 0 1024 1024"},"children":"\n  <defs>\n    <linearGradient id=\"grad\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\">\n      <stop offset=\"0%\" stop-color=\"#2BE28F\" />\n      <stop offset=\"100%\" stop-color=\"#14A299\" />\n    </linearGradient>\n  </defs>\n  \n  <rect width=\"1024\" height=\"1024\" rx=\"220\" fill=\"url(#grad)\" />\n\n  <g transform=\"translate(76.5, 1039) scale(0.170000,-0.170000)\" fill=\"white\" stroke=\"none\">\n    \n<path d=\"M2783 4883 c-28 -5 -109 -77 -128 -112 -7 -15 -34 -106 -59 -202 -68\n-265 -171 -663 -200 -769 -13 -52 -45 -176 -71 -275 -25 -99 -53 -190 -61\n-202 -25 -39 -84 -24 -98 25 -2 9 -18 73 -35 142 -16 69 -57 235 -90 370 -32\n135 -87 362 -121 505 -34 143 -68 279 -76 302 -20 54 -89 118 -145 133 -96 26\n-212 -20 -255 -101 -7 -15 -18 -48 -24 -73 -11 -51 -7 -72 205 -1016 96 -427\n107 -485 107 -575 1 -55 -4 -117 -10 -137 -8 -28 -7 -38 1 -38 6 0 61 15 122\n34 60 19 171 52 245 74 74 22 189 57 255 77 205 63 249 75 282 75 29 0 33 4\n51 53 73 196 141 426 212 712 44 182 105 429 135 550 58 234 60 264 24 335\n-47 94 -146 136 -266 113z\" />\n<path d=\"M2968 3500 c-48 -26 -71 -60 -111 -166 -41 -106 -87 -248 -87 -265 0\n-7 10 -33 22 -58 18 -37 23 -63 23 -136 0 -104 -19 -169 -71 -247 -19 -28 -33\n-57 -30 -64 9 -23 70 -47 121 -47 55 0 98 18 133 56 13 13 77 152 143 308 67\n156 131 304 142 329 16 32 22 64 22 112 0 58 -4 71 -31 110 -46 63 -95 88\n-174 87 -45 0 -77 -6 -102 -19z\" />\n<path d=\"M3435 3252 c-16 -11 -39 -30 -51 -43 -12 -13 -71 -144 -132 -292\n-125 -299 -133 -334 -89 -412 64 -114 252 -111 313 6 31 60 196 446 216 505\n32 92 11 161 -67 220 -49 37 -144 45 -190 16z\" />\n<path d=\"M2565 2991 c-348 -103 -779 -237 -821 -256 -181 -80 -271 -284 -229\n-520 61 -351 273 -636 591 -794 297 -147 630 -147 933 1 l109 54 54 -17 c331\n-107 478 -148 478 -136 0 2 -38 120 -85 263 -47 142 -85 263 -85 268 0 5 16\n43 36 84 74 158 111 385 89 558 l-7 58 -32 -63 c-65 -131 -149 -186 -281 -186\n-67 0 -88 5 -130 27 -52 27 -90 63 -121 113 -10 17 -19 32 -20 34 -2 1 -19 -9\n-38 -24 -100 -76 -246 -73 -358 6 l-29 21 -119 -59 c-66 -32 -119 -60 -120\n-63 0 -3 24 -19 53 -37 80 -48 141 -107 195 -187 55 -83 108 -229 98 -271 -14\n-54 -100 -51 -112 4 -46 220 -204 381 -419 426 -78 16 -95 28 -95 66 0 37 22\n51 140 83 145 41 286 114 352 184 71 74 99 130 106 208 6 78 -4 130 -29 155\n-23 23 -27 23 -104 0z\" />\n\n  </g>\n"});

export { $$BaseLayout as $, logoSvg as l };
