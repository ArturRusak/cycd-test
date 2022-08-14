import { Locale } from 'src/types';

import en from './en';
import ru from './ru';

const resources: Record<Locale, Record<string, any>> = {
  [Locale.EN]: en,
  [Locale.RU]: ru,
};

export default resources;
