import { observer } from 'mobx-react-lite';
import vault from '~/store/vault';
import isFolder from '~/store/vault/helpers/isFolder';

const isSelected = (fileID: string) => vault.selected.file == fileID;

interface VaultFileProps {
  id: string
}

const VaultFile = observer((props: VaultFileProps) => {
  const setSelected = () => vault.selected.setFile(props.id);
  const file = vault.files.get(props.id);

  return (
    <li className="relative">
      {isFolder(file) && (
        <button
          type="button"
          className={`absolute inset-y-0 left-4 my-auto i-bi-caret-right-fill transition-transform ${
            file.isOpen ? 'rotate-90' : ''}`}
          onClick={file.switchOpen}
        >
          <span className="hidden">Open folders</span>
        </button>
      )}
      <button
        className={`w-full text-left px-10 py-1  ${isSelected(props.id) ? 'bg-black/5 dark:bg-black/70' : ''}`}
        type="button"
        onClick={setSelected}
      >
        {file?.name}
      </button>
    </li>
  );
});

export default VaultFile;
