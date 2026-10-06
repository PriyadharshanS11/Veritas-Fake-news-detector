import React from 'react';

export default function CredibilityGauge({ score, isFake, verdict, isScanning }) {
  const clampedScore = Math.min(Math.max(score, 0), 100);
  const strokeDashoffset = 440 - (440 * clampedScore) / 100;

  const color = "#ffffff";
  const glow = "drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))";

  return (
    <div className="gauge-container glass-card">
      <div className="gauge-wrapper">
        <svg className="gauge-svg" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            className="gauge-bg-circle"
          />
          <circle
            cx="80"
            cy="80"
            r="70"
            className="gauge-progress-circle"
            style={{
              stroke: color,
              strokeDashoffset: isScanning ? 220 : strokeDashoffset,
              filter: glow
            }}
          />
        </svg>

        <div className="gauge-center-content">
          {isScanning ? (
            <div className="scanning-pulse">
              <span className="scan-text" style={{ fontSize: '12px', fontWeight: '700', color: '#a3a3a3' }}>
                SCANNING AI DATA...
              </span>
            </div>
          ) : (
            <>
              <div className="score-number" style={{ color: '#ffffff' }}>
                {clampedScore}%
              </div>
              <div className="score-label">CREDIBILITY SCORE</div>
            </>
          )}
        </div>
      </div>

      {!isScanning && verdict && (
        <div className="verdict-badge-box">
          {isFake ? '⚠️ ' : '🛡️ '}
          {verdict}
        </div>
      )}
    </div>
  );
}
