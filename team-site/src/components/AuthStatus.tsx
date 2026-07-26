// AI-REVIEW-MARKER: participant must manually remove this marker
import { useEffect, useState } from 'react';

export function AuthStatus() {
  const [user, setUser] = useState<{ name: string; picture: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/auth/me')
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error('Not authenticated');
      })
      .then((data) => {
        if (data.user) {
          setUser(data.user);
        }
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleLogout = async () => {
    // T20: Logout functionality
    await fetch('/auth/logout', { method: 'POST' });
    setUser(null);
  };

  if (loading) {
    return <div style={{ fontSize: '14px', opacity: 0.7 }}>Loading...</div>;
  }

  if (user) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img
          src={user.picture}
          alt={user.name}
          style={{ width: '32px', height: '32px', borderRadius: '50%' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '14px', fontWeight: 500 }}>{user.name}</span>
          <button
            onClick={handleLogout}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary, #64748b)',
              fontSize: '12px',
              padding: 0,
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <a
      href="/auth/google"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        background: '#fff',
        color: '#333',
        border: '1px solid #ddd',
        borderRadius: '6px',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
      }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>
      Login with Google
    </a>
  );
}
