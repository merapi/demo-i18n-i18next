import i18next from 'i18next';

i18next.init({
  lng: 'pl',
  resources: {
    en: {
      translation: {
        "hello": "hello world!"
      }
    },
    pl: {
      translation: {
        "hello": "witaj świecie!"
      }
    }
  }
}, (err, t) => {
  // initialized and ready to go!
  const hw = i18next.t('hello'); // hw = 'hello world'
  console.log('hw', hw);
});

export default i18next;
