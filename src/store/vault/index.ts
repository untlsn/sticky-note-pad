import { types } from 'mobx-state-tree';
import { nanoid } from 'nanoid';
import makeInspectable from 'mobx-devtools-mst';
import Folder from '~/store/vault/parts/Folder';
import File from '~/store/vault/parts/File';
import Vault from '~/store/vault/parts/Vault';

const Selected = types.model('Selected', {
  vault: '',
  file: '',
});

const VaultStore = types
  .model('VaultStore', {
    vaults: types.map(Vault),
    files: types.map(types.union(File, Folder)),
    selected: Selected,
  })
  .views((self) => ({
    get selectedVault() {
      return self.vaults.get(self.selected.vault);
    },
  }))
  .actions((self) => ({
    createFile() {
      const { vault } = self.selected;
      self.files.set(nanoid(), File.create({ root: vault }));
    },
    createVault(name: string) {
      const id = nanoid();
      self.vaults.set(id, Vault.create({ name }));
      if (self.vaults.size == 1) {
        self.selected.vault = id;
      }
    },
  }));

const vault = VaultStore.create({
  selected: Selected.create(),
});
vault.createVault('default vault');
makeInspectable(vault);

export default vault;
