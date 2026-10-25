/* Scoring engine. Readiness scoring engine by Abdullah Bin Zarshaid (abdullahzarshaid.com).
   Equal-weight selected-state index. Unknowns and exclusions are never scored as passes. */
window.STATUS_LABELS = {
  unreviewed: "Not reviewed / unknown",
  0: "Not in place",
  1: "Partly in place",
  2: "Documented and routinely followed",
  3: "Reviewed using evidence",
  na: "Self-declared exclusion, not validated"
};
window.STATUS_ORDER = ["unreviewed", 0, 1, 2, 3, "na"];
window.SCORING_NOTE = "Equal-weight selected-state index: the sum of numeric states divided by (rated prompts times 3). Unreviewed prompts and unvalidated exclusions are shown separately and are not scored as passes. Scores across different tracks are not comparable.";
window.EVIDENCE_NOTE = "Self-reported; no evidence uploaded or independently reviewed.";
function getTrack(id){ return (window.TRACKS || []).find(t => t.id === id) || null; }
function summarize(track, states){
  const rows = track.questions.map(qn => ({...qn, status: states[qn.code] === undefined ? null : states[qn.code]}));
  const rated = rows.filter(r => typeof r.status === "number");
  const exclusions = rows.filter(r => r.status === "na");
  const unreviewed = rows.filter(r => r.status === null);
  const idx = items => items.length ? Math.round(items.reduce((s, r) => s + r.status, 0) / (items.length * 3) * 100) : null;
  const areas = [...new Set(rows.map(r => r.area))].map(area => {
    const g = rows.filter(r => r.area === area);
    const scored = g.filter(r => typeof r.status === "number");
    return {area, rated: scored.length, total: g.length, indexPercent: idx(scored)};
  });
  return {
    totalCount: rows.length,
    ratedCount: rated.length,
    unansweredCount: unreviewed.length,
    notApplicableCount: exclusions.length,
    completionPercent: Math.round((rated.length + exclusions.length) / rows.length * 100),
    indexPercent: idx(rated),
    priorities: rated.filter(r => r.status < 2).sort((a, b) => a.status - b.status || a.code.localeCompare(b.code)).slice(0, 8),
    unreviewed, exclusions, groups: areas, rows
  };
}
function band(p){
  if (p === null) return {label: "Not scored", key: "none"};
  if (p >= 80) return {label: "Strong", key: "strong"};
  if (p >= 55) return {label: "Developing", key: "developing"};
  if (p >= 30) return {label: "Early", key: "early"};
  return {label: "Initial", key: "initial"};
}
window.ENGINE = {getTrack, summarize, band};
