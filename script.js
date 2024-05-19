document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#212529';
    } else {
      navbar.style.backgroundColor = '#343a40';
    }
  });

  const navLinks = document.querySelectorAll('nav ul li a');
  
  navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
      this.style.color = '#ff6347';
    });
    
    link.addEventListener('mouseout', function() {
      this.style.color = '';
    });
  });
});
