(function(){
'use strict';
/* ================= Translations: key|arabic|english ================= */
const T={};
`home|الرئيسية|Home
branches|الفروع|Branches
about|من نحن|About Us
loc|اختر موقعك|Choose your location
locsub|اخبرنا بموقعك للتواصل إلى أقرب فرع|Tell us your location to reach the nearest branch
login|تسجيل الدخول|Log in
logout|تسجيل الخروج|Log out
favs|المفضلة|Favorites
cart|السلة|Cart
toggle|تبديل القائمة|Toggle navigation
lang|اللغة|Language
up|للأعلى|Back to top
m_title|سجل معنا لتنفيذ طلب|Sign in to place an order
m_reg|أنشئ حسابك|Create your account
m_sub|اختر طريقة تسجيل الدخول|Choose how to log in
fb|تسجيل الدخول باستخدام فيسبوك|Log in with Facebook
gg|تسجيل الدخول باستخدام جوجل|Log in with Google
or|أو باستخدام البريد|Or use your email
email_l|أدخل بريدك|Enter your email
email_p|اكتب بريدك الإلكتروني|Enter your email address
pw_l|كلمة السر|Password
pw_p|اكتب كلمة السر|Enter your password
showpw|إظهار كلمة السر|Show password
remember|تذكرني في المرات القادمة|Remember me next time
forgot|هل نسيت كلمة المرور؟|Forgot your password?
noacc|ليس لديك حساب؟|Don't have an account?
hasacc|لديك حساب بالفعل؟|Already have an account?
signup|إنشاء حساب|Sign up
err_email|أدخل بريداً إلكترونياً صحيحاً|Enter a valid email address
err_pw|كلمة السر 6 أحرف على الأقل|Password must be at least 6 characters
close|إغلاق|Close
explore|استكشف قائمتنا|Explore our menu
best|أفضل العروض|Best Offers
new|جديدنا|What's New
all|عرض الكل|View all
offers|العروض|Offers
meals|الوجبات|Meals
sandwiches|السندوتشات|Sandwiches
juices|العصائر|Juices
addons|الإضافات|Add-ons
h1|روابط – اطلب وجباتك المفضلة|Rwabett – order your favorite meals
desc|اطلب وجباتك وساندوتشاتك وعصائرك المفضلة من أقرب فرع.|Order your favorite meals, sandwiches and juices from the nearest branch.
b_best|الأكثر طلباً|Most Ordered
b_new|جديد|New
b_offer|عرض خاص|Special Offer
min|دقيقة|min
egp|جنيه|EGP
add|أضف إلى السلة|Add to cart
plus|زيادة الكمية|Increase quantity
minus|تقليل الكمية|Decrease quantity
favadd|أضف إلى المفضلة|Add to favorites
favrm|إزالة من المفضلة|Remove from favorites
school|عروض العودة للمدارس|Back-to-School Offers
latest|آخر العروض|Latest Offers
search|ابحث هنا ..|Search here ..
empty|لا توجد نتائج|No results found
favempty|لم تضف أي منتج للمفضلة بعد|You haven't added any favorites yet
cartempty|السلة فارغة|Your cart is empty
total|الإجمالي|Total
remove|حذف|Remove
soon|هذه الصفحة قريباً|This page is coming soon
back|العودة للرئيسية|Back to home
slide|عرض|Slide
prev|السابق|Previous
next|التالي|Next
about_txt|روابط هي شركة برمجيات متكاملة مصرية تأسست عام 2017، تقدم حلول تقنية مبتكرة لتطوير البرمجيات، تصميم المواقع والتطبيقات، وخدمات التحول الرقمي.|Rwabett is an integrated Egyptian software company founded in 2017, offering innovative technology solutions for software development, website and app design, and digital transformation services.
quick|روابط سريعة|Quick Links
orders|الطلبات|Orders
contact|اتصل بنا|Contact Us
menu|القائمة|Menu
company|عن الشركة|About the Company
privacy|سياسة الخصوصية|Privacy Policy
callcenter|مركز الاتصال|Call Center
complaint|تقديم شكوى|Submit a Complaint
terms|شروط الاستخدام|Terms of Use
help|المساعدة|Help
faq|الأسئلة الشائعة|FAQ
account|الحساب|Account
deliveries|التسليمات|Deliveries
payment|الدفع|Payment
returns|الاسترجاع|Returns
rights|جميع الحقوق محفوظة|All rights reserved`.split('\n').forEach(r=>{const [k,a,e]=r.split('|');T[k]=[a,e]});

/* ================= Sample data (replace with your API) ================= */
const IMG='img/png-clipart-chicken-as-food-recipe-eating-dieting-health-health-food-plate.png';
const CITIES=[['القاهرة','Cairo'],['الجيزة','Giza'],['الإسكندرية','Alexandria'],['المنصورة','Mansoura']];
const CATS=['offers','meals','sandwiches','juices','addons'];
const CIMG={offers:39851,meals:39852,sandwiches:39853,juices:39854,addons:39855};
const P=[
{id:1,c:'sandwiches',f:'best new',n:['ساندوتش فاهيتا','Fajita Sandwich'],d:['خبز طازج مع شرائح دجاج متبّلة وخضار سوتيه','Fresh bread with seasoned chicken strips and sautéed vegetables'],p:130,m:60},
{id:2,c:'meals',f:'offer',n:['وجبة ساندوتش + بطاطس + مشروب بسعر خاص','Sandwich + Fries + Drink at a special price'],d:['ساندوتش فاهيتا مع بطاطس ومشروب','Fajita sandwich with fries and a drink'],p:100,o:130,m:60},
{id:3,c:'sandwiches',f:'best',n:['ساندوتش كريسبي دجاج','Crispy Chicken Sandwich'],d:['دجاج مقرمش مع صوص خاص وخس','Crispy chicken with special sauce and lettuce'],p:120,m:45},
{id:4,c:'meals',f:'best new',n:['وجبة دجاج مشوي','Grilled Chicken Meal'],d:['دجاج مشوي مع أرز وسلطة','Grilled chicken with rice and salad'],p:150,m:60},
{id:5,c:'juices',f:'new',n:['عصير برتقال طازج','Fresh Orange Juice'],d:['برتقال طبيعي معصور عند الطلب','Freshly squeezed natural orange'],p:45,m:15},
{id:6,c:'addons',f:'new',n:['بطاطس مقرمشة','Crispy Fries'],d:['بطاطس ذهبية مقرمشة','Golden crispy fries'],p:35,m:20},
{id:7,c:'meals',f:'offer',n:['وجبة العائلة','Family Meal'],d:['وجبة تكفي أربعة أشخاص','A meal for four people'],p:300,o:380,m:60},
{id:8,c:'juices',f:'best',n:['كوكتيل فواكه','Fruit Cocktail'],d:['مزيج فواكه موسمية طازجة','A blend of fresh seasonal fruit'],p:55,m:15}];

/* ================= State & helpers ================= */
const S={get(k,d){try{const v=localStorage.getItem('rw-'+k);return v==null?d:JSON.parse(v)}catch(e){return d}},set(k,v){try{localStorage.setItem('rw-'+k,JSON.stringify(v))}catch(e){}}};
let lang=S.get('lang','ar'),cart=S.get('cart',{}),favs=S.get('favs',[]),city=S.get('city',null),q='',qty={},mode='login';
let user=S.get('user',null);try{user=user||JSON.parse(sessionStorage.getItem('rw-user'))}catch(e){}
const $=id=>document.getElementById(id),en=()=>lang==='en';
const t=k=>(T[k]||[k,k])[en()?1:0], pn=p=>p.n[en()?1:0], has=(p,x)=>p.f.split(' ').includes(x);
const B=window.bootstrap;
const money=n=>n+' '+t('egp');

/* ================= Cards & views ================= */
function card(p,bk){
 const fv=favs.includes(p.id),qn=qty[p.id]||1;
 return `<div class="col-6 col-lg-3 mb-4"><div class="best-seller bg-white-f d-flex flex-column border-rad-16 px-3 pt-3 p-f4 gap-2 position-relative">
 <span class="badge rounded-pill bg-warning-f text-white-f position-absolute" style="inset-inline-start:14px;top:16px">${t(bk)}</span>
 <img src="${IMG}" alt="${pn(p)}" loading="lazy" decoding="async" class="w-100">
 <button type="button" class="svg-bg-1 position-absolute border-none text-white-f ${fv?'fav-on':''}" style="inset-inline-end:16px;top:16px;width:36px;height:36px" data-act="fav" data-id="${p.id}" aria-pressed="${fv}" aria-label="${t(fv?'favrm':'favadd')}"><i class="${fv?'fa-solid':'fa-regular'} fa-heart"></i></button>
 <div class="d-flex justify-content-between align-items-center gap-2"><h3 class="m-0 fsz-18 fw-bolder">${pn(p)}</h3>
 <span class="badge border-rad-30 svg-bg-1 p-1 text-white-f text-nowrap"><i class="fa-regular fa-clock"></i> ${p.m} ${t('min')}</span></div>
 <p class="m-0 fsz-14 text-sec2">${p.d[en()?1:0]}</p>
 <div class="d-flex justify-content-between align-items-center mt-auto flex-wrap gap-2">
  <span class="fsz-18 fw-bolder text-pr">${money(p.p)}${p.o?` <span class="text-sec2 fsz-14 text-decoration-line-through">${p.o}</span>`:''}</span>
  <div class="d-flex align-items-center gap-1">
   <button type="button" class="btn rounded-circle p-1" data-act="minus" data-id="${p.id}" aria-label="${t('minus')}"><i class="fa-solid fa-minus"></i></button>
   <span class="fsz-16" data-q="${p.id}" aria-live="polite">${qn}</span>
   <button type="button" class="btn rounded-circle p-1" data-act="plus" data-id="${p.id}" aria-label="${t('plus')}"><i class="fa-solid fa-plus"></i></button>
   <button type="button" class="btn btn-pr-log-f rounded-circle p-0" style="width:36px;height:36px" data-act="add" data-id="${p.id}" aria-label="${t('add')}" title="${t('add')}"><i class="fa-solid fa-cart-plus"></i></button>
  </div></div></div></div>`;
}
const bkOf=p=>has(p,'offer')?'b_offer':has(p,'best')?'b_best':'b_new';
const grid=(l,bk)=>l.length?`<div class="row">${l.map(p=>card(p,bk(p))).join('')}</div>`:`<p class="text-sec text-center py-5">${t('empty')}</p>`;
const head=(k,link)=>`<div class="d-flex justify-content-between align-items-center mb-4 pt-3"><h2 class="fsz-32 fw-bolder text-black m-0">${t(k)}</h2>${link?`<a href="${link}" class="btn btn-pr-log-f fw-bolder px-2 py-1 fsz-14">${t('all')} <i class="fa-solid fa-arrow-${en()?'right':'left'}"></i></a>`:''}</div>`;

function home(){
 const sl=[1,2,3].map(i=>`<div class="carousel-item ${i==1?'active':''}"><img src="img/Rectangle 39844.png" class="d-block w-100" alt="${t('slide')} ${i}"></div>`).join('');
 const ind=[0,1,2].map(i=>`<button type="button" data-bs-target="#hero" data-bs-slide-to="${i}" ${i?'':'class="active" aria-current="true"'} aria-label="${t('slide')} ${i+1}"></button>`).join('');
 const cats=CATS.map((k,i)=>`<div class="col-6 col-md-4 col-lg"><a href="#/menu/${k}" class="find-card ${i?'find-sec-bg':'bg-pr'} border-rad-16 pt-3 gap-2 d-flex align-items-center flex-column border-subtle-2 h-100"><span class="fsz-24 text-center fw-bolder w-100 ${i?'text-pr':'text-white-f'}">${t(k)}</span><img src="img/Rectangle ${CIMG[k]}.png" class="w-100" alt="" loading="lazy"></a></div>`).join('');
 const ban=[39845,39846,39847,39845].map((n,i)=>`<div class="col-6 col-md-3 mb-3"><a href="#/menu/offers"><img class="w-100" src="img/Rectangle ${n}.png" alt="${t('offers')} ${i+1}" loading="lazy"></a></div>`).join('');
 return `<h1 class="visually-hidden">${t('h1')}</h1>
 <div id="hero" class="carousel slide mb-3" data-bs-ride="carousel"><div class="carousel-indicators">${ind}</div><div class="carousel-inner">${sl}</div>
 <button class="carousel-control-prev" type="button" data-bs-target="#hero" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">${t('prev')}</span></button>
 <button class="carousel-control-next" type="button" data-bs-target="#hero" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">${t('next')}</span></button></div>
 <section class="p-f3"><div class="container"><h2 class="fsz-32 fw-bolder text-black mb-3">${t('explore')}</h2><div class="row g-3">${cats}</div></div></section>
 <section class="p-f3"><div class="container">${head('best','#/menu/best')}${grid(P.filter(p=>has(p,'best')).slice(0,4),()=>'b_best')}</div></section>
 <section class="p-f3 new-sec-bg"><div class="container">${head('new','#/menu/new')}${grid(P.filter(p=>has(p,'new')).slice(0,4),()=>'b_new')}</div></section>
 <section class="p-f6"><div class="container"><div class="row">${ban}</div></div></section>`;
}
function items(k){
 const m=p=>!q||pn(p).toLowerCase().includes(q.toLowerCase());
 if(k==='offers'){
  const a=P.filter(p=>has(p,'offer')&&m(p)),b=P.filter(p=>has(p,'best')&&m(p));
  if(!a.length&&!b.length)return grid([]);
  return (a.length?head('school')+grid(a,()=>'b_offer'):'')+(b.length?head('latest')+grid(b,()=>'b_best'):'');
 }
 const l=P.filter(p=>(k==='new'||k==='best')?has(p,k):p.c===k).filter(m);
 return grid(l,bkOf);
}
function menu(k){
 if(!CATS.includes(k)&&k!=='new'&&k!=='best')k='offers';
 const tabs=CATS.map(c=>`<li><a class="sch-item p-f1 ${c===k?'active-srch':''}" href="#/menu/${c}">${t(c)}</a></li>`).join('');
 return `<section class="w-100 position-relative"><div class="parallax w-100"></div>
 <div class="position-absolute top-50 start-50 translate-middle text-center p-fa1 w-100" style="z-index:1;background:rgba(255,255,255,.2)"><h1 class="fsz-20 fw-600 text-white-f m-0">${t(k)}</h1></div></section>
 <div class="bg-f1 py-3 w-100"><div class="container">
  <div class="bg-white border-rad-12 p-fa2 mb-3 d-flex flex-wrap justify-content-center align-items-center gap-3">
   <ul class="d-flex flex-wrap gap-3 p-0 m-0 list-unstyled">${tabs}</ul>
   <div class="srch-input-div d-flex align-items-center border-subtle-2 border-rad-8 p-fa3"><i class="fa-solid fa-magnifying-glass srch-icon"></i>
   <input type="search" id="srch" class="srch-input border-none" value="${q.replace(/"/g,'&quot;')}" placeholder="${t('search')}" aria-label="${t('search')}"></div></div>
  <div class="p-f3" id="items">${items(k)}</div></div></div>`;
}
const favView=()=>`<div class="container py-4"><h1 class="fsz-32 fw-bolder text-black mb-4">${t('favs')}</h1>${favs.length?grid(P.filter(p=>favs.includes(p.id)),bkOf):`<p class="text-sec text-center py-5">${t('favempty')}</p>`}</div>`;
const soon=s=>`<div class="container py-5 text-center"><h1 class="fsz-32 fw-bolder mb-3">${t(s)}</h1><p class="text-sec">${t('soon')}</p><a href="#/" class="btn btn-pr-log-f">${t('back')}</a></div>`;

/* ================= Router ================= */
let cur={v:'home',k:''};
function route(keepScroll){
 const h=location.hash.replace(/^#\/?/,'').split('/'),v=h[0]||'home',k=h[1]||'';cur={v,k};
 let html,title;
 if(v==='home'){html=home();title='home'}
 else if(v==='menu'){html=menu(k);title=(CATS.includes(k)||k==='new'||k==='best')?k:'offers';cur.k=title}
 else if(v==='favorites'){html=favView();title='favs'}
 else{const s=v==='page'?k:v;html=soon(s);title=s}
 $('app').innerHTML=html;
 document.title=t(title)+' | Rwabett';
 document.querySelectorAll('[data-route]').forEach(a=>{const on=a.dataset.route===v;a.classList.toggle('active-nav',on);a.classList.toggle('navitemhover',!on);a.classList.toggle('text-sec',!on)});
 if(B)document.querySelectorAll('#app .carousel').forEach(e=>new B.Carousel(e));
 const s=$('srch');if(s)s.addEventListener('input',()=>{q=s.value;$('items').innerHTML=items(cur.k)});
 if(!keepScroll)window.scrollTo(0,0);
 const nc=$('navbarScroll');if(B&&nc&&nc.classList.contains('show'))B.Collapse.getOrCreateInstance(nc).hide();
}

/* ================= i18n apply ================= */
function tr(){
 document.querySelectorAll('[data-i18n]').forEach(e=>e.textContent=t(e.dataset.i18n));
 ['placeholder','aria-label','title'].forEach(a=>document.querySelectorAll('[data-i18n-'+a+']').forEach(e=>e.setAttribute(a,t(e.getAttribute('data-i18n-'+a)))));
 $('langLabel').textContent=en()?'English':'عربي';
 $('locTitle').textContent=city!=null?CITIES[city][en()?1:0]:t('loc');
 $('cityMenu').innerHTML=CITIES.map((c,i)=>`<li><a class="dropdown-item" href="#" data-act="city" data-id="${i}">${c[en()?1:0]}</a></li>`).join('');
 $('authBtn').textContent=t(user?'logout':'login');
 document.querySelector('meta[name=description]').content=t('desc');
}
function setLang(l){
 lang=l;S.set('lang',l);
 const h=document.documentElement;h.lang=l;h.dir=en()?'ltr':'rtl';
 $('bs').href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.'+(en()?'':'rtl.')+'min.css';
 authUI();renderCart();route(true);
}
function authUI(){
 const r=mode==='register';
 $('mTitle').dataset.i18n=r?'m_reg':'m_title';$('mBtn').dataset.i18n=r?'signup':'login';
 $('mAsk').dataset.i18n=r?'hasacc':'noacc';$('mSwitch').dataset.i18n=r?'login':'signup';tr();
}

/* ================= Cart ================= */
function renderCart(){
 const ids=Object.keys(cart);let tot=0;
 $('cartBadge').textContent=ids.reduce((s,i)=>s+cart[i],0);$('favBadge').textContent=favs.length;
 const rows=ids.map(i=>{const p=P.find(x=>x.id==i);tot+=p.p*cart[i];
  return `<div class="d-flex align-items-center gap-2 py-2 border-subtle"><div class="flex-grow-1"><div class="fw-600 fsz-14">${pn(p)}</div><div class="fsz-14 text-sec2">${cart[i]} × ${money(p.p)}</div></div><button type="button" class="btn btn-sm" data-act="rm" data-id="${i}" aria-label="${t('remove')}"><i class="fa-solid fa-trash text-danger"></i></button></div>`}).join('');
 $('cartMenu').innerHTML=ids.length?rows+`<div class="d-flex justify-content-between fw-700 pt-3"><span>${t('total')}</span><span>${money(tot)}</span></div>`:`<p class="text-sec text-center m-0">${t('cartempty')}</p>`;
 S.set('cart',cart);S.set('favs',favs);
}

/* ================= Events ================= */
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-act]');if(!b)return;
 const a=b.dataset.act,id=+b.dataset.id;
 if(a==='plus'||a==='minus'||a==='add'){
  if(a!=='add')qty[id]=Math.max(1,(qty[id]||1)+(a==='plus'?1:-1));
  else{cart[id]=(cart[id]||0)+(qty[id]||1);qty[id]=1;renderCart()}
  document.querySelectorAll('[data-q="'+id+'"]').forEach(x=>x.textContent=qty[id]||1);
 }else if(a==='rm'){delete cart[id];renderCart()}
 else if(a==='fav'){
  const on=!favs.includes(id);favs=on?[...favs,id]:favs.filter(x=>x!==id);renderCart();
  if(cur.v==='favorites')return route(true);
  document.querySelectorAll('[data-act=fav][data-id="'+id+'"]').forEach(x=>{x.classList.toggle('fav-on',on);x.setAttribute('aria-pressed',on);x.setAttribute('aria-label',t(on?'favrm':'favadd'));x.firstChild.className=(on?'fa-solid':'fa-regular')+' fa-heart'});
 }else if(a==='lang'){e.preventDefault();setLang(b.dataset.lang)}
 else if(a==='city'){e.preventDefault();city=id;S.set('city',id);tr()}
 else if(a==='top')window.scrollTo({top:0,behavior:'smooth'});
});
window.addEventListener('hashchange',()=>route());
window.addEventListener('scroll',()=>{$('myBtn').style.display=(window.scrollY>500)?'block':'none'},{passive:true});
const nc=$('navbarScroll');
nc.addEventListener('show.bs.collapse',()=>$('tgIcon').classList.add('change'));
nc.addEventListener('hide.bs.collapse',()=>$('tgIcon').classList.remove('change'));

