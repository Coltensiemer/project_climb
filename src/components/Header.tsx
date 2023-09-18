
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex flex-row p-2 justify-between px-10'>
		<p className='font-bold'>LOGO</p>
      <nav className='flex flex-row'>
        <ul className='flex flex-row'>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Events
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
