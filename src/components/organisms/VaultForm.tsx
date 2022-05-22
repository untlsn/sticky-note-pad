import { rootStyle } from '~/pages/vault';

function VaultForm() {
  return (
    <form style={rootStyle} className="flex-[3]">
      <div className="bg-gray-pale dark:bg-gray-dark p-4 flex gap-4 items-center">
        <span className="i-bi-file-earmark text-3xl" />
        <input className="bg-transparent focus:outline-none flex-1 text-2xl" />
      </div>
      <div>
        <textarea className="bg-transparent" />
      </div>
    </form>
  );
}

export default VaultForm;
