import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeContextProvider } from './theme/ThemeContextProvider';
import { BrowserRouter as Router } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './state/store';
import ArticleModal from './components/ArticleModal';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ThemeContextProvider>
      <Router>
        <App />
        <ArticleModal />
      </Router>
    </ThemeContextProvider>
  </Provider>
);
