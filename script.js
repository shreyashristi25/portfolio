const dossiers={
codesync:`
<h2>Project 01 — CodeSync</h2>
<div class="meta">Online Code Collaboration Platform · Spring Boot · WebSockets · Redis · MySQL · Docker — 2024</div>
<div class="tags"><span class="tag">Realtime</span><span class="tag">Microservices</span><span class="tag">OT/CRDT</span><span class="tag">Docker Sandbox</span><span class="tag">JWT/OAuth2</span></div>
<p>Browser-based collaborative coding environment — create, edit, run and review code together. Inspired by Replit / Codespaces but built as microservices with strict separation: <span class="mono">Entity → Repository → Service → Resource</span>.</p>
<h3>What it does</h3>
<ul>
<li>Live editor with syntax highlight, auto-indent, bracket matching, multi-file hierarchy</li>
<li>Real-time co-editing: live cursors, selections, shareable sessions, passwords, participant limits</li>
<li>Code execution in isolated Docker containers — Python, Java, JS, C/C++, Go, Rust, etc. — 10s / 256MB, no network</li>
<li>Git-like versioning: snapshots (SHA-256), branches, tags (v1.0.0), Myers diff, restore & compare</li>
<li>Code review: line comments, threaded replies, resolve/unresolve, @mentions</li>
<li>Roles: Guest (read-only public), Developer, Owner, Admin with audit logs & analytics</li>
</ul>
<h3>Architecture</h3>
<ul>
<li>Services: Auth/User, Project/Repository, File/Editor, Collaboration, Execution, Snapshot/Version, Review, Notification</li>
<li>Collaboration via WebSockets + Redis pub/sub; OT/CRDT for consistency</li>
<li>Execution queue — async jobs, recorded output/error/exit/mem/time</li>
<li>Auth: JWT + Google/GitHub OAuth, RBAC</li>
<li>Auto: 30-min inactive session expiry, notifications, background schedulers</li>
</ul>
<h3>Why it matters</h3>
<p>Demonstrates scalable backend, low-latency messaging and secure sandboxing — core interests in distributed systems and developer tooling.</p>
<p><a href="https://github.com/shreyashristi25" target="_blank">→ View on GitHub</a></p>
`,
kishansetu:`
<h2>Project 02 — KishanSetu</h2>
<div class="meta">Farmer-Buyer Digital Marketplace · Node.js · Express · PostgreSQL / SQLite · JWT — 2024</div>
<div class="tags"><span class="tag">Full-stack</span><span class="tag">Rural Access</span><span class="tag">REST API</span><span class="tag">Mobile-first</span></div>
<p>Web platform bridging farmers and buyers — real-time market prices, weather, crop catalog with search/filter, and secure auth — optimized for low-bandwidth rural use.</p>
<h3>Features</h3>
<ul>
<li>JWT auth (bcrypt), registration/login/profile, protected routes</li>
<li>Live market prices with trend indicators, weather updates, crop categories</li>
<li>Advanced search & location filter, responsive design (desktop/tablet/mobile)</li>
<li>RESTful API: /api/auth/register, /api/auth/login, /api/user/profile, /api/health</li>
</ul>
<h3>Stack & Trade-offs</h3>
<ul>
<li>Frontend: HTML5, CSS Grid/Flex, ES6+, Font Awesome</li>
<li>Backend: Node + Express, Neon PostgreSQL (primary) with SQLite fallback for dev, parameterized queries, CORS</li>
<li>Security: bcrypt hashing, JWT, input validation, SQL-injection protection</li>
<li>Rural-first: lightweight assets, minimal JS, works on low bandwidth</li>
</ul>
<h3>Run</h3>
<p><span class="mono">npm install → npm start → http://localhost:3000</span> — Configure Neon DB or fallback to SQLite. PM2 for production.</p>
<p><a href="https://github.com/shreyashristi25" target="_blank">→ View on GitHub</a></p>
`
};
const drawer=document.getElementById('drawer');
const backdrop=document.getElementById('backdrop');
const content=document.getElementById('drawerContent');
function open(key){
content.innerHTML=dossiers[key]||'';
drawer.classList.add('open');
backdrop.classList.add('show');
drawer.setAttribute('aria-hidden','false');
}
function close(){
drawer.classList.remove('open');
backdrop.classList.remove('show');
drawer.setAttribute('aria-hidden','true');
}
document.querySelectorAll('[data-open]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();open(el.dataset.open)}));
document.getElementById('closeDrawer').addEventListener('click',close);
backdrop.addEventListener('click',close);
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
let scale=1;
const frame=document.getElementById('resumeFrame');
const wrap=document.getElementById('frameWrap');
const preview=document.getElementById('cvPreview');
const toggle=document.getElementById('previewToggle');
if(toggle) toggle.onclick=()=>{
 const collapsed=preview.classList.contains('collapsed');
 if(collapsed){preview.classList.remove('collapsed');toggle.textContent='▾ Hide preview';}
 else{preview.classList.add('collapsed');toggle.textContent='▸ Preview resume (PDF)';}
};
const closeP=document.getElementById('closePreview');
if(closeP) closeP.onclick=()=>{preview.classList.add('collapsed');toggle.textContent='▸ Preview resume (PDF)';};
const zin=document.getElementById('zoomIn');
const zout=document.getElementById('zoomOut');
if(zin) zin.onclick=()=>{scale=Math.min(1.6,scale+.1);frame.style.transform=`scale(${scale})`};
if(zout) zout.onclick=()=>{scale=Math.max(.7,scale-.1);frame.style.transform=`scale(${scale})`};
