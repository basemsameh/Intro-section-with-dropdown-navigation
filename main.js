let openMenu = document.querySelectorAll('img')[1];
let menu = document.querySelector('section');
let uls = document.querySelectorAll('ul');
let closeMenu = document.querySelector('button');

// Open List
openMenu.onclick = () => { open() };

Array.from(document.querySelectorAll('button')).forEach(ele => {
  ele.onclick = () => {
    if (ele.textContent === 'Features') {
      if (uls[0].className === 'disapper-ul') {
        ele.firstElementChild.src = 'images/icon-arrow-up.svg';
        uls[0].className = 'apper-ul';
      }
      else {
        ele.firstElementChild.src = 'images/icon-arrow-down.svg';
        uls[0].className = 'disapper-ul';
      }
    }
    else if (ele.textContent === 'Company') {
      if (uls[1].className === 'disapper-ul') {
        ele.firstElementChild.src = 'images/icon-arrow-up.svg';
        uls[1].className = 'apper-ul';
      }
      else {
        ele.firstElementChild.src = 'images/icon-arrow-down.svg';
        uls[1].className = 'disapper-ul';
      }
    }
  }
})

// Close list
closeMenu.onclick = () => {
  openMenu.style.display = 'block';
  document.body.style.backgroundColor = '#fafafa';
  document.querySelector('main').style.filter = 'brightness(100%)';
  menu.className = 'disapper-sec';
}

// Disapper list button and close list button when resize window
window.onresize = () => {
  if (window.innerWidth >= 900) {
    openMenu.style.display = 'none';
    closeMenu.style.display = 'none';
  }
  else if (window.innerWidth < 900) {
    openMenu.style.display = 'block';
    openMenu.onclick = () => { open() };
  }
}

// Opening list
function open() {
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
  document.body.style.backgroundColor = '#696969';
  document.querySelector('main').style.filter = 'brightness(50%)';
  menu.className = 'apper-sec';
}