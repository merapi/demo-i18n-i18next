import i18next from 'i18next';

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        "key": "hello world"
      }
    }
  }
}, (err, t) => {
  // initialized and ready to go!
  const hw = i18next.t('key'); // hw = 'hello world'
  console.log('hw', hw);
});

export default i18next;
