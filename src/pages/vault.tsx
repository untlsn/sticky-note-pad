import VaultNav from '~/components/organisms/VaultNav';
import VaultForm from '~/components/organisms/VaultForm';

export const rootStyle = { height: 'calc(100vh - 6rem)' };

function Vault() {
  return (
    <main className="flex gap-4 px-8 pt-18">
      <VaultNav />
      <VaultForm />
    </main>
  );
}

export default Vault;
