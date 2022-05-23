import { observer } from 'mobx-react-lite';
import { rootStyle } from '~/pages/vault';
import vault from '~/store/vault';
import isFile from '~/store/vault/helpers/isFile';

const VaultForm = observer(() => {
  const file = vault.selectedFile;

  if (!isFile(file)) return <div className="flex-[3]" />;

  return (
    <form style={rootStyle} className="flex-[3] flex flex-col gap-2">
      <div className="bg-gray-pale dark:bg-gray-dark p-4 flex gap-4 items-center">
        <span className="i-bi-file-earmark text-3xl" />
        <input
          className="bg-transparent flex-1 text-2xl"
          value={file.name}
          onClick={(ev) => {
            ev.currentTarget.select();
          }}
          onChange={(ev) => file.changeName(ev.currentTarget.value)}
          onBlur={() => {
            if (file.name == '') file.changeName('Untitled');
          }}
        />
      </div>
      <textarea
        value={file.text}
        onChange={(ev) => file.changeText(ev.currentTarget.value)}
        className="bg-transparent w-full h-full"
      />
    </form>
  );
});

export default VaultForm;
