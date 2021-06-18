import React, {
  useContext
} from 'react';

export const fetchLanguages = async (lang: string): Promise<any> => {
  const translations = await fetch(
    `/translations/${lang}.json`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return await translations.json();
}

export interface LocalizeFunc {
  (key: string): string
}

export const Localization = React.createContext<any>(null); // LocalizeFunc

export function useLocalization() {
  return useContext(Localization);
}
