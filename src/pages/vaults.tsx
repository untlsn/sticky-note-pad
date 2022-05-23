import VaultList from '~/components/organisms/VaultList';

function Vaults() {
  return (
    <main className="flex gap-4 px-8 pt-18 pb-4 min-h-screen">
      <VaultList />
      <form className="flex-[3]" />
    </main>
  );
}

export default Vaults;
