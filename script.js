// Navbar scroll effect
const nav = document.getElementById('siteNav');
window.addEventListener('scroll', () => {
  if(window.scrollY > 20) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');

  // ScrollBrush movement
  const brush = document.getElementById('scrollBrush');
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const trackHeight = window.innerHeight - brush.offsetHeight;
  const scrollPercent = scrollTop / docHeight;
  brush.style.top = scrollPercent * trackHeight + 'px';

  // Scroll to Top button
  const scrollBtn = document.getElementById('scrollTopBtn');
  if(scrollTop > 200) scrollBtn.style.display = 'block';
  else scrollBtn.style.display = 'none';
});

// Scroll To Top button click
document.getElementById('scrollTopBtn').addEventListener('click', () => {
  window.scrollTo({top:0, behavior:'smooth'});
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const menuToggle2 = document.getElementById('menuToggle2');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
   menuToggle.style.display='none';
     menuToggle2.style.display='block';
});

menuToggle2.addEventListener('click', () => {
  navLinks.classList.toggle('show');
   menuToggle.style.display='block';
     menuToggle2.style.display='none';
});



// Contact form demo
function submitForm(e){
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.innerText = 'تم إرسال رسالتك بنجاح!';
  document.getElementById('contactForm').reset();
}
function resetForm(){
  document.getElementById('contactForm').reset();
  document.getElementById('formMsg').innerText = '';
}

// Initialize AOS animations
AOS.init({duration:1000, once:true});