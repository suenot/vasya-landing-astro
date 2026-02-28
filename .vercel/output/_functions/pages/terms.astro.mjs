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
const $$Terms = createComponent(($$result, $$props, $$slots) => {
  const en = {
    title: "Terms of Use",
    lastUpdated: "Last updated: February 27, 2026",
    backToHome: "\u2190 Back to Home",
    footerText: "\xA9 2026 Vasya.app. Open source Telegram client.",
    appName: "Vasyapp",
    sections: [
      {
        heading: "1. Acceptance of Terms",
        text: 'By downloading, installing, or using Vasya.app ("the Application"), you agree to be bound by these Terms of Use. If you do not agree to these terms, do not use the Application.'
      },
      {
        heading: "2. Description of Service",
        text: "Vasya.app is an open-source Telegram client that provides:\n\n\u2022 Automatic voice message transcription (via Local Whisper or Deepgram)\n\u2022 Multi-account management\n\u2022 Enhanced privacy features\n\u2022 Native desktop performance via Rust and Tauri"
      },
      {
        heading: "3. Open Source License",
        text: "Vasya.app is distributed under an open-source license. The source code is available at github.com/suenot/vasya. You are free to use, modify, and distribute the software in accordance with the license terms."
      },
      {
        heading: "4. User Responsibilities",
        text: "You agree to:\n\n\u2022 Use the Application in compliance with all applicable laws and Telegram's Terms of Service\n\u2022 Not use the Application for any illegal or unauthorized purpose\n\u2022 Not attempt to reverse-engineer, exploit, or compromise the security of the Application or Telegram's infrastructure\n\u2022 Take responsibility for all activity that occurs under your account(s)"
      },
      {
        heading: "5. Third-Party Services",
        text: "The Application integrates with third-party services:\n\n\u2022 **Telegram**: Your use of Telegram through Vasya.app is subject to Telegram's Terms of Service.\n\u2022 **Deepgram** (optional): If you enable cloud transcription, your use of Deepgram is subject to their Terms of Service.\n\nWe are not responsible for the practices or policies of third-party services."
      },
      {
        heading: "6. Disclaimer of Warranties",
        text: 'The Application is provided "as is" and "as available" without warranty of any kind, express or implied. We do not guarantee that the Application will be uninterrupted, error-free, or secure.\n\nAs an open-source project, the Application is maintained by community contributors on a voluntary basis.'
      },
      {
        heading: "7. Limitation of Liability",
        text: "In no event shall Vasya.app, its contributors, or maintainers be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Application."
      },
      {
        heading: "8. Modifications",
        text: 'We reserve the right to modify these Terms of Use at any time. Changes will be reflected in the "Last updated" date at the top of this page. Continued use of the Application after changes constitutes acceptance of the new terms.'
      },
      {
        heading: "9. Contact",
        text: "For questions about these Terms of Use, please open an issue on our GitHub repository at github.com/suenot/vasya."
      }
    ]
  };
  const ru = {
    title: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F",
    lastUpdated: "\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435: 27 \u0444\u0435\u0432\u0440\u0430\u043B\u044F 2026",
    backToHome: "\u2190 \u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E",
    footerText: "\xA9 2026 \u0412\u0430\u0441\u044F\u044F\u043F. Open source Telegram \u043A\u043B\u0438\u0435\u043D\u0442.",
    appName: "\u0412\u0430\u0441\u044F\u044F\u043F",
    sections: [
      {
        heading: "1. \u041F\u0440\u0438\u043D\u044F\u0442\u0438\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u0439",
        text: '\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044F, \u0443\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044F \u0438\u043B\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044F \u0412\u0430\u0441\u044F\u044F\u043F ("\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435"), \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C\u0438 \u0423\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F. \u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B \u0441 \u044D\u0442\u0438\u043C\u0438 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438, \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435.'
      },
      {
        heading: "2. \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u0430",
        text: "\u0412\u0430\u0441\u044F\u044F\u043F \u2014 \u044D\u0442\u043E Telegram-\u043A\u043B\u0438\u0435\u043D\u0442 \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442:\n\n\u2022 \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0443 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0445 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439 (\u0447\u0435\u0440\u0435\u0437 Local Whisper \u0438\u043B\u0438 Deepgram)\n\u2022 \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u043C\u0438 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430\u043C\u0438\n\u2022 \u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438\n\u2022 \u041D\u0430\u0442\u0438\u0432\u043D\u0443\u044E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043D\u0430 \u0434\u0435\u0441\u043A\u0442\u043E\u043F\u0435 \u0447\u0435\u0440\u0435\u0437 Rust \u0438 Tauri"
      },
      {
        heading: "3. \u041B\u0438\u0446\u0435\u043D\u0437\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0433\u043E \u043A\u043E\u0434\u0430",
        text: "\u0412\u0430\u0441\u044F\u044F\u043F \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u044F\u0435\u0442\u0441\u044F \u043F\u043E\u0434 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0435\u0439 \u043E\u0442\u043A\u0440\u044B\u0442\u043E\u0433\u043E \u0438\u0441\u0445\u043E\u0434\u043D\u043E\u0433\u043E \u043A\u043E\u0434\u0430. \u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434 \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u043D\u0430 github.com/suenot/vasya. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C, \u0438\u0437\u043C\u0435\u043D\u044F\u0442\u044C \u0438 \u0440\u0430\u0441\u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u044F\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0443\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0438."
      },
      {
        heading: "4. \u041E\u0431\u044F\u0437\u0430\u043D\u043D\u043E\u0441\u0442\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",
        text: "\u0412\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C:\n\n\u2022 \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C\u044B\u043C\u0438 \u0437\u0430\u043A\u043E\u043D\u0430\u043C\u0438 \u0438 \u0423\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F Telegram\n\u2022 \u041D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0432 \u043D\u0435\u0437\u0430\u043A\u043E\u043D\u043D\u044B\u0445 \u0438\u043B\u0438 \u043D\u0435\u0441\u0430\u043D\u043A\u0446\u0438\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0446\u0435\u043B\u044F\u0445\n\u2022 \u041D\u0435 \u043F\u044B\u0442\u0430\u0442\u044C\u0441\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043E\u0431\u0440\u0430\u0442\u043D\u0443\u044E \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443, \u044D\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438\u043B\u0438 \u0441\u043A\u043E\u043C\u043F\u0440\u043E\u043C\u0435\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438\u043B\u0438 \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B Telegram\n\u2022 \u041D\u0435\u0441\u0442\u0438 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u0432\u0441\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u0441\u043E\u0432\u0435\u0440\u0448\u0451\u043D\u043D\u044B\u0435 \u043F\u043E\u0434 \u0432\u0430\u0448\u0435\u0439 \u0443\u0447\u0451\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u044C\u044E (\u0443\u0447\u0451\u0442\u043D\u044B\u043C\u0438 \u0437\u0430\u043F\u0438\u0441\u044F\u043C\u0438)"
      },
      {
        heading: "5. \u0421\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044B",
        text: "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0438\u043D\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u043C\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043C\u0438:\n\n\u2022 **Telegram**: \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 Telegram \u0447\u0435\u0440\u0435\u0437 \u0412\u0430\u0441\u044F\u044F\u043F \u043F\u043E\u0434\u0447\u0438\u043D\u044F\u0435\u0442\u0441\u044F \u0423\u0441\u043B\u043E\u0432\u0438\u044F\u043C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F Telegram.\n\u2022 **Deepgram** (\u043E\u043F\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E): \u041F\u0440\u0438 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u043E\u0431\u043B\u0430\u0447\u043D\u043E\u0439 \u0440\u0430\u0441\u0448\u0438\u0444\u0440\u043E\u0432\u043A\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 Deepgram \u0440\u0435\u0433\u0443\u043B\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u0438\u0445 \u0423\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F.\n\n\u041C\u044B \u043D\u0435 \u043D\u0435\u0441\u0451\u043C \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0438 \u0438 \u043F\u043E\u043B\u0438\u0442\u0438\u043A\u0438 \u0441\u0442\u043E\u0440\u043E\u043D\u043D\u0438\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432."
      },
      {
        heading: "6. \u041E\u0442\u043A\u0430\u0437 \u043E\u0442 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0439",
        text: "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \xAB\u043A\u0430\u043A \u0435\u0441\u0442\u044C\xBB \u0438 \xAB\u043F\u043E \u043C\u0435\u0440\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u0438\xBB \u0431\u0435\u0437 \u043A\u0430\u043A\u0438\u0445-\u043B\u0438\u0431\u043E \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0439, \u044F\u0432\u043D\u044B\u0445 \u0438\u043B\u0438 \u043F\u043E\u0434\u0440\u0430\u0437\u0443\u043C\u0435\u0432\u0430\u0435\u043C\u044B\u0445. \u041C\u044B \u043D\u0435 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u0443\u0435\u043C, \u0447\u0442\u043E \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0431\u0435\u0441\u043F\u0435\u0440\u0435\u0431\u043E\u0439\u043D\u043E, \u0431\u0435\u0437 \u043E\u0448\u0438\u0431\u043E\u043A \u0438\u043B\u0438 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E.\n\n\u041A\u0430\u043A \u043F\u0440\u043E\u0435\u043A\u0442 \u0441 \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u043C \u0438\u0441\u0445\u043E\u0434\u043D\u044B\u043C \u043A\u043E\u0434\u043E\u043C, \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0430 \u043D\u0430 \u0434\u043E\u0431\u0440\u043E\u0432\u043E\u043B\u044C\u043D\u043E\u0439 \u043E\u0441\u043D\u043E\u0432\u0435."
      },
      {
        heading: "7. \u041E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438",
        text: "\u041D\u0438 \u043F\u0440\u0438 \u043A\u0430\u043A\u0438\u0445 \u043E\u0431\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430\u0445 \u0412\u0430\u0441\u044F\u044F\u043F, \u0435\u0433\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u0438\u043B\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0438 \u043D\u0435 \u043D\u0435\u0441\u0443\u0442 \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u0438 \u0437\u0430 \u043B\u044E\u0431\u044B\u0435 \u043A\u043E\u0441\u0432\u0435\u043D\u043D\u044B\u0435, \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0435, \u043E\u0441\u043E\u0431\u044B\u0435, \u0448\u0442\u0440\u0430\u0444\u043D\u044B\u0435 \u0443\u0431\u044B\u0442\u043A\u0438, \u0432\u043E\u0437\u043D\u0438\u043A\u0448\u0438\u0435 \u0432 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0432\u0430\u043C\u0438 \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F."
      },
      {
        heading: "8. \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F",
        text: "\u041C\u044B \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0437\u0430 \u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u0430\u0432\u043E \u0438\u0437\u043C\u0435\u043D\u044F\u0442\u044C \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0435 \u0423\u0441\u043B\u043E\u0432\u0438\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F. \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0431\u0443\u0434\u0443\u0442 \u043E\u0442\u0440\u0430\u0436\u0435\u043D\u044B \u0432 \u0434\u0430\u0442\u0435 \xAB\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435\xBB \u0432 \u0432\u0435\u0440\u0445\u043D\u0435\u0439 \u0447\u0430\u0441\u0442\u0438 \u044D\u0442\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E\u0441\u043B\u0435 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u043E\u0437\u043D\u0430\u0447\u0430\u0435\u0442 \u043F\u0440\u0438\u043D\u044F\u0442\u0438\u0435 \u043D\u043E\u0432\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u0439."
      },
      {
        heading: "9. \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
        text: "\u041F\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u043C \u0441 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u043C\u0438 \u0423\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043E\u0437\u0434\u0430\u0439\u0442\u0435 issue \u0432 \u043D\u0430\u0448\u0435\u043C GitHub-\u0440\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u0440\u0438\u0438 github.com/suenot/vasya."
      }
    ]
  };
  const translations = { en, ru };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Terms of Use - Vasyapp" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" <script>(function(){", "\n        window.translations = translations;\n        \n        // Custom update for legal pages since they have dynamic sections\n        const originalUpdate = window.updateContent;\n        window.updateContent = (lang) => {\n            if (originalUpdate) originalUpdate(lang);\n            \n            const t = window.translations[lang];\n            const contentArea = document.querySelector('#legal-content');\n            \n            if (contentArea && t.sections) {\n                requestAnimationFrame(() => {\n                    contentArea.innerHTML = t.sections.map(section => `\n                        <div class=\"section\">\n                            <h2>${section.heading}</h2>\n                            <div class=\"text\">\n                                ${section.text.split('\\n').map(line => `<p>${renderText(line)}</p>`).join('')}\n                            </div>\n                        </div>\n                    `).join('');\n                });\n            }\n        };\n\n        function renderText(text) {\n            return text.replace(/\\*\\*([^*]+)\\*\\*/g, '<strong>$1</strong>');\n        }\n    })();<\/script> ", '<div class="page"> <header class="header"> <div style="display: flex; align-items: center; gap: 10px;"> ', ' <a href="/" class="logoTitle" data-t="appName">', `</a> </div> <div class="langSwitcher"> <button onclick="setLanguage('en')" class="langBtn" data-lang="en" aria-label="Switch language to English">EN</button> <button onclick="setLanguage('ru')" class="langBtn" data-lang="ru" aria-label="Switch language to Russian">RU</button> </div> </header> <main class="content"> <a href="/" class="backLink" data-t="backToHome">`, '</a> <h1 class="title" data-t="title">', '</h1> <p class="lastUpdated" data-t="lastUpdated">', '</p> <div id="legal-content"> ', ' </div> </main> <footer class="footer"> <p data-t="footerText">', "</p> </footer> </div> "], [" <script>(function(){", "\n        window.translations = translations;\n        \n        // Custom update for legal pages since they have dynamic sections\n        const originalUpdate = window.updateContent;\n        window.updateContent = (lang) => {\n            if (originalUpdate) originalUpdate(lang);\n            \n            const t = window.translations[lang];\n            const contentArea = document.querySelector('#legal-content');\n            \n            if (contentArea && t.sections) {\n                requestAnimationFrame(() => {\n                    contentArea.innerHTML = t.sections.map(section => \\`\n                        <div class=\"section\">\n                            <h2>\\${section.heading}</h2>\n                            <div class=\"text\">\n                                \\${section.text.split('\\\\n').map(line => \\`<p>\\${renderText(line)}</p>\\`).join('')}\n                            </div>\n                        </div>\n                    \\`).join('');\n                });\n            }\n        };\n\n        function renderText(text) {\n            return text.replace(/\\\\*\\\\*([^*]+)\\\\*\\\\*/g, '<strong>$1</strong>');\n        }\n    })();<\/script> ", '<div class="page"> <header class="header"> <div style="display: flex; align-items: center; gap: 10px;"> ', ' <a href="/" class="logoTitle" data-t="appName">', `</a> </div> <div class="langSwitcher"> <button onclick="setLanguage('en')" class="langBtn" data-lang="en" aria-label="Switch language to English">EN</button> <button onclick="setLanguage('ru')" class="langBtn" data-lang="ru" aria-label="Switch language to Russian">RU</button> </div> </header> <main class="content"> <a href="/" class="backLink" data-t="backToHome">`, '</a> <h1 class="title" data-t="title">', '</h1> <p class="lastUpdated" data-t="lastUpdated">', '</p> <div id="legal-content"> ', ' </div> </main> <footer class="footer"> <p data-t="footerText">', "</p> </footer> </div> "])), defineScriptVars({ translations }), maybeRenderHead(), renderComponent($$result2, "Image", $$Image, { "src": logoSvg, "alt": "Vasyapp Logo", "width": 32, "height": 32 }), en.appName, en.backToHome, en.title, en.lastUpdated, en.sections.map((section) => renderTemplate`<div class="section"> <h2>${section.heading}</h2> <div class="text"> ${section.text.split("\n").map((line) => renderTemplate`<p>${unescapeHTML(line.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>"))}</p>`)} </div> </div>`), en.footerText) })}`;
}, "/Users/suenot/projects/w_vasya/vasya_landing_astro/src/pages/terms.astro", void 0);

const $$file = "/Users/suenot/projects/w_vasya/vasya_landing_astro/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Terms,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
