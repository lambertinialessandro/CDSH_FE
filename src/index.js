import '@fortawesome/fontawesome-free/css/all.min.css';
import { DateTime } from 'luxon';
import ReactDOM from 'react-dom';
import App from './app/App';
import './app/assets/styles/tailwind.css';
import './i18n';

// https://patorjk.com/software/taag/#p=display&h=0&f=Tmplr&t=CDSH%0A | tmplr | Spliff
const presentation = [
	'┏┓┳┓┏┓┓┏',
	'┃ ┃┃┗┓┣┫',
	'┗┛┻┛┗┛┛┗',
	'The CDSH - CONTEMPORARY DANCE SCHOOL HAMBURG',
	DateTime.now().setLocale('en-gb').toLocaleString(DateTime.DATETIME_SHORT)
].join('\n');
console.log(presentation);

ReactDOM.render(<App />, document.getElementById('root'));
