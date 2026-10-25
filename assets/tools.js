/* Client-side security tools, wired to the SecurityEngine library from abdullahzarshaid.com.
   Everything runs locally; nothing is sent anywhere. Use non-sensitive sample data only. */
(function(){
  "use strict";
  var E = window.SecurityEngine;
  function $(id){ return document.getElementById(id); }
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[c]; }); }
  function show(el, html, isErr){ el.innerHTML = html; el.className = "result" + (isErr ? " err" : ""); }
  function run(el, fn){ try{ fn(); }catch(e){ show(el, esc(e.message || "Something went wrong."), true); } }

  /* subnet calculator */
  $("sn-go").addEventListener("click", function(){
    var out = $("sn-out");
    run(out, function(){
      var r = E.subnetInfo($("sn-in").value);
      var rows = [["Network", r.network], ["Mask", r.mask], ["Prefix", "/"+r.prefix],
        ["Usable hosts", r.hosts], ["First host", r.firstHost], ["Last host", r.lastHost],
        ["Broadcast", r.broadcast]];
      show(out, '<table class="kv">'+rows.map(function(x){ return '<tr><td>'+esc(x[0])+'</td><td>'+esc(x[1])+'</td></tr>'; }).join("")+'</table>'+
        '<p class="lead" style="margin:10px 0 0">'+esc(r.note)+'</p>');
    });
  });

  /* JWT inspector */
  $("jwt-go").addEventListener("click", function(){
    var out = $("jwt-out");
    run(out, function(){
      var r = E.inspectJWT($("jwt-in").value);
      show(out,
        '<b>Header</b><pre class="json">'+esc(JSON.stringify(r.header, null, 2))+'</pre>'+
        '<b>Payload</b><pre class="json">'+esc(JSON.stringify(r.payload, null, 2))+'</pre>'+
        '<b>Notes</b><ul class="warn">'+r.warnings.map(function(w){ return '<li>'+esc(w)+'</li>'; }).join("")+'</ul>');
    });
  });

  /* security header analyzer */
  $("hdr-go").addEventListener("click", function(){
    var out = $("hdr-out");
    run(out, function(){
      var rows = E.analyzeHeaders($("hdr-in").value);
      show(out, '<table class="kv">'+rows.map(function(h){
        return '<tr><td style="font-family:inherit">'+esc(h.name)+'<br><span class="hstatus '+esc(h.status.replace(/\s/g,"-"))+'">'+esc(h.status)+'</span></td>'+
          '<td style="font-family:inherit;color:var(--muted)">'+esc(h.note)+'</td></tr>';
      }).join("")+'</table>');
    });
  });

  /* authorization (BOLA) demo */
  $("az-go").addEventListener("click", function(){
    var out = $("az-out");
    run(out, function(){
      var r = E.authorizationDecision({actor: $("az-actor").value, resource: $("az-res").value, mode: $("az-mode").value});
      var col = r.allowed ? "var(--s-strong)" : "var(--s-initial)";
      show(out,
        '<p><span class="verdict" style="background:'+col+'">'+(r.allowed?"Allowed":"Denied")+' &middot; HTTP '+r.status+'</span></p>'+
        '<p style="margin:8px 0">'+esc(r.actor)+' requesting '+esc(r.resource)+'. '+esc(r.reason)+'</p>'+
        '<ul class="trace">'+r.trace.map(function(t){ return '<li>'+esc(t)+'</li>'; }).join("")+'</ul>');
    });
  });

  /* 5 x 5 risk matrix */
  $("risk-go").addEventListener("click", function(){
    var out = $("risk-out");
    run(out, function(){
      var r = E.riskRating(parseInt($("risk-l").value,10), parseInt($("risk-i").value,10));
      var col = r.label==="High"?"var(--s-initial)":r.label==="Moderate"?"var(--s-early)":"var(--s-strong)";
      show(out, '<p><span class="verdict" style="background:'+col+'">'+esc(r.label)+' &middot; score '+r.score+'</span></p>'+
        '<p class="lead" style="margin:8px 0 0">'+esc(r.method)+'</p>');
    });
  });
})();
