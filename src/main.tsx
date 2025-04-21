import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { TolgeeProvider } from '@tolgee/react';

import { Tolgee, DevTools, FormatSimple } from "@tolgee/react";

import localeEN from "../i18n/en.json";
import localeFR from "../i18n/fr.json";
import localeNL from "../i18n/nl.json";
const container = document.getElementById('root');
const root = createRoot(container!);

const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .init({
    language: 'en',

    staticData: {
      en: localeEN,
      fr: localeFR,
      nl: localeNL,
    }
  });

root.render(
  <React.StrictMode>
    <TolgeeProvider
      tolgee={tolgee}
      fallback="Loading..." // loading fallback
    >
      <App />
    </TolgeeProvider>
  </React.StrictMode>
);
