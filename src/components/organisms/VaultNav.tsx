import { rootStyle } from '~/pages/vault';

interface NavButtonProps {
  icon: string,
  alt: string
  onClick?(): void
}

function NavButton(props: NavButtonProps) {
  return (
    <li>
      <button type="button" className={`transition-opacity hocus:opacity-50 ${props.icon}`} onClick={props.onClick}>
        <span className="hidden">{props.alt}</span>
      </button>
    </li>
  );
}

function VaultNav() {
  return (
    <aside className="flex-[1] bg-gray-pale dark:bg-gray-dark rounded-xl" style={rootStyle}>
      <nav>
        <ul className="flex-center gap-8 p-4 text-3xl">
          <NavButton icon="i-bi-file-earmark-plus" alt="add file" />
          <NavButton icon="i-bi-folder-plus" alt="add folder" />
          <NavButton icon="i-bi-filter" alt="filter" />
        </ul>
      </nav>
    </aside>
  );
}

export default VaultNav;
