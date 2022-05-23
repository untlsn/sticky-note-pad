import { rootStyle } from '~/pages/vault';
import vault from '~/store/vault';
import VaultNavButton from '~/components/molecules/VaultNavButton';
import VaultFile from '~/components/molecules/VaultFile';

function VaultNav() {
  return (
    <aside className="flex-[1] bg-gray-pale dark:bg-gray-dark rounded-xl" style={rootStyle}>
      <nav>
        <ul className="flex-center gap-8 p-4 text-3xl">
          <VaultNavButton
            icon="i-bi-file-earmark-plus"
            alt="add file"
            onClick={vault.createFile}
          />
          <VaultNavButton
            icon="i-bi-folder-plus"
            alt="add folder"
            onClick={vault.createFolder}
          />
          <VaultNavButton
            icon="i-bi-filter"
            alt="filter"
          />
        </ul>
      </nav>
      <div className="text-2xl font-bold px-6 py-4 capitalize">
        <O>{() => (
          vault.selectedVault?.name
        )}
        </O>
      </div>
      <ul className="space-y-2">
        <O>{() => vault.selectedVault?.children?.map?.((fileID) => (
          <VaultFile key={fileID} id={fileID} />
        ))}
        </O>
      </ul>
    </aside>
  );
}

export default VaultNav;
