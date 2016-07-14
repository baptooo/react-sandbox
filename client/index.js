import { get as ajaxGET } from 'qwest';
import App from './App';

// Hipster then
let { then } = ajaxGET('api/memegen-empty.json');

then((xhr, data) => App(data));