/* Client-side only. Answers live in this browser (localStorage) and are never transmitted. */
(function(){
  "use strict";
  var TRACKS = window.TRACKS, E = window.ENGINE, LAB = window.ANSWER_LABELS, KIT = window.KIT_BASE;
  var STORE = "abz-assess-v3:";
  // display order of the five answers, and a short caption for each
  var OPTS = [
    {k:"implemented", s:"Operating",     c:"in place"},
    {k:"partial",     s:"Partial",       c:"some gaps"},
    {k:"planned",     s:"Planned",       c:"not yet"},
    {k:"absent",      s:"Not in place",  c:"missing"},
    {k:"unknown",     s:"Not sure",      c:"unknown"}
  ];
  var SCOLOR = {absent:"var(--s-initial)", planned:"var(--s-early)", partial:"var(--s-developing)"};
  var BAND = {strong:"var(--s-strong)", developing:"var(--s-developing)", early:"var(--s-early)", initial:"var(--s-initial)", none:"var(--s-none)"};
  var home = document.getElementById("home"), av = document.getElementById("assess");
  var current = null, answers = {};

  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[c]; }); }
  function load(id){ try{ return JSON.parse(localStorage.getItem(STORE+id)) || {}; }catch(e){ return {}; } }
  function save(id, a){ try{ localStorage.setItem(STORE+id, JSON.stringify(a)); }catch(e){} }

  /* ---------- home ---------- */
  function renderHome(){
    document.getElementById("cards").innerHTML = TRACKS.map(function(t){
      return '<button class="tcard" data-id="'+t.id+'">'+
        '<span class="spark"></span>'+
        '<div class="tag">'+esc(t.type)+'</div>'+
        '<h3>'+esc(t.title)+'</h3>'+
        '<p>'+esc(t.tagline)+'</p>'+
        '<div class="cnt">'+t.questions.length+' prompts &middot; about '+esc(t.minutes)+' minutes</div>'+
        '<div class="go">Start &rarr;</div></button>';
    }).join("");
    Array.prototype.forEach.call(document.querySelectorAll(".tcard"), function(b){
      b.addEventListener("click", function(){ openTrack(b.getAttribute("data-id")); });
    });
  }

  /* ---------- assessment ---------- */
  function openTrack(id){
    current = E.getTrack(id); if(!current) return;
    answers = load(id);
    home.style.display = "none"; av.classList.add("on"); window.scrollTo(0,0);
    renderAssess();
  }
  function backHome(){ av.classList.remove("on"); home.style.display = ""; current = null; window.scrollTo(0,0); }

  function renderAssess(){
    var t = current;
    var body = t.areas.map(function(area){
      var qs = t.questions.filter(function(q){ return q.area===area; });
      return '<div class="area">'+esc(area)+'</div>'+ qs.map(qRow).join("");
    }).join("");
    av.innerHTML =
      '<button class="back" id="back">&larr; All assessments</button>'+
      '<h2>'+esc(t.title)+'</h2>'+
      '<p class="sub">'+esc(t.tagline)+'</p>'+
      '<div class="lim"><b>Scope.</b> '+esc(t.limitation)+' Use references and non-sensitive summaries only; never paste credentials, client records or raw vulnerability evidence.</div>'+
      '<div class="progress"><div class="pbar"><i id="pfill"></i></div>'+
        '<span class="ptext" id="ptext"></span>'+
        '<button class="btn" id="seeres" disabled>See results</button>'+
        '<button class="btn ghost" id="reset">Reset</button></div>'+
      '<div id="qbody">'+body+'</div>'+
      '<div class="res" id="res"></div>';
    document.getElementById("back").addEventListener("click", backHome);
    document.getElementById("reset").addEventListener("click", function(){ answers = {}; save(current.id, answers); renderAssess(); });
    document.getElementById("seeres").addEventListener("click", showResults);
    bindOpts(); updateProgress();
  }
  function qRow(q){
    var opts = OPTS.map(function(o){
      var sel = answers[q.code]===o.k ? " sel" : "";
      return '<button class="opt'+sel+'" data-code="'+q.code+'" data-k="'+o.k+'">'+esc(o.s)+'<span class="k">'+esc(o.c)+'</span></button>';
    }).join("");
    return '<div class="qrow">'+
      '<div class="code">'+esc(q.code)+'</div>'+
      '<div class="qt">'+esc(q.title)+'</div>'+
      '<details><summary>What to look for, and what to do</summary>'+
        '<div class="ev"><div><b>What to look for:</b> '+esc(q.check)+'</div>'+
          '<div><b>If this is a gap:</b> '+esc(q.action)+'</div></div></details>'+
      '<div class="opts">'+opts+'</div></div>';
  }
  function bindOpts(){
    Array.prototype.forEach.call(av.querySelectorAll(".opt"), function(b){
      b.addEventListener("click", function(){
        var code = b.getAttribute("data-code"), k = b.getAttribute("data-k");
        if(answers[code]===k){ delete answers[code]; }   // click again to clear
        else { answers[code] = k; }
        save(current.id, answers);
        Array.prototype.forEach.call(av.querySelectorAll('.opt[data-code="'+code+'"]'), function(x){ x.classList.remove("sel"); });
        if(answers[code]===k) b.classList.add("sel");
        updateProgress();
      });
    });
  }
  function updateProgress(){
    var done = current.questions.filter(function(q){ return answers[q.code]!==undefined; }).length;
    var total = current.questions.length, pct = Math.round(done/total*100);
    document.getElementById("pfill").style.width = pct+"%";
    document.getElementById("ptext").textContent = done+" of "+total+" answered";
    document.getElementById("seeres").disabled = done===0;
  }

  /* ---------- results ---------- */
  function showResults(){
    var r = E.score(current, answers), b = E.band(r.index), dc = BAND[b.key];
    var p = r.index===null ? 0 : r.index;
    var stats = stat(r.known,"Rated") + stat(r.unknown,"Not sure") + stat(r.unanswered,"Unanswered") + stat(r.coverage+"%","Coverage");
    var bars = r.areas.map(function(g){
      var v = g.index===null?0:g.index, col = g.index===null?"var(--s-none)":BAND[E.band(g.index).key];
      var lab = g.index===null?"n/a":g.index+"%";
      return '<div class="brow"><div class="bt" title="'+esc(g.name)+'">'+esc(g.name)+'</div>'+
        '<div class="btrack"><i style="width:'+v+'%;background:'+col+'"></i></div><div>'+lab+'</div></div>';
    }).join("");
    var gaps = r.actions.length ? r.actions.map(function(a){
      var link = a.kit ? '<a class="fix" href="'+KIT+esc(a.kit)+'" target="_blank" rel="noopener">Open the remediation template &rarr;</a>' : "";
      return '<div class="pitem"><div class="ph">'+
        '<span class="st" style="background:'+(SCOLOR[a.status]||"var(--s-none)")+'">'+esc(LAB[a.status])+'</span>'+
        '<span class="code">'+esc(a.code)+' &middot; '+esc(a.area)+(a.priority>=3?' &middot; high priority':'')+'</span></div>'+
        '<div class="qt">'+esc(a.title)+'</div>'+
        '<div class="ax"><b>Do this:</b> '+esc(a.action)+'</div>'+ link +'</div>';
    }).join("") : '<p style="color:var(--muted)">No answered prompt is a gap. Keep the evidence current and re-check on a cycle.</p>';
    var clarify = r.clarify.length ? '<div class="prio"><h3>Find out next ('+r.clarify.length+' to confirm)</h3>'+
      r.clarify.slice(0,40).map(function(c){
        return '<div class="pitem"><div class="ph"><span class="st" style="background:var(--s-none)">'+(c.status==="unknown"?"Not sure":"Unanswered")+'</span>'+
        '<span class="code">'+esc(c.code)+' &middot; '+esc(c.area)+'</span></div>'+
        '<div class="qt">'+esc(c.title)+'</div>'+
        '<div class="ax"><b>How to check:</b> '+esc(c.check)+'</div></div>';
      }).join("") + '</div>' : "";

    var res = document.getElementById("res");
    res.innerHTML =
      '<h2 style="margin-top:26px">Your readiness snapshot</h2>'+
      '<div class="score">'+
        '<div class="dial" style="--p:'+p+';--dc:'+dc+'"><div><b>'+(r.index===null?"--":r.index+"%")+'</b><small>index</small></div></div>'+
        '<div class="meta"><h3>'+esc(current.title)+'</h3>'+
          '<p><span class="pill" style="background:'+dc+'">'+esc(b.label)+'</span></p>'+
          '<p>'+r.known+' of '+r.total+' prompts rated, '+r.coverage+'% coverage.</p>'+
          '<p style="font-size:12px">Equal-weight index: the sum of rated states over the rated prompts times three. "Not sure" and unanswered prompts are not scored. Scores across different assessments are not comparable.</p></div></div>'+
      '<div class="stats">'+stats+'</div>'+
      '<div class="bars"><h3>By area</h3>'+bars+'</div>'+
      '<div class="prio"><h3>Where to start ('+r.actions.length+' gap'+(r.actions.length===1?"":"s")+', highest priority first)</h3>'+gaps+'</div>'+
      clarify +
      '<div class="note"><b>How to read this.</b> This is a self-reported readiness conversation starter, not an audit, a certification or a compliance determination. '+esc(current.limitation)+'</div>'+
      '<div class="actions"><button class="btn" id="printbtn">Save as PDF</button>'+
        '<button class="btn ghost" id="topbtn">Back to prompts</button>'+
        '<a class="btn ghost" href="'+KIT+'" target="_blank" rel="noopener" style="text-decoration:none;display:inline-block">Open the GRC kit</a></div>'+
      '<p class="print-only" style="margin-top:14px;font-size:12px">Generated with the security self-assessment at abdullahzarshaid.com. Self-reported; not an audit. '+new Date().toISOString().slice(0,10)+'</p>';
    res.classList.add("on");
    document.getElementById("printbtn").addEventListener("click", function(){ window.print(); });
    document.getElementById("topbtn").addEventListener("click", function(){ res.classList.remove("on"); window.scrollTo(0,0); });
    res.scrollIntoView({behavior:"smooth"});
  }
  function stat(v,l){ return '<div class="stat"><b>'+v+'</b><span>'+l+'</span></div>'; }

  renderHome();
  // Deep link: index.html?pack=<id> or index.html#<id> opens that assessment directly.
  (function(){
    var p = new URLSearchParams(location.search).get("pack") || (location.hash || "").replace(/^#/, "");
    if (p && E.getTrack(p)) openTrack(p);
  })();
})();
