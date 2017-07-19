//My google api key:  AIzaSyCX1Jda5k-1j67hqQK5d6RlwaLmT7l6nCw
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

// Back to top button:
const backToTopBtn = document.querySelector('.backto-top');
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}


backToTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


//Chat pop-up

function chatClickHandler() {
  chatPopup.style.display = 'flex';
  var timeleft = 10;
  var downloadTimer = setInterval(function () {
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      xChat.style.display = 'block';
      document.querySelector('#countdowntimer').style.display = 'none';

    }
  }, 1000);
}

const bannerChat = document.querySelector('.banner-chat');
const chatOnVivo = document.querySelector('.chat-on-vivo');
const chatPopup = document.querySelector('.chat-pop-up');
const xChat = document.querySelector('.x-chat');


bannerChat.addEventListener('click', chatClickHandler);
chatOnVivo.addEventListener('click', chatClickHandler);
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
})