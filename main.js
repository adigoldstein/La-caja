// Google maps feature:

function initMap() {
  var uluru = {lat: -34.589973, lng: -58.443546};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

function scrollFunction(backToTopBtn) {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

function chatClickHandler(chatPopup,xChat) {
  chatPopup.style.display = 'flex';
  let timeLeft = 10;
  const downloadTimer = setInterval(function () {
    timeLeft--;
    document.getElementById("countdowntimer").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(downloadTimer);
      xChat.style.display = 'block';
      document.querySelector('#countdowntimer').style.display = 'none';

    }
  }, 1000);
}




function initPage() {

  //   Scroll
  const backToTopBtn = document.querySelector('.backto-top');
  window.onscroll = ()=> {
    scrollFunction(backToTopBtn)
  };

  backToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  //  Chat
  const bannerChat = document.querySelector('.banner-chat');
  const chatOnVivo = document.querySelector('.chat-on-vivo');
  const chatPopup = document.querySelector('.chat-pop-up');
  const xChat = document.querySelector('.x-chat');

  bannerChat.addEventListener('click',()=>{ chatClickHandler(chatPopup,xChat)});
  chatOnVivo.addEventListener('click',()=>{ chatClickHandler(chatPopup,xChat)});

  xChat.addEventListener('click', () => {
    chatPopup.style.display = 'none';
  });

  // Burger menu
  const showMenuIcon = document.querySelector('.burger-menu-icon');
  const hideMenuIcon = document.querySelector('.close-menu-icon');
  const burgerMenu = document.querySelector('.burger-list');

  showMenuIcon.addEventListener('click' , () => {
    burgerMenu.style.display = 'flex';
    showMenuIcon.style.display = 'none';
    hideMenuIcon.style.display = 'block'
  });

  hideMenuIcon.addEventListener('click', ()=> {
    burgerMenu.style.display = 'none';
    showMenuIcon.style.display = 'block';
    hideMenuIcon.style.display = 'none'
  });
}

initPage();