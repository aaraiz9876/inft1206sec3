const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames with new paths */

const images = ['../a4p2/pic1.jpg', '../a4p2/pic2.jpg', '../a4p2/pic3.jpg', '../a4p2/pic4.jpg', '../a4p2/pic5.jpg'];
const alts = {
  '../a4p2/pic1.jpg' : 'Closeup of a human eye',
  '../a4p2/pic2.jpg' : 'Rock that looks like a wave',
  '../a4p2/pic3.jpg' : 'Purple and white pansies',
  '../a4p2/pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
  '../a4p2/pic5.jpg' : 'Large moth on a leaf'
}

/* Looping through images */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', image); // Path is already complete
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
