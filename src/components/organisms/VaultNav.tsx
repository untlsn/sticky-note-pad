import { rootStyle } from '~/pages/vault';
import vault from '~/store/vault';

interface NavButtonProps {
  icon: string,
  alt: string
  onClick?(): void
}

function NavButton(props: NavButtonProps) {
  return (
    <li>
      <button type="button" className={`transition-opacity hocus:opacity-50 ${props.icon}`} onClick={props.onClick}>
        <span className="hidden">{props.alt}</span>
      </button>
    </li>
  );
}

const isSelected = (fileID: string) => vault.selected.file == fileID;

function VaultNav() {
  return (
    <aside className="flex-[1] bg-gray-pale dark:bg-gray-dark rounded-xl" style={rootStyle}>
      <nav>
        <ul className="flex-center gap-8 p-4 text-3xl">
          <NavButton
            icon="i-bi-file-earmark-plus"
            alt="add file"
            onClick={() => {
              vault.createFile();
            }}
          />
          <NavButton
            icon="i-bi-folder-plus"
            alt="add folder"
          />
          <NavButton
            icon="i-bi-filter"
            alt="filter"
          />
        </ul>
      </nav>
      <div className="text-2xl font-bold px-6 py-4 capitalize">
        <O>{() => (
          vault.selectedVault.name
        )}
        </O>
      </div>
      <ul className="space-y-2">
        <O>{() => vault.selectedVault?.children.map((fileID) => {
          const setSelected = () => vault.selected.setFile(fileID);

          return (
            <li key={fileID}>
              <button
                className={`w-full text-left px-10 py-1  ${isSelected(fileID) ? 'bg-black/5 dark:bg-black/70' : ''}`}
                type="button"
                onClick={setSelected}
              >
                {vault.files.get(fileID)?.name}
              </button>
            </li>
          );
        })}
        </O>
      </ul>
    </aside>
  );
}

export default VaultNav;
