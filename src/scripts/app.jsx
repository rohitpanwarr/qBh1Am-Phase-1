import React from 'react';
import { render } from 'react-dom';

import SiteBackground from './components/site-background/background.jsx';
import SiteHeader from './components/site-header/header.jsx';
import SiteContent from './components/site-content/content.jsx';
import SiteFooter from './components/site-footer/footer.jsx';

class App extends React.Component {
  render () {
    return (
      <div className="main-container">
        <SiteBackground/>
        <SiteHeader/>
        <SiteContent/>
        <SiteFooter/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('site-root'));
