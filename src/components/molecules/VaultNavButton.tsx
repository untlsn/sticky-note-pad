interface VaultNavButtonProps {
  icon: string,
  alt: string
  onClick?(): void
}

function VaultNavButton(props: VaultNavButtonProps) {
  return (
    <li>
      <button type="button" className={`transition-opacity hocus:opacity-50 ${props.icon}`} onClick={props.onClick}>
        <span className="hidden">{props.alt}</span>
      </button>
    </li>
  );
}

export default VaultNavButton;
