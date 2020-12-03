import React, { useReducer } from 'react';

import EN from '../languages/en.json';
import NO from '../languages/no.json';

// To make it easier to read from json files

const translations = {
  en: EN,
  no: NO,
};

const getTranslate = (langCode) => (key) => translations[langCode][key] || key;

const initialState = {
  langCode: 'en',
  translate: getTranslate('en'),
};

export const I18nContext = React.createContext(initialState);

export const I18nContextProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'setLanguage':
        return {
          langCode: action.payload,
          translate: getTranslate(action.payload),
        };
      default:
        return { ...initialState };
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <I18nContext.Provider value={{ state, dispatch }}>
      {children}
    </I18nContext.Provider>
  );
};
