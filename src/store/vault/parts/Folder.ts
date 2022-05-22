import { types } from 'mobx-state-tree';
import strictType from '~/helpers/strictType';

const Folder = types.model('Folder', {
  type: strictType('folder'),
  name: '',
  root: types.string,
  children: types.array(types.string),
});

export default Folder;
