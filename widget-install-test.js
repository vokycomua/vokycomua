var gfcss = document.createElement('link');
gfcss.setAttribute('rel', 'stylesheet');
gfcss.setAttribute('href', 'https://giveforms.s3.us-east-2.amazonaws.com/assets/widget-install.css');
document.head.appendChild(gfcss);

window.onmessage = (e) => {
  if (e.data.hasOwnProperty('gfFrameHeight') && document.getElementById('gf-iframe')) {
    document.getElementById('gf-iframe').style.height = e.data.gfFrameHeight + 'px';
  }
  if (e.data.hasOwnProperty('gfFrameScrollToTop') && document.getElementById('gf-iframe')) {
    document.getElementById('gf-iframe').scrollIntoView({behavior: 'smooth'});
  }
};

Array.prototype.forEach.call(document.querySelectorAll('[data-giveform]'), function(element) {
  document.body.innerHTML += '<div id="'+element.getAttribute('data-giveform')+'" class="gf-popup" style="opacity: 0"><iframe src="'+element.getAttribute('href')+'" class="gf-iframe"></iframe><div class="gf-close"></div></div>';
});

/*
Array.prototype.forEach.call(document.querySelectorAll('[data-giveform]'), function(element) {
  element.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById(this.getAttribute('data-giveform')).classList.add('active');
  });
});

Array.prototype.forEach.call(document.querySelectorAll('.gf-close'), function(element) {
  element.addEventListener('click', function(event) {
    event.preventDefault();
    this.parentNode.classList.remove('active');
  });
});
*/