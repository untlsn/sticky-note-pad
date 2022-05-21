import { Link } from 'react-router-dom';
import HeaderNav from '~/components/molecules/HeaderNav';

function Header() {
  return (
    <header className="fixed bg-black text-white h-16 w-screen flex items-center px-8 text-xl font-bold">
      <h1 className="flex-1">
        <Link to="/">
          Sticky note pad
        </Link>
      </h1>
      <HeaderNav />
    </header>
  );
}

export default Header;