/* ---- auth (front-end only: connect to your backend in the submit handler) ---- */
$('authBtn').addEventListener('click',()=>{
 if(user){user=null;S.set('user',null);try{sessionStorage.removeItem('rw-user')}catch(e){}tr()}
 else if(B)B.Modal.getOrCreateInstance($('authModal')).show();
});
$('mSwitch').addEventListener('click',e=>{e.preventDefault();mode=mode==='login'?'register':'login';authUI()});
$('eye').addEventListener('click',()=>{const p=$('password'),show=p.type==='password';p.type=show?'text':'password';$('eye').firstChild.className='fa-regular fa-eye'+(show?'':'-slash')+' fsz-14 text-pr'});
$('authForm').addEventListener('submit',e=>{
 e.preventDefault();
 const em=$('email').value.trim(),pw=$('password').value;
 const okE=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em),okP=pw.length>=6;
 $('eEmail').hidden=okE;$('ePw').hidden=okP;
 if(!okE||!okP)return;
 user={email:em};
 if($('remember').checked)S.set('user',user);else{try{sessionStorage.setItem('rw-user',JSON.stringify(user))}catch(x){}}
 $('authForm').reset();tr();
 if(B)B.Modal.getOrCreateInstance($('authModal')).hide();
});

/* ================= Init ================= */
$('year').textContent=new Date().getFullYear();
document.documentElement.lang=lang;document.documentElement.dir=en()?'ltr':'rtl';
authUI();renderCart();route();
})();
