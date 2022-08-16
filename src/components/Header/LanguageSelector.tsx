import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { Locale } from 'src/types/Locale.enum';

import { useLocalStorage } from '../../hooks';

const displayLocales: Partial<Record<Locale, string>> = {
  [Locale.EN]: 'EN',
  [Locale.RU]: 'RU',
};

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [, setLanguage] = useLocalStorage('lang');
  const locales = Object.keys(displayLocales) as Locale[];

  return (
    <Box display="inline-flex">
      {locales.map((locale, i) => (
        <div key={locale}>
          <Typography
            color={i18n.language === locale ? 'yellow' : 'inherit'}
            component="span"
            fontWeight={500}
            sx={{ cursor: 'pointer' }}
            onClick={() => {
              i18n.changeLanguage(locale);
              setLanguage(locale);
            }}
          >
            {displayLocales[locale]}
          </Typography>
          {i < locales.length - 1 && (
            <Typography component="span" mx={2}>
              |
            </Typography>
          )}
        </div>
      ))}
    </Box>
  );
};

export default LanguageSelector;
