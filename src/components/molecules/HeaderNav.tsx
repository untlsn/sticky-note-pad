import NavPoint from '~/components/atoms/NavPoint';
import ThemeSwitch from '~/components/atoms/ThemeSwitch';

function HeaderNav() {
  return (
    <nav>
      <ul className="flex gap-4 items-center">
        <NavPoint icon="i-bi-safe" />
        <NavPoint icon="i-bi-gear" />
        <ThemeSwitch />
      </ul>
    </nav>
  );
}

export default HeaderNav;
