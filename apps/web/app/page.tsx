import React from 'react';

const stats = [
  { label: 'Candidatos aptos', value: '24' },
  { label: 'Puntuación media', value: '81.4' },
  { label: 'Vacantes abiertas', value: '8' },
  { label: 'Procesos activos', value: '12' },
];

const ranking = [
  { name: 'Ana García', score: 96, status: 'Shortlisted' },
  { name: 'Luis Ramírez', score: 91, status: 'Shortlisted' },
  { name: 'Sofía Torres', score: 88, status: 'In Review' },
  { name: 'Mateo Díaz', score: 85, status: 'In Review' },
];

export default function HomePage() {
  return (
    <main style={{ padding: '32px', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <div>
            <div style={{ fontSize: 12, color: '#64748b', textTransform: 'uppercase', letterSpacing: 1.2 }}>ATS AI Platform</div>
            <h1 style={{ margin: '8px 0 0', fontSize: 32 }}>Dashboard de reclutamiento</h1>
          </div>
          <button style={{ background: '#0f172a', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 16px', cursor: 'pointer' }}>
            Nueva vacante
          </button>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32 }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: 20, boxShadow: '0 4px 12px rgba(15,23,42,0.04)' }}>
              <div style={{ fontSize: 13, color: '#64748b' }}>{stat.label}</div>
              <div style={{ fontSize: 34, fontWeight: 700, marginTop: 10 }}>{stat.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
          <section style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: 20 }}>
            <h2 style={{ marginTop: 0, marginBottom: 16 }}>Ranking de candidatos</h2>
            {ranking.map((candidate, index) => (
              <div key={candidate.name} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: index !== ranking.length - 1 ? '1px solid #e2e8f0' : 'none', padding: '12px 0' }}>
                <div>
                  <div style={{ fontWeight: 700 }}>#{index + 1} {candidate.name}</div>
                  <div style={{ color: '#64748b', fontSize: 14 }}>{candidate.status}</div>
                </div>
                <div style={{ fontSize: 28, fontWeight: 700 }}>{candidate.score}</div>
              </div>
            ))}
          </section>

          <aside style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: 20 }}>
            <h2 style={{ marginTop: 0 }}>Distribución</h2>
            {[
              { label: '90-100', count: 6, color: '#10b981', width: '60%' },
              { label: '75-89', count: 11, color: '#3b82f6', width: '72%' },
              { label: '60-74', count: 5, color: '#f59e0b', width: '40%' },
              { label: '0-59', count: 2, color: '#ef4444', width: '18%' },
            ].map((group) => (
              <div key={group.label} style={{ marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#475569', marginBottom: 6 }}>
                  <span>{group.label}</span>
                  <span>{group.count}</span>
                </div>
                <div style={{ height: 8, background: '#e2e8f0', borderRadius: 999 }}>
                  <div style={{ height: '100%', width: group.width, background: group.color, borderRadius: 999 }} />
                </div>
              </div>
            ))}
          </aside>
        </div>
      </div>
    </main>
  );
}
