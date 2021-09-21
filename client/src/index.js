import ReactDOM from 'react-dom';

import { ThemeProvider } from '@mui/material';
import theme from './theme';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

