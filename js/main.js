
  //Показ меню
;(function(){
  const menuIcon = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-nav');
  const wrapper = document.querySelector('.wrapper');
  const popupModal = document.querySelector('.popup-modal');

  function showMenu() {
    menuIcon.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
    wrapper.classList.toggle('_lock');
    popupModal.classList.toggle('is-active')
  }

  function closeMenu() {
    menuIcon.classList.remove('is-active');
    mobileMenu.classList.remove('is-active');
    wrapper.classList.remove('_lock');
    popupModal.classList.remove('is-active')
  }
  menuIcon.addEventListener('click', function(){
    showMenu();
  });
  
  
  popupModal.addEventListener('click', function(){
    closeMenu();
  })
  
})();
