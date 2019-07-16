import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';
import Theme from './Styles/Theme';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { ThemeProvider } from 'styled-components';

import { Navbar } from './Components';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <Navbar />
        {/* reset css & 기본 태그 css를 적용한다.s */}
        <GlobalStyles />

        {/* router */}
        <Router>
          <Routes />
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
