import Link from 'next/link';

export default function NavigationBar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', justifyContent: "center" , gap : "1rem" }}>
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