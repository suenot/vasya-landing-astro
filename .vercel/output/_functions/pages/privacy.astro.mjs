import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML, m as maybeRenderHead, d as defineScriptVars } from '../chunks/astro/server_D-coMkG4.mjs';
import 'piccolore';
import { $ as $$BaseLayout, l as logoSvg } from '../chunks/vasyapp_BYSCk76f.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_B2Iij6BM.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const en = {
    title: "Privacy Policy",
    lastUpdated: "Last updated: February 27, 2026",
    backToHome: "\u2190 Back to Home",
    footerText: "\xA9 2026 Vasya.app. Open source Telegram client.",
    appName: "Vasyapp",
    sections: [
      {
        heading: "1. Introduction",
        text: 'Vasya.app ("we", "our", "us") is an open-source Telegram client focused on privacy, productivity, and voice transcription. This Privacy Policy explains how we handle your data when you use our application.'
      },
      {
        heading: "2. Data We Collect",
        text: "Vasya.app is designed with a privacy-first approach. We collect minimal data necessary for the application to function:\n\n\u2022 **Account Information**: Your Telegram account credentials are handled directly by the Telegram API. We do not store your passwords or authentication tokens on our servers.\n\u2022 **Local Processing Data**: Voice messages transcribed using Local Whisper are processed entirely on your device. No audio data is sent to external servers.\n\u2022 **Cloud Transcription**: If you choose to use Deepgram for transcription, audio data is sent to Deepgram's servers according to their privacy policy.\n\u2022 **Usage Analytics**: We do not collect any usage analytics or telemetry data."
      },
      {
        heading: "3. How We Use Your Data",
        text: "\u2022 To provide voice message transcription services\n\u2022 To enable multi-account management\n\u2022 To deliver the core messaging functionality through the Telegram API\n\nWe do not sell, trade, or rent your personal data to third parties."
      },
      {
        heading: "4. Data Storage",
        text: "All application data is stored locally on your device. Vasya.app does not maintain external servers for storing user data. Your messages, transcriptions, and settings remain on your machine."
      },
      {
        heading: "5. Third-Party Services",
        text: "\u2022 **Telegram API**: Used for core messaging functionality. Subject to Telegram's Privacy Policy.\n\u2022 **Deepgram** (optional): Used for cloud-based voice transcription. Subject to Deepgram's Privacy Policy.\n\u2022 **Local Whisper** (default): Runs entirely on your device with no external data transmission."
      },
      {
        heading: "6. Open Source",
        text: "Vasya.app is open source. You can review our codebase on GitHub to verify our privacy practices. Transparency is a core principle of our project."
      },
      {
        heading: "7. Changes to This Policy",
        text: 'We may update this Privacy Policy from time to time. Any changes will be reflected in the "Last updated" date at the top of this page.'
      },
      {
        heading: "8. Contact",
        text: "If you have questions about this Privacy Policy, please open an issue on our GitHub repository at github.com/suenot/vasya."
      }
    ]
  };
  const ru = {
    title: "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
    lastUpdated: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435: 27 \u0444\u0435\u0432\u0440\u0430\u043B\u044F 2026",
    backToHome: "\u2190 \u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E",
    footerText: "\xA9 2026 \u0412\u0430\u0441\u044F\u044F\u043F. Open source Telegram \u043A\u043B\u0438\u0435\u043D\u0442.",
    appName: "\u0412\u0430\u0441\u044F\u044F\u043F",
    sections: [
      {
        heading: "1. \u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435",
        text: '\u0412\u0430\u0441\u044F\u044F\u043F ("\u043C\u044B", "\u043D\u0430\u0448") \u2014 \u044D\u0442\u043E Telegram-\u043A\u043B\u0438\u0435\u043D\u0442 \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C, \u043E\u0440\u0438\u0435\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043D\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0438 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0443 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439. \u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u044F \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u0435\u0442, \u043A\u0430\u043A \u043C\u044B \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u0432\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0438 \u043D\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F.'
      },
      {
        heading: "2. \u0414\u0430\u043D\u043D\u044B\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043C\u044B \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C",
        text: "\u0412\u0430\u0441\u044F\u044F\u043F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D \u0441 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043E\u043C \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438. \u041C\u044B \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F:\n\n\u2022 **\u0414\u0430\u043D\u043D\u044B\u0435 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430**: \u0423\u0447\u0451\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0432\u0430\u0448\u0435\u0433\u043E Telegram-\u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0447\u0435\u0440\u0435\u0437 Telegram API. \u041C\u044B \u043D\u0435 \u0445\u0440\u0430\u043D\u0438\u043C \u0432\u0430\u0448\u0438 \u043F\u0430\u0440\u043E\u043B\u0438 \u0438\u043B\u0438 \u0442\u043E\u043A\u0435\u043D\u044B \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u043D\u0430 \u043D\u0430\u0448\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u0445.\n\u2022 **\u041B\u043E\u043A\u0430\u043B\u044C\u043D\u0430\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430**: \u0413\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F, \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Local Whisper, \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435. \u0410\u0443\u0434\u0438\u043E\u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u0430 \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u044B.\n\u2022 **\u041E\u0431\u043B\u0430\u0447\u043D\u0430\u044F \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0430**: \u0415\u0441\u043B\u0438 \u0432\u044B \u0432\u044B\u0431\u0438\u0440\u0430\u0435\u0442\u0435 Deepgram \u0434\u043B\u044F \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0438, \u0430\u0443\u0434\u0438\u043E\u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u044B Deepgram \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u0438\u0445 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0435 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438.\n\u2022 **\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430**: \u041C\u044B \u043D\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u043C \u043D\u0438\u043A\u0430\u043A\u043E\u0439 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0438\u043B\u0438 \u0442\u0435\u043B\u0435\u043C\u0435\u0442\u0440\u0438\u0438."
      },
      {
        heading: "3. \u041A\u0430\u043A \u043C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u0432\u0430\u0448\u0438 \u0434\u0430\u043D\u043D\u044B\u0435",
        text: "\u2022 \u0414\u043B\u044F \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0443\u0441\u043B\u0443\u0433 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0438 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439\n\u2022 \u0414\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u043C\u0438 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430\u043C\u0438\n\u2022 \u0414\u043B\u044F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u0430 \u043E\u0431\u043C\u0435\u043D\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F\u043C\u0438 \u0447\u0435\u0440\u0435\u0437 Telegram API\n\n\u041C\u044B \u043D\u0435 \u043F\u0440\u043E\u0434\u0430\u0451\u043C, \u043D\u0435 \u043E\u0431\u043C\u0435\u043D\u0438\u0432\u0430\u0435\u043C \u0438 \u043D\u0435 \u0441\u0434\u0430\u0451\u043C \u0432 \u0430\u0440\u0435\u043D\u0434\u0443 \u0432\u0430\u0448\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0442\u0440\u0435\u0442\u044C\u0438\u043C \u043B\u0438\u0446\u0430\u043C."
      },
      {
        heading: "4. \u0425\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445",
        text: "\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0445\u0440\u0430\u043D\u044F\u0442\u0441\u044F \u043B\u043E\u043A\u0430\u043B\u044C\u043D\u043E \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435. \u0412\u0430\u0441\u044F\u044F\u043F \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0432\u043D\u0435\u0448\u043D\u0438\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u044B \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. \u0412\u0430\u0448\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F, \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0438 \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435."
      },
      {
        heading: "5. \u0421\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
        text: "\u2022 **Telegram API**: \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0433\u043E \u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u0430 \u043E\u0431\u043C\u0435\u043D\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F\u043C\u0438. \u0420\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 Telegram.\n\u2022 **Deepgram** (\u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E): \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0434\u043B\u044F \u043E\u0431\u043B\u0430\u0447\u043D\u043E\u0439 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0438 \u0433\u043E\u043B\u043E\u0441\u0430. \u0420\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 Deepgram.\n\u2022 **Local Whisper** (\u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E): \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435 \u0431\u0435\u0437 \u043F\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432\u043E\u0432\u043D\u0435."
      },
      {
        heading: "6. \u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434",
        text: "\u0412\u0430\u0441\u044F\u044F\u043F \u2014 \u043F\u0440\u043E\u0435\u043A\u0442 \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u0434\u043E\u0432\u043E\u0439 \u0431\u0430\u0437\u043E\u0439 \u043D\u0430 GitHub, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u043D\u0430\u0448\u0438 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438. \u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u2014 \u044D\u0442\u043E \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043F\u0440\u0438\u043D\u0446\u0438\u043F \u043D\u0430\u0448\u0435\u0433\u043E \u043F\u0440\u043E\u0435\u043A\u0442\u0430."
      },
      {
        heading: "7. \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0435",
        text: "\u041C\u044B \u043C\u043E\u0436\u0435\u043C \u0432\u0440\u0435\u043C\u044F \u043E\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0442\u044C \u044D\u0442\u0443 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0443 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438. \u041B\u044E\u0431\u044B\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0431\u0443\u0434\u0443\u0442 \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u044B \u0432 \u0434\u0430\u0442\u0435 \xAB\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435\xBB \u0432 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B."
      },
      {
        heading: "8. \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
        text: "\u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043F\u043E \u0434\u0430\u043D\u043D\u043E\u0439 \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0435 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 issue \u0432 \u043D\u0430\u0448\u0435\u043C GitHub-\u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0438 github.com/suenot/vasya."
      }
    ]
  };
  const translations = { en, ru };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Privacy Policy - Vasyapp" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" <script>(function(){", "\n        window.translations = translations;\n        \n        // Custom update for legal pages since they have dynamic sections\n        const originalUpdate = window.updateContent;\n        window.updateContent = (lang) => {\n            if (originalUpdate) originalUpdate(lang);\n            \n            const t = window.translations[lang];\n            const contentArea = document.querySelector('#legal-content');\n            \n            if (contentArea && t.sections) {\n                requestAnimationFrame(() => {\n                    contentArea.innerHTML = t.sections.map(section => `\n                        <div class=\"section\">\n                            <h2>${section.heading}</h2>\n                            <div class=\"text\">\n                                ${section.text.split('\\n').map(line => `<p>${renderText(line)}</p>`).join('')}\n                            </div>\n                        </div>\n                    `).join('');\n                });\n            }\n        };\n\n        function renderText(text) {\n            return text.replace(/\\*\\*([^*]+)\\*\\*/g, '<strong>$1</strong>');\n        }\n    })();<\/script> ", '<div class="page"> <header class="header"> <div style="display: flex; align-items: center; gap: 10px;"> ', ' <a href="/" class="logoTitle" data-t="appName">', `</a> </div> <div class="langSwitcher"> <button onclick="setLanguage('en')" class="langBtn" data-lang="en" aria-label="Switch language to English">EN</button> <button onclick="setLanguage('ru')" class="langBtn" data-lang="ru" aria-label="Switch language to Russian">RU</button> </div> </header> <main class="content"> <a href="/" class="backLink" data-t="backToHome">`, '</a> <h1 class="title" data-t="title">', '</h1> <p class="lastUpdated" data-t="lastUpdated">', '</p> <div id="legal-content"> ', ' </div> </main> <footer class="footer"> <p data-t="footerText">', "</p> </footer> </div> "], [" <script>(function(){", "\n        window.translations = translations;\n        \n        // Custom update for legal pages since they have dynamic sections\n        const originalUpdate = window.updateContent;\n        window.updateContent = (lang) => {\n            if (originalUpdate) originalUpdate(lang);\n            \n            const t = window.translations[lang];\n            const contentArea = document.querySelector('#legal-content');\n            \n            if (contentArea && t.sections) {\n                requestAnimationFrame(() => {\n                    contentArea.innerHTML = t.sections.map(section => \\`\n                        <div class=\"section\">\n                            <h2>\\${section.heading}</h2>\n                            <div class=\"text\">\n                                \\${section.text.split('\\\\n').map(line => \\`<p>\\${renderText(line)}</p>\\`).join('')}\n                            </div>\n                        </div>\n                    \\`).join('');\n                });\n            }\n        };\n\n        function renderText(text) {\n            return text.replace(/\\\\*\\\\*([^*]+)\\\\*\\\\*/g, '<strong>$1</strong>');\n        }\n    })();<\/script> ", '<div class="page"> <header class="header"> <div style="display: flex; align-items: center; gap: 10px;"> ', ' <a href="/" class="logoTitle" data-t="appName">', `</a> </div> <div class="langSwitcher"> <button onclick="setLanguage('en')" class="langBtn" data-lang="en" aria-label="Switch language to English">EN</button> <button onclick="setLanguage('ru')" class="langBtn" data-lang="ru" aria-label="Switch language to Russian">RU</button> </div> </header> <main class="content"> <a href="/" class="backLink" data-t="backToHome">`, '</a> <h1 class="title" data-t="title">', '</h1> <p class="lastUpdated" data-t="lastUpdated">', '</p> <div id="legal-content"> ', ' </div> </main> <footer class="footer"> <p data-t="footerText">', "</p> </footer> </div> "])), defineScriptVars({ translations }), maybeRenderHead(), renderComponent($$result2, "Image", $$Image, { "src": logoSvg, "alt": "Vasyapp Logo", "width": 32, "height": 32 }), en.appName, en.backToHome, en.title, en.lastUpdated, en.sections.map((section) => renderTemplate`<div class="section"> <h2>${section.heading}</h2> <div class="text"> ${section.text.split("\n").map((line) => renderTemplate`<p>${unescapeHTML(line.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>"))}</p>`)} </div> </div>`), en.footerText) })}`;
}, "/Users/suenot/projects/w_vasya/vasya_landing_astro/src/pages/privacy.astro", void 0);

const $$file = "/Users/suenot/projects/w_vasya/vasya_landing_astro/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Privacy,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
