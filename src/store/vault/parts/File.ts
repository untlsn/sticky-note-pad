import { types } from 'mobx-state-tree';
import strictType from '~/helpers/strictType';

const File = types.model('File', {
  type: strictType('file'),
  root: types.string,
  name: '',
  text: '',
});

export default File;
