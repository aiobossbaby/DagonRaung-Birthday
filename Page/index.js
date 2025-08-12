import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!wish.trim()) {
      alert('ဆုတောင်းကို ရိုက်ထည့်ပေးပါ');
      return;
    }
    try {
      const res = await fetch('/api/wish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name || 'Anonymous', wish }),
      });
      if (res.ok) {
        setMessage('သင့်ဆုတောင်းကို ကျေးဇူးပြု၍ လက်ခံရရှိပါသည်။');
        setName('');
        setWish('');
        setTimeout(() => setMessage(''), 4000);
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      alert('ပို့ရာတွင် ပြသာနာရှိသည်။');
      console.error(error);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', color: '#FFD700', fontFamily: "'Noto Sans Myanmar', sans-serif", background: 'rgba(0,0,0,0.7)', padding: '2rem', borderRadius: '12px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>ဆရာ ဒဂုန်ရောင် မွေးနေ့ဂုဏ်ပြု & ဆုတောင်း</h1>

      <label htmlFor="name">နာမည် (optional)</label>
      <input
        id="name"
        type="text"
        placeholder="နာမည်ထည့်ပါ - မထည့်လည်းရသည်"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem', borderRadius: '6px', border: '1px solid #ab47bc', background: 'rgba(255,255,255,0.06)', color: '#FFD700' }}
      />

      <label htmlFor="wish">နမည် နှင့်ဆုမွန်တောင်း စာသား</label>
      <textarea
        id="wish"
        placeholder="သင့်ဆုတောင်းကို ဒီမှာရေးပါ..."
        value={wish}
        onChange={(e) => setWish(e.target.value)}
        rows={5}
        style={{ width: '100%', padding: '0.5rem', borderRadius: '6px', border: '1px solid #ab47bc', background: 'rgba(255,255,255,0.06)', color: '#FFD700', marginBottom: '1rem' }}
      />

      <button onClick={handleSubmit} style={{ width: '100%', padding: '0.7rem', backgroundColor: '#FFD700', color: '#000', fontWeight: '700', border: 'none', borderRadius: '10px', cursor: 'pointer' }}>
        ပို့ရန်
      </button>

      {message && <p style={{ marginTop: '1rem', textAlign: 'center', fontWeight: '700' }}>{message}</p>}
    </div>
  );
}
