// Macar Intelligence — navigation and reveal animations. No tracking or browser storage.
(() => {
const toggle = document.getElementById('mobileToggle');
const nav = document.getElementById('mainnav');
const isPl=document.documentElement.lang==='pl';
const text=isPl?{open:'Otwórz menu',close:'Zamknij menu'}:{open:'Open menu',close:'Close menu'};
if(toggle && nav){
  toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?text.close:text.open);});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label',text.open);}));
}
const els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target);}}),{threshold:0.08});els.forEach(el=>observer.observe(el));}
else{els.forEach(el=>el.classList.add('show'));}
})();
