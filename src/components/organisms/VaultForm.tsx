import { rootStyle } from '~/pages/vault';
import vault from '~/store/vault';
import isFile from '~/store/vault/helpers/isFile';

function VaultForm() {
  return (
    <form style={rootStyle} className="flex-[3]">
      <div className="bg-gray-pale dark:bg-gray-dark p-4 flex gap-4 items-center">
        <span className="i-bi-file-earmark text-3xl" />
        <O>{() => {
          const file = vault.selectedFile;
          return isFile(file) && (
            <input
              className="bg-transparent focus:outline-none flex-1 text-2xl"
              value={file.name}
              onChange={(ev) => file.changeName(ev.currentTarget.value)}
              onBlur={() => {
                if (file.name == '') file.changeName('Untitled');
              }}
            />
          );
        }}
        </O>
      </div>
      <div>
        <textarea className="bg-transparent" />
      </div>
    </form>
  );
}

export default VaultForm;
