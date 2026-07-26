import { releaseReadinessItems } from '../data/releaseReadiness';

// AI-REVIEW-MARKER: participant must manually remove this marker
export function ReleaseReadiness() {
  return (
    <section className="panel" id="release-readiness">
      <div className="panelHeader">
        <div>
          <p className="eyebrow">Release readiness</p>
          <h2>T11 readiness checks</h2>
        </div>
        <span>{releaseReadinessItems.length} checks</span>
      </div>
      <ul>
        {releaseReadinessItems.map((item) => (
          <li key={item.label}>
            {item.label}: {item.status}
          </li>
        ))}
      </ul>
    </section>
  );
}
