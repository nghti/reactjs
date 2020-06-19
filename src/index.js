import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { I18nextProvider } from 'react-i18next';

import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';

import AppRoutes from '@/components/Application/AppRoutes';
import route from '@/routes';
import * as serviceWorker from '@/serviceWorker';
import history from '@/utils/history';
import { store } from '@/store/configure';
import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';
import i18n from '@/i18n/i18n';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Helmet>
            <title>React Build</title>
          </Helmet>
          <GlobalStyle />
          <ToastContainer />
          <AppRoutes routes={route} />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root'),
);
serviceWorker.unregister();
