import Link from 'next/link';

export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>JWT Auth</h1>
        <p style={styles.subtitle}>Spring Boot and  Next.js Authentication</p>

        <div style={styles.navGroup}>
          <Link href="/login" style={styles.btnPrimary}>
            Login
          </Link>
          <Link href="/register" style={styles.btnSecondary}>
            Register
          </Link>
          <Link href="/pages" style={styles.btnSecondary}>
            Test APIs 
          </Link>
        </div>
      </div>
    </main>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    padding: '1rem',
  },
  card: {
    width: '100%',
    maxWidth: '380px',
    padding: '2.5rem',
    backgroundColor: '#ffffff',

   
    textAlign: 'center',
  },
  title: {
    margin: '0 0 0.5rem',
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#0f172a',
  },
  subtitle: {
    margin: '0 0 2rem',
    fontSize: '0.95rem',
    color: '#64748b',
  },
  navGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  btnPrimary: {
    display: 'block',
    padding: '0.75rem',
    backgroundColor: '#0f172a',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '0.95rem',
  },
  btnSecondary: {
    display: 'block',
    padding: '0.75rem',
    backgroundColor: '#0f172a',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '0.95rem',
  },
  btnOutline: {
    display: 'block',
    padding: '0.75rem',
    backgroundColor: 'transparent',
    color: '#334155',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '0.95rem',
  },
};