export const getLocales = (t: (value: string) => string): { key: string; label: string }[] => [
  { key: 'en', label: t('english') },
  { key: 'vn', label: t('vietnamese') },
];
