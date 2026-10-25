/* Scoring engine, ported from the live assessment library at abdullahzarshaid.com.
   Equal-weight selected-state index. Only known answers (Operating, Partial,
   Planned, Not in place) are scored. "Not sure" and unanswered prompts are
   discovery questions, shown separately and never counted as a pass or a gap. */
(function(){
  "use strict";
  var LAB = window.ANSWER_LABELS, VAL = window.ANSWER_VALUES;
  function getTrack(id){ return (window.TRACKS || []).find(function(t){ return t.id === id; }) || null; }
  function isKnown(a){ return Object.prototype.hasOwnProperty.call(VAL, a); }
  function isAnswered(a){ return Object.prototype.hasOwnProperty.call(LAB, a); }
  function idx(items){ return items.length ? Math.round(100 * items.reduce(function(s,x){ return s + VAL[x.answer]; }, 0) / (3 * items.length)) : null; }

  function score(track, answers){
    answers = answers || {};
    var selected = track.questions.map(function(q){ return {question: q, answer: answers[q.code]}; });
    var answered = selected.filter(function(x){ return isAnswered(x.answer); });
    var known = answered.filter(function(x){ return isKnown(x.answer); });
    var areas = track.areas.map(function(area){
      var all = selected.filter(function(x){ return x.question.area === area; });
      var n = all.filter(function(x){ return isKnown(x.answer); });
      return {name: area, total: all.length, known: n.length, index: idx(n)};
    });
    var actions = selected.filter(function(x){ return ["partial","planned","absent"].indexOf(x.answer) >= 0; })
      .map(function(x){ var q = x.question; return Object.assign({}, q, {status: x.answer, rank: q.priority*10 + (x.answer==="absent"?4:x.answer==="planned"?2:1)}); })
      .sort(function(a,b){ return b.rank - a.rank || a.code.localeCompare(b.code); });
    var clarify = selected.filter(function(x){ return x.answer==="unknown" || !x.answer; })
      .map(function(x){ var q = x.question; return Object.assign({}, q, {status: x.answer || "unanswered"}); });
    return {
      total: track.questions.length, answered: answered.length, known: known.length,
      unknown: answered.length - known.length, unanswered: track.questions.length - answered.length,
      coverage: Math.round(100 * known.length / track.questions.length),
      index: idx(known), areas: areas, actions: actions, clarify: clarify
    };
  }
  function band(p){
    if (p === null) return {label:"Not scored", key:"none"};
    if (p >= 80) return {label:"Strong", key:"strong"};
    if (p >= 55) return {label:"Developing", key:"developing"};
    if (p >= 30) return {label:"Early", key:"early"};
    return {label:"Initial", key:"initial"};
  }
  window.ENGINE = {getTrack: getTrack, score: score, band: band};
})();
