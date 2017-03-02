import React, { Component } from 'react';
import { translate } from 'react-i18next';

import i18n from './i18n';
import logo from './logo.svg';
import './Home.css';

class Home extends Component {
  render() {
  const { t } = this.props;
  const toggle = lng => i18n.changeLanguage(lng);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>hello key: {t('hello')}</h2>
          <h2>unset: {t('unsetKey')}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{t('appName')}</h1>
        <button onClick={() => toggle('de')}>DE</button>
        <button onClick={() => toggle('en')}>EN</button>
        <button onClick={() => toggle('pl')}>PL</button>
      </div>
    );
  }
}

export default translate()(Home);
