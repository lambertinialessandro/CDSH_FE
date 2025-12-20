import '@fortawesome/fontawesome-free/css/all.min.css';

import axios from 'axios';
import { DateTime } from 'luxon';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './i18n';
import './styles/index.css';

const presentation = [
  '┏┓┳┓┏┓┓┏',
  '┃ ┃┃┗┓┣┫',
  '┗┛┻┛┗┛┛┗',
  'The CDSH - CONTEMPORARY DANCE SCHOOL HAMBURG',
  DateTime.now().setLocale('en-gb').toLocaleString(DateTime.DATETIME_SHORT),
].join('\n');
console.log(presentation);

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
