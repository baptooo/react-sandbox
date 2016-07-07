import qwest from 'qwest';
import memegenApp from './memegen';

qwest.get('api/memegen.json')
  .then((xhr, data) => {
    memegenApp(data);
  });