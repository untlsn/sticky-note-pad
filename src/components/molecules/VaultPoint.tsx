import { observer } from 'mobx-react-lite';
import vault from '~/store/vault';

const isSelected = (vaultID: string) => vault.selected.vault == vaultID;

interface VaultPointProps {
  id: string
}

const VaultPoint = observer((props: VaultPointProps) => {
  const thisVault = vault.vaults.get(props.id);

  return (
    <li>
      <button type="button" className={`w-full text-left px-10 py-1 ${isSelected(props.id) ? 'bg-black/5 dark:bg-black/70' : ''}`}>
        {thisVault?.name}
      </button>
    </li>
  );
});

export default VaultPoint;
