import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .init({
    debug: true,
    resources: {
      en: {
        translation: {
          "hello": "Hello World!"
        }
      },
      de: {
        translation: {
          "hello": "Hallo Welt!"
        }
      },
      pl: {
        translation: {
          "hello": "Witaj Świecie!"
        }
      }
    }
  }, (err, t) => {
    // initialized and ready to go!
    const hw = i18next.t('hello'); // hw = 'hello world'
    console.log('hw', hw);
  });

export default i18next;
