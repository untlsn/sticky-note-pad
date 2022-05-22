import { types } from 'mobx-state-tree';

const Vault = types.model('Vault', {
  name: types.string,
  children: types.array(types.string),
});

export default Vault;
