document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Simple mobile nav toggle
const navContainer = document.querySelector('nav .container');
const toggleBtn = document.createElement('button');
toggleBtn.innerHTML = '☰';
toggleBtn.style.cssText = 'display:none; font-size:24px; background:none; border:none; color:#0d47a1; cursor:pointer;';
navContainer.prepend(toggleBtn);

toggleBtn.addEventListener('click', () => {
  const links = navContainer.querySelectorAll('a');
  links.forEach(link => link.style.display = link.style.display === 'block' ? 'none' : 'block');
});

// Show toggle on mobile
if (window.innerWidth <= 768) {
  toggleBtn.style.display = 'block';
  navContainer.querySelectorAll('a').forEach(link => link.style.display = 'none');
}
