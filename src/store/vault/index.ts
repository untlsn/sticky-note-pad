import { types } from 'mobx-state-tree';
import { nanoid } from 'nanoid';
import Folder from '~/store/vault/parts/Folder';
import File from '~/store/vault/parts/File';

const VaultStore = types
  .model({
    // @ts-ignore
    files: types.map(types.union(File, Folder)),
  })
  .actions((self) => ({
    createFile() {
      self.files.set(nanoid(6), File.create());
    },
  }));

const vault = VaultStore.create();

export default vault;
