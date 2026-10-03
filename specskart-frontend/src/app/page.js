import styles from "./page.module.css";

async function getHelloMessage() {
  try {
    // Calling the backend API
    const res = await fetch("http://localhost:8080/api/hello", { cache: 'no-store' });
    if (!res.ok) {
      return "Failed to fetch from backend";
    }
    return res.text();
  } catch (e) {
    return "Backend is not running or unreachable.";
  }
}

export default async function Home() {
  const message = await getHelloMessage();

  return (
    <div className={styles.page}>
      <main className={styles.main} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <h1 style={{ fontSize: '3rem', margin: 0 }}>Specskart</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>Welcome to the Specskart Application</p>
        
        <div style={{ 
          padding: '2rem', 
          border: '1px solid #eaeaea', 
          borderRadius: '10px', 
          backgroundColor: '#fafafa', 
          width: '100%', 
          maxWidth: '500px', 
          textAlign: 'center',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ color: '#333' }}>Backend Response:</h2>
          <p style={{ fontSize: '1.25rem', color: '#0070f3', fontWeight: 'bold', marginTop: '1rem' }}>
            {message}
          </p>
        </div>
      </main>
    </div>
  );
}
