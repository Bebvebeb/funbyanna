const checks = [...document.querySelectorAll('input[type="checkbox"]')];
const reset = document.querySelector('#reset');
const status = document.querySelector('#reset-status');
reset.addEventListener('click', () => {
  checks.forEach(check => { check.checked = false; });
  status.textContent = 'הסימונים אופסו';
});
checks.forEach(check => check.addEventListener('change', () => { status.textContent = ''; }));
