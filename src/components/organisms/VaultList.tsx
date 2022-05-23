import vault from '~/store/vault';
import VaultPoint from '~/components/molecules/VaultPoint';

function VaultList() {
  return (
    <aside className="flex-[1] bg-gray-pale dark:bg-gray-dark rounded-xl">
      <p className="py-4 px-8 text-2xl font-bold">Vaults:</p>
      <ul>
        <O>{() => [...vault.vaults.keys()].map(((key) => (
          <VaultPoint key={key} id={key} />
        )))}
        </O>
      </ul>
    </aside>
  );
}

export default VaultList;
