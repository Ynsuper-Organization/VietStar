document.addEventListener('DOMContentLoaded', function(){
  // Form handling
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var phone = document.getElementById('phone') ? document.getElementById('phone').value.trim() : '';
      var message = document.getElementById('message').value.trim();
      var alertEl = document.getElementById('formAlert');
      
      if(!name || !email || !message){
        alertEl.style.display='block';
        alertEl.className='form-alert alert-danger';
        alertEl.textContent='Vui lòng điền đầy đủ thông tin bắt buộc.';
        return;
      }
      
      // Validate email
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRegex.test(email)){
        alertEl.style.display='block';
        alertEl.className='form-alert alert-danger';
        alertEl.textContent='Vui lòng nhập email hợp lệ.';
        return;
      }
      
      // Success message
      alertEl.style.display='block';
      alertEl.className='form-alert alert-success';
      alertEl.textContent='Cảm ơn! Thông tin của bạn đã được gửi. Chúng tôi sẽ liên hệ lại sớm nhất.';
      form.reset();
      
      // Clear alert after 5 seconds
      setTimeout(function(){
        alertEl.style.display='none';
      }, 5000);
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        target.scrollIntoView({behavior: 'smooth'});
      }
    });
  });

  // Add animation on scroll
  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe cards for animation
  document.querySelectorAll('.card, .service-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
