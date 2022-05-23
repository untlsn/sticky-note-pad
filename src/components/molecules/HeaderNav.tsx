import NavPoint from '~/components/atoms/NavPoint';
import ThemeSwitch from '~/components/atoms/ThemeSwitch';

function HeaderNav() {
  return (
    <nav>
      <ul className="flex gap-4 items-center">
        <NavPoint href="/vaults" icon="i-bi-safe">
          Vaults
        </NavPoint>
        <NavPoint href="/settings" icon="i-bi-gear">
          Settings
        </NavPoint>
        <ThemeSwitch />
      </ul>
    </nav>
  );
}

export default HeaderNav;
