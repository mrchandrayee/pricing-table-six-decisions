const toggle=document.getElementById('billingToggle');
const monthlyLabel=document.getElementById('monthlyLabel'),yearlyLabel=document.getElementById('yearlyLabel');
let yearly=false;
function updateBilling(){
  yearly=toggle.getAttribute('aria-checked')==='true';
  monthlyLabel.classList.toggle('active',!yearly);yearlyLabel.classList.toggle('active',yearly);
  document.querySelectorAll('.plan-card').forEach(card=>{
    const price=card.querySelector('.price'),billed=card.querySelector('.billed');
    price.style.opacity='.25';
    setTimeout(()=>{price.textContent=yearly?price.dataset.year:price.dataset.month;price.style.opacity='1';},90);
    billed.innerHTML=yearly?`<span class="old-price">$${price.dataset.month}/mo</span> ${billed.dataset.billedYear}`:billed.dataset.billedMonth;
  });
}
toggle.addEventListener('click',()=>{toggle.setAttribute('aria-checked',String(toggle.getAttribute('aria-checked')!=='true'));updateBilling()});

// Default annual billing mirrors the source video: $12 / $24 / $48 per month, billed yearly.
toggle.setAttribute('aria-checked','true');updateBilling();

const feedback=document.getElementById('selectionFeedback'),toast=document.getElementById('toast');
let toastTimer;
function announce(message){feedback.textContent=message;toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2600)}
document.querySelectorAll('.plan-button').forEach(button=>button.addEventListener('click',e=>{
  e.stopPropagation();
  const card=button.closest('.plan-card'),name=card.querySelector('.plan-kicker').textContent,price=card.querySelector('.price').textContent;
  document.querySelectorAll('.plan-card').forEach(c=>c.classList.remove('selected'));
  card.classList.add('selected');
  const action=button.dataset.action;
  if(action==='Start free trial'){button.textContent='Trial selected ✓';}
  else if(action==='Get started'){button.textContent='Selected ✓';}
  else{button.textContent='Request noted ✓';}
  announce(`${name} plan selected — $${price}/mo. ${action} action confirmed.`);
}));
document.querySelectorAll('.plan-card').forEach(card=>{
 card.addEventListener('click',e=>{if(e.target.closest('button'))return;const name=card.querySelector('.plan-kicker').textContent;announce(`${name} plan details selected.`)});
 card.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target===card){e.preventDefault();announce(`${card.querySelector('.plan-kicker').textContent} plan details selected.`)}});
});
