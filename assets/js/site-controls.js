document.addEventListener('DOMContentLoaded',()=>{
const buttons={fr:document.getElementById('fr-lang'),en:document.getElementById('en-lang')};
function setLang(lang){if(typeof translations === "undefined" || !translations[lang])return;document.documentElement.lang=lang;document.querySelectorAll('[data-translate]').forEach(el=>{const k=el.dataset.translate;const v=translations[lang][k];if(typeof v==='string'){if(el.matches('input,textarea'))el.placeholder=v;else el.textContent=v;}});Object.entries(buttons).forEach(([k,b])=>{if(b)b.classList.toggle('active',k===lang)});try{localStorage.setItem('sushi_lang',lang)}catch(e){}}
let lang='fr';try{lang=localStorage.getItem('sushi_lang')||'fr'}catch(e){}setLang(lang);Object.entries(buttons).forEach(([k,b])=>b?.addEventListener('click',e=>{e.preventDefault();setLang(k)}));
document.querySelectorAll('.navbar-nav a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{const collapse=document.getElementById('navbarNav');if(collapse?.classList.contains('show')&&window.bootstrap)bootstrap.Collapse.getOrCreateInstance(collapse).hide();}));
});
