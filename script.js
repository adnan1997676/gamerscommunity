document.addEventListener('DOMContentLoaded', function() {
  // عدّاد الأرقام
  function animateCounters() {
    const counters = document.querySelectorAll('.number');
    const speed = 150; // سرعة التعداد
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }

  // تفعيل الأسئلة الشائعة
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      item.classList.toggle('active');
    });
  });

  // تشغيل العداد عند ظهور قسم الأرقام
  window.addEventListener('scroll', function onScroll() {
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
      const sectionPosition = statsSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      if (sectionPosition < screenPosition) {
        animateCounters();
        window.removeEventListener('scroll', onScroll);
      }
    }
  });

  // وظائف مودال تسجيل الدخول
  const loginBtn = document.getElementById('loginBtn');
  const loginModal = document.getElementById('loginModal');
  const closeModal = document.getElementById('closeModal');

  loginBtn.addEventListener('click', function() {
    loginModal.style.display = 'block';
  });

  closeModal.addEventListener('click', function() {
    loginModal.style.display = 'none';
  });

  // إغلاق المودال عند النقر خارج المحتوى
  window.addEventListener('click', function(e) {
    if (e.target == loginModal) {
      loginModal.style.display = 'none';
    }
  });

  // مثال للتعامل مع نموذج تسجيل الدخول
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // هنا يمكنك إضافة منطق تسجيل الدخول (مثلاً التحقق من البريد والرقم)
    alert("تم تسجيل الدخول بنجاح!");
    loginModal.style.display = 'none';
  });

  // مثال لزر "تسجيل جديد" (يمكنك توجيهه لصفحة التسجيل)
  const signupBtn = document.getElementById('signupBtn');
  signupBtn.addEventListener('click', function() {
    // يمكنك استبدال الرابط أدناه برابط صفحة التسجيل الخاصة بك.
    window.location.href = "signup.html";
  });
});
