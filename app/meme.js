import qwest from 'qwest';
import memegenApp from './memegen';

qwest.get('api/memegen-empty.json')
  .then((xhr, data) => {
    memegenApp(data);
  });