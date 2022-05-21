interface NavPointProps {
  icon: string,
}

function NavPoint(props: NavPointProps) {
  return (
    <li className="flex items-center gap-2">
      <span className={props.icon} />
      <span>
        Vault
      </span>
    </li>
  );
}

export default NavPoint;
