import { types } from 'mobx-state-tree';
import strictType from '~/helpers/strictType';

const File = types
  .model('File', {
    type: strictType('file'),
    root: types.string,
    name: 'Untitled',
    text: '',
  })
  .actions((self) => ({
    changeName(newName: string) {
      self.name = newName;
    },
  }));

export default File;
