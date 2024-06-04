import './style.css';
import './reset.css';
import bgImage from './assets/images/bg-img.jpg';
import svg from './assets/images/svg-icon.png';

const h2s = [
  'Main course',
  'Desserts',
  'Side dishes',
  'Meat'
];
const ps = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officia natus molestiae voluptatibus reiciendis, doloremque asperiores illo eligendi id.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officia natus molestiae voluptatibus reiciendis, doloremque asperiores illo eligendi id.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officia natus molestiae voluptatibus reiciendis, doloremque asperiores illo eligendi id.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officia natus molestiae voluptatibus reiciendis, doloremque asperiores illo eligendi id.'
];

function renderMainPage() {
    const content = document.querySelector('#content');
    const banner = document.createElement('div');
    banner.classList.add('banner');
    const bgimg = new Image();
    bgimg.src = bgImage;
    banner.appendChild(bgimg);
    content.appendChild(banner);

    const gridGroup = document.createElement('div');
    gridGroup.classList.add('grid-group');

    for (let i = 0; i < 4; i++) {
      const gridElement = document.createElement('div');
      gridElement.classList.add('grid-element');
      const icon = new Image();
      icon.src = svg;
      gridElement.appendChild(icon);
      const h2 = document.createElement('h2');
      h2.textContent = h2s[i];
      gridElement.appendChild(h2);
      const p = document.createElement('p');
      p.textContent = ps[i];
      gridElement.appendChild(p);
      gridGroup.appendChild(gridElement);
    }

    content.appendChild(gridGroup);
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderMainPage();
  });
