import { types } from 'mobx-state-tree';
import strictType from '~/helpers/strictType';

const File = types.model({
  type: strictType('file'),
  name: '',
  text: '',
});

export default File;
