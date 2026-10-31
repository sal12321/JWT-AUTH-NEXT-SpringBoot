import Link from 'next/link';
import "./nav.css"

export default function NavigationBar() {
  return (
    <nav className='nav'>
      <Link href="/login" className="nav-btn">
        Login
      </Link>

      <Link href="/register" className="nav-btn">
        Register
      </Link>
      <Link href="/pages" className="nav-btn">
        Test APIs
      </Link>

    </nav>
  );
}