import './style.css';
import './reset.css';
import bgImage from './assets/images/bg-img.jpg';
import bgImage2 from './assets/images/bg-img2.jpg';
import bgImage3 from './assets/images/bg-bottom.jpg';
import svg from './assets/images/svg-icon.png';
import svg2 from './assets/images/svg2.png';

const content = document.querySelector('#content');

const mainh2s = [
  'Main course',
  'Desserts',
  'Side dishes',
  'Meat'
];
const mainps = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officia natus molestiae voluptatibus reiciendis, doloremque asperiores illo eligendi id.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officia natus molestiae voluptatibus reiciendis, doloremque asperiores illo eligendi id.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officia natus molestiae voluptatibus reiciendis, doloremque asperiores illo eligendi id.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officia natus molestiae voluptatibus reiciendis, doloremque asperiores illo eligendi id.'
];


function clearDiv(element) { 
      element.style.opacity = '0';
      setTimeout(() => {
      element.innerHTML = '';
      element.style.opacity = '1';
    }, 1000); 
}

function renderMainPage() {
    const banner = document.createElement('div');
    banner.classList.add('banner');
    banner.classList.add('slide-in');
    const bgimg = new Image();
    bgimg.src = bgImage;
    banner.appendChild(bgimg);
    content.appendChild(banner);

    const gridGroup = document.createElement('div');
    gridGroup.classList.add('grid-group');
    gridGroup.classList.add('slide-in');

    for (let i = 0; i < 4; i++) {
      const gridElement = document.createElement('div');
      gridElement.classList.add('grid-element');
      gridElement.classList.add('slide-in');
      const icon = new Image();
      icon.src = svg;
      gridElement.appendChild(icon);
      const h2 = document.createElement('h2');
      h2.textContent = mainh2s[i];
      gridElement.appendChild(h2);
      const p = document.createElement('p');
      p.textContent = mainps[i];
      gridElement.appendChild(p);
      gridGroup.appendChild(gridElement);
    }

    content.appendChild(gridGroup);
  }

  function renderAboutUsPage() {
    const banner = document.createElement('div');
    banner.classList.add('banner');
    banner.classList.add('slide-in');
    const bgimg = new Image();
    bgimg.src = bgImage2;
    banner.appendChild(bgimg);
    content.appendChild(banner);

    const gridGroup = document.createElement('div');
    gridGroup.classList.add('grid-group-ctn');
    gridGroup.classList.add('slide-in');

    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-group-ctn-element');
    gridElement.classList.add('slide-in');

    const h2 = document.createElement('h2');
    h2.textContent = 'About us';
    gridElement.appendChild(h2);
    const p = document.createElement('p');
    p.textContent = mainps[0];
    gridElement.appendChild(p);
    gridGroup.appendChild(gridElement);
    const svg = new Image();
    svg.src = svg2;
    gridElement.appendChild(svg);
    gridGroup.appendChild(gridElement);

    const bgImageBottom= new Image();
    bgImageBottom.src = bgImage3;
    gridGroup.appendChild(bgImageBottom);
    content.appendChild(gridGroup);


    content.appendChild(gridGroup);
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderMainPage();

    const homeBtn = document.querySelector('#home-btn');
    homeBtn.addEventListener('click', () => {
      clearDiv(content);
      setTimeout(() => {
        renderMainPage();
      }, 1000); 
    });

    const aboutUsBtn = document.querySelector('#about-us-btn');
    aboutUsBtn.addEventListener('click', () => {
      clearDiv(content);
      setTimeout(() => {
        renderAboutUsPage();
      }, 1000); 
    });
  });
