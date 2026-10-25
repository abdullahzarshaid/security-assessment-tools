/* Client-side only. Answers live in this browser (localStorage) and are never transmitted. */
(function(){
  "use strict";
  var TRACKS = window.TRACKS, E = window.ENGINE, LAB = window.STATUS_LABELS;
  var KIT = window.KIT_BASE;
  var STORE = "abz-assess-v2:";
  var home = document.getElementById("home");
  var av = document.getElementById("assess");
  var current = null, states = {};

  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[c]; }); }
  function load(id){ try{ return JSON.parse(localStorage.getItem(STORE+id)) || {}; }catch(e){ return {}; } }
  function save(id, s){ try{ localStorage.setItem(STORE+id, JSON.stringify(s)); }catch(e){} }
  var SCOLOR = {0:"var(--s-initial)",1:"var(--s-early)",2:"var(--s-developing)",3:"var(--s-strong)"};
  var BANDCOLOR = {strong:"var(--s-strong)",developing:"var(--s-developing)",early:"var(--s-early)",initial:"var(--s-initial)",none:"var(--s-none)"};

  /* ---------- home ---------- */
  function renderHome(){
    var cards = TRACKS.map(function(t){
      return '<button class="tcard" data-id="'+t.id+'">'+
        '<span class="spark"></span>'+
        '<div class="tag">'+esc(t.shortTitle)+'</div>'+
        '<h3>'+esc(t.title)+'</h3>'+
        '<p>'+esc(t.description)+'</p>'+
        '<div class="cnt">'+t.questions.length+' prompts &middot; links to remediation templates</div>'+
        '<div class="go">Start &rarr;</div></button>';
    }).join("");
    document.getElementById("cards").innerHTML = cards;
    Array.prototype.forEach.call(document.querySelectorAll(".tcard"), function(b){
      b.addEventListener("click", function(){ openTrack(b.getAttribute("data-id")); });
    });
  }

  /* ---------- assessment ---------- */
  function openTrack(id){
    current = E.getTrack(id);
    if(!current) return;
    states = load(id);
    home.style.display = "none";
    av.classList.add("on");
    window.scrollTo(0,0);
    renderAssess();
  }
  function backHome(){
    av.classList.remove("on");
    home.style.display = "";
    current = null;
    window.scrollTo(0,0);
  }
  function renderAssess(){
    var t = current;
    var areas = [];
    t.questions.forEach(function(q){ if(areas.indexOf(q.area)<0) areas.push(q.area); });
    var body = areas.map(function(area){
      var qs = t.questions.filter(function(q){ return q.area===area; });
      return '<div class="area">'+esc(area)+'</div>'+ qs.map(qRow).join("");
    }).join("");
    av.innerHTML =
      '<button class="back" id="back">&larr; All assessments</button>'+
      '<h2>'+esc(t.title)+'</h2>'+
      '<p class="sub">'+esc(t.audience)+'</p>'+
      '<div class="lim"><b>Scope.</b> '+esc(t.limitation)+'</div>'+
      '<div class="progress"><div class="pbar"><i id="pfill"></i></div>'+
        '<span class="ptext" id="ptext"></span>'+
        '<button class="btn" id="seeres" disabled>See results</button>'+
        '<button class="btn ghost" id="reset">Reset</button></div>'+
      '<div id="qbody">'+body+'</div>'+
      '<div class="res" id="res"></div>';
    document.getElementById("back").addEventListener("click", backHome);
    document.getElementById("reset").addEventListener("click", function(){
      states = {}; save(current.id, states); renderAssess();
    });
    document.getElementById("seeres").addEventListener("click", showResults);
    bindOpts();
    updateProgress();
  }
  function qRow(q){
    var opts = [0,1,2,3,"na","unreviewed"].map(function(v){
      var val = v==="unreviewed" ? "" : String(v);
      var sel = (states[q.code]!==undefined && String(states[q.code])===val) ? " sel" : "";
      var short = v==="unreviewed" ? "Unknown" : v==="na" ? "Excluded" : ["Not in place","Partly","Followed","Evidenced"][v];
      var k = v==="unreviewed" ? "skip" : v==="na" ? "n/a" : "level "+v;
      return '<button class="opt'+sel+'" data-code="'+q.code+'" data-val="'+val+'">'+esc(short)+'<span class="k">'+k+'</span></button>';
    }).join("");
    return '<div class="qrow">'+
      '<div class="code">'+esc(q.code)+'</div>'+
      '<div class="qt">'+esc(q.title)+'</div>'+
      '<details><summary>What proves it, and what to do</summary>'+
        '<div class="ev">'+
          '<div><b>Evidence:</b> '+esc(q.evidence)+'</div>'+
          '<div><b>Action:</b> '+esc(q.action)+'</div>'+
          '<div><b>Typical owner:</b> '+esc(q.owner)+'</div>'+
        '</div></details>'+
      '<div class="opts">'+opts+'</div></div>';
  }
  function bindOpts(){
    Array.prototype.forEach.call(av.querySelectorAll(".opt"), function(b){
      b.addEventListener("click", function(){
        var code = b.getAttribute("data-code"), val = b.getAttribute("data-val");
        if(val===""){ delete states[code]; }
        else if(val==="na"){ states[code] = "na"; }
        else { states[code] = parseInt(val,10); }
        save(current.id, states);
        Array.prototype.forEach.call(av.querySelectorAll('.opt[data-code="'+code+'"]'), function(x){ x.classList.remove("sel"); });
        b.classList.add("sel");
        updateProgress();
      });
    });
  }
  function answeredCount(){
    return current.questions.filter(function(q){ return states[q.code]!==undefined; }).length;
  }
  function updateProgress(){
    var done = answeredCount(), total = current.questions.length;
    var pct = Math.round(done/total*100);
    document.getElementById("pfill").style.width = pct+"%";
    document.getElementById("ptext").textContent = done+" of "+total+" answered";
    document.getElementById("seeres").disabled = done===0;
  }

  /* ---------- results ---------- */
  function showResults(){
    var s = E.summarize(current, states);
    var b = E.band(s.indexPercent);
    var dc = BANDCOLOR[b.key];
    var p = s.indexPercent===null ? 0 : s.indexPercent;
    var stats =
      stat(s.ratedCount, "Rated") + stat(s.unansweredCount, "Unknown") +
      stat(s.notApplicableCount, "Excluded") + stat(s.completionPercent+"%", "Completed");
    var bars = s.groups.map(function(g){
      var v = g.indexPercent===null?0:g.indexPercent;
      var col = g.indexPercent===null?"var(--s-none)":BANDCOLOR[E.band(g.indexPercent).key];
      var lab = g.indexPercent===null?"n/a":g.indexPercent+"%";
      return '<div class="brow"><div class="bt" title="'+esc(g.area)+'">'+esc(g.area)+'</div>'+
        '<div class="btrack"><i style="width:'+v+'%;background:'+col+'"></i></div>'+
        '<div>'+lab+'</div></div>';
    }).join("");
    var prio = s.priorities.length ? s.priorities.map(function(r){
      var link = r.kit ? '<a class="fix" href="'+KIT+esc(r.kit)+'" target="_blank" rel="noopener">Open the fix template &rarr;</a>' : "";
      return '<div class="pitem"><div class="ph">'+
        '<span class="st" style="background:'+SCOLOR[r.status]+'">'+esc(LAB[r.status])+'</span>'+
        '<span class="code">'+esc(r.code)+' &middot; '+esc(r.area)+'</span></div>'+
        '<div class="qt">'+esc(r.title)+'</div>'+
        '<div class="ax"><b>Do this:</b> '+esc(r.action)+'</div>'+
        '<div class="ax"><b>Owner:</b> '+esc(r.owner)+'</div>'+ link +'</div>';
    }).join("") : '<p style="color:var(--muted)">No rated prompt is below the routinely-followed level. Keep evidence current and re-check on a cycle.</p>';

    var res = document.getElementById("res");
    res.innerHTML =
      '<h2 style="margin-top:26px">Your readiness snapshot</h2>'+
      '<div class="score">'+
        '<div class="dial" style="--p:'+p+';--dc:'+dc+'"><div><b>'+(s.indexPercent===null?"--":s.indexPercent+"%")+'</b><small>index</small></div></div>'+
        '<div class="meta"><h3>'+esc(current.title)+'</h3>'+
          '<p><span class="pill" style="background:'+dc+'">'+esc(b.label)+'</span></p>'+
          '<p>'+s.ratedCount+' of '+s.totalCount+' prompts rated, '+s.completionPercent+'% completed.</p>'+
          '<p style="font-size:12px">'+esc(window.SCORING_NOTE)+'</p></div></div>'+
      '<div class="stats">'+stats+'</div>'+
      '<div class="bars"><h3>By area</h3>'+bars+'</div>'+
      '<div class="prio"><h3>Where to start ('+s.priorities.length+' highest-impact gap'+(s.priorities.length===1?"":"s")+')</h3>'+prio+'</div>'+
      '<div class="note"><b>Evidence status.</b> '+esc(window.EVIDENCE_NOTE)+' This is a readiness conversation starter, not an audit, a certification, or a compliance determination. '+esc(current.limitation)+'</div>'+
      '<div class="actions"><button class="btn" id="printbtn">Save as PDF</button>'+
        '<button class="btn ghost" id="topbtn">Back to prompts</button>'+
        '<a class="btn ghost" href="'+KIT+'" target="_blank" rel="noopener" style="text-decoration:none;display:inline-block">Open the GRC kit</a></div>'+
      '<p class="print-only" style="margin-top:14px;font-size:12px">Generated with the ABZSECURE security self-assessment, abdullahzarshaid.com. Self-reported; not an audit. '+new Date().toISOString().slice(0,10)+'</p>';
    res.classList.add("on");
    requestAnimationFrame(function(){
      Array.prototype.forEach.call(res.querySelectorAll(".btrack i"), function(i){ i.style.width = i.style.width; });
    });
    document.getElementById("printbtn").addEventListener("click", function(){ window.print(); });
    document.getElementById("topbtn").addEventListener("click", function(){
      res.classList.remove("on"); window.scrollTo(0,0);
    });
    res.scrollIntoView({behavior:"smooth"});
  }
  function stat(v,l){ return '<div class="stat"><b>'+v+'</b><span>'+l+'</span></div>'; }

  renderHome();
})();
