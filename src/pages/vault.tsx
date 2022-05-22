import VaultNav from '~/components/organisms/VaultNav';

export const rootStyle = { height: 'calc(100vh - 6rem)' };

function Vault() {
  return (
    <main className="flex gap-4 px-8 pt-18">
      <VaultNav />
      <form style={rootStyle} className="flex-[3]" />
    </main>
  );
}

export default Vault;
