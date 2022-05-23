interface NavPointProps {
  icon: string,
  href: string
  children: any
}

function NavPoint(props: NavPointProps) {
  return (
    <li>
      <Link to={props.href} className="flex items-center gap-2 hocus:border-b-1">
        <span className={props.icon} />
        <span>
          {props.children}
        </span>
      </Link>
    </li>
  );
}

export default NavPoint;
