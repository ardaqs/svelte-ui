export interface Language {
  code: string;
  name: string;
  disabled?: boolean;
};

export const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
  { code: 'kk', name: 'Qazaq', disabled: true },
  { code: 'kk-Cyrl', name: 'Қазақ', disabled: true },
];
