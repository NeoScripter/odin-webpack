import './style.css';
import './reset.css';
import bgImage from './assets/images/bg-img.jpg';

function component() {
    const element = document.createElement('div');
 
    element.classList.add('banner');
  
    const bgimg = new Image();
    bgimg.src = bgImage;
    element.appendChild(bgimg);

    return element;
  }
 
  document.querySelector('#content').appendChild(component());