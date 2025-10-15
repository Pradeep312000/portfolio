// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Skill tooltip
const tooltip = document.getElementById('skill-tooltip');
document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('mouseenter', e => {
    tooltip.textContent = skill.getAttribute('data-skill');
    tooltip.style.left = e.target.getBoundingClientRect().left + window.scrollX + 'px';
    tooltip.style.top = e.target.getBoundingClientRect().top + window.scrollY - 40 + 'px';
    tooltip.classList.remove('hidden');
  });
  skill.addEventListener('mouseleave', () => {
    tooltip.classList.add('hidden');
  });
});
