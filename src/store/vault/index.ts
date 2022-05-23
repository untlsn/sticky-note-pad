import { types } from 'mobx-state-tree';
import { nanoid } from 'nanoid';
import makeInspectable from 'mobx-devtools-mst';
import Folder from '~/store/vault/parts/Folder';
import File from '~/store/vault/parts/File';
import Vault from '~/store/vault/parts/Vault';

const Selected = types
  .model('Selected', {
    vault: '',
    file: '',
  })
  .actions((self) => ({
    setFile(fileID: string) {
      self.file = fileID;
    },
  }));

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
    get selectedFile() {
      return self.files.get(self.selected.file);
    },
  }))
  .actions((self) => ({
    createFile() {
      const vaultID = self.selected.vault;
      const newID = nanoid();

      self.files.set(newID, File.create({ root: vaultID }));
      self.selectedVault?.children?.push?.(newID);
      self.selected.file = newID;
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
