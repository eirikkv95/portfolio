import React, { useContext } from 'react';

import { I18nContext } from '../context/languageContext';

export default function LanguageSelect(props) {
  const { langCode, dispatch } = useContext(I18nContext);

  const onLanguageSelect = (e) =>
    dispatch({ type: 'setLanguage', payload: e.target.value });

  const renderOption = (code) => {
    return (
      <option value={code} defaultValue={code === langCode}>
        {code}
      </option>
    );
  };

  return (
    <select defaultValue={renderOption('en')} onChange={onLanguageSelect}>
      {renderOption('en')}
      {renderOption('no')}
    </select>
  );
}
