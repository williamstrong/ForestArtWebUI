import React from 'react';
import { css } from 'emotion';

import Footer from './container/Footer';
import HeaderCanvasContainer from './container/HeaderCanvasContainer';
import NavContainer from './container/NavContainer';
import PreviewContainer from './container/PreviewContainer';

const headerStyle = css({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '10%',
});

const Home = () => (
  <div>
    <div className={headerStyle}>
      <NavContainer />
      <HeaderCanvasContainer />
    </div>
    <div>
      <PreviewContainer />
    </div>
    <div>
      <Footer />
    </div>
  </div>
);

export default Home;