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
    <main style={{ padding: '32px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: 36, marginBottom: 8 }}>ATS AI Platform</h1>
        <p style={{ marginBottom: 32, color: '#475569' }}>
          Dashboard de reclutamiento con ranking, filtros, IA explicable y trazabilidad.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 32 }}>
          {stats.map((stat) => (
            <div key={stat.label} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 16, padding: 20 }}>
              <div style={{ fontSize: 14, color: '#64748b' }}>{stat.label}</div>
              <div style={{ fontSize: 32, fontWeight: 700, marginTop: 8 }}>{stat.value}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 16, padding: 20 }}>
          <h2 style={{ marginTop: 0 }}>Ranking de candidatos</h2>
          <div style={{ display: 'grid', gap: 12 }}>
            {ranking.map((candidate, index) => (
              <div key={candidate.name} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0', paddingBottom: 12 }}>
                <div>
                  <div style={{ fontWeight: 700 }}>#{index + 1} {candidate.name}</div>
                  <div style={{ color: '#64748b', fontSize: 14 }}>{candidate.status}</div>
                </div>
                <div style={{ fontSize: 28, fontWeight: 700 }}>{candidate.score}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
