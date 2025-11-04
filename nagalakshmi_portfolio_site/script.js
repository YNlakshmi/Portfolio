
// Small interactive touches
document.addEventListener('DOMContentLoaded', function(){
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(a=> a.addEventListener('click', function(e){
    e.preventDefault();
    const id = this.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  }));
});
