// Tiny progressive-enhancement script: mobile menu, reveal-on-scroll, form submit.
const doc = document;

// Mobile menu
const btn = doc.querySelector<HTMLButtonElement>('.menu-btn');
const mnav = doc.getElementById('mobile-nav');
btn?.addEventListener('click', () => {
  const open = mnav!.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
  btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

// Reveal on scroll (CSS only hides when .js is set and reduced-motion is off)
const rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
const els = doc.querySelectorAll('.reveal');
if (rm || !('IntersectionObserver' in window)) {
  els.forEach((e) => e.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  els.forEach((e) => io.observe(e));
}

// Forms
doc.querySelectorAll<HTMLFormElement>('form[data-sp-form]').forEach((form) => {
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const em = form.querySelector<HTMLInputElement>('[data-emergency]');
  const emMsg = form.querySelector<HTMLElement>('[data-emergency-msg]');
  em?.addEventListener('change', () => emMsg?.classList.toggle('show', em.checked));

  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    status.className = 'form-status';
    let valid = true;
    form.querySelectorAll<HTMLInputElement>('[required]').forEach((i) => {
      const ok = i.value.trim().length > 0;
      i.closest('.field')?.classList.toggle('invalid', !ok);
      i.setAttribute('aria-invalid', String(!ok));
      if (!ok && valid) { valid = false; i.focus(); }
    });
    if (!valid) return;

    const data = new FormData(form);
    if (data.get('_gotcha')) return; // bot
    const endpoint = form.dataset.endpoint || '';
    const mailto = () => {
      const body = [...data.entries()].filter(([k]) => k !== '_gotcha')
        .map(([k, v]) => `${k.replace('_', ' ')}: ${v}`).join('\n');
      location.href = `mailto:${form.dataset.mailto}?subject=${encodeURIComponent('Service request from website')}&body=${encodeURIComponent(body)}`;
      status.className = 'form-status ok';
      status.textContent = 'Opening your email app with your request. If nothing opens, please call us.';
    };
    if (!endpoint || endpoint.includes('REPLACE_ME')) { mailto(); return; }
    const submit = form.querySelector<HTMLButtonElement>('button[type=submit]')!;
    submit.disabled = true;
    try {
      const res = await fetch(endpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      status.className = 'form-status ok';
      status.textContent = 'Thank you. We received your request and will call you back. For an emergency, call now.';
    } catch {
      mailto();
    } finally { submit.disabled = false; }
  });
});
