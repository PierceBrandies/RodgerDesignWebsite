// ---- gallery.js ----

// Get gallery back to top button:
let mybutton = document.getElementById("back-To-Top-Btn-Gallery");

// When the user scrolls down 700px from the top of the document, show back to top button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Array of photo names
const photoNames = [

  // Campbell
  '5AA68E6A-2223-4D9B-845C-ECE057F92919.jpg',
  'IMG_2235.jpg',

  // Riverstone
  'IMG_6888.jpg',
  'IMG_6854.jpg',
  'IMG_6858.jpg',
  'IMG_6860.jpg',

  // Belinda
  'IMG_0114.jpg',
  'IMG_2698.jpg',

  // Lashon
  'IMG_6578.jpg',
  'IMG_6579.jpg',

  // Gomes
  'IMG_0042.jpg',
  'kitchen3.png',
  'IMG_7874.jpg',
  'IMG_7886.jpg',
  'IMG_7889.jpg',
  'B361E13C-0527-4607-93F4-5DC2B2CC980E.jpg',
  'IMG_7275.jpg',

  // Wentworth Falls
  'IMG_2116.jpg',
  'CD9446EF-EAC7-4993-B404-822AD2E92B70.jpg',
  'IMG_2115.jpg',

  // Joanne
  'IMG_5424.jpg',

  // Grima
  'IMG_0111.jpg',
  'IMG_4751.jpg',
  'IMG_4761.jpg',
  'IMG_4960.jpg',
  'IMG_4965.jpg',

  // Minchinbury
  'FCDF138F-39A0-4BCD-BD52-575DCF246323.jpg',

  // Barry
  'IMG_2454.jpg',
  'IMG_2467.jpg',

  // Michelle
  'IMG_3837.jpg',
  'IMG_3841.jpg',
  'IMG_3861.jpg',
  'IMG_4654.jpg',
  'IMG_4657.jpg',
  'IMG_4670.jpg',
  'IMG_4671.jpg',
  'IMG_4678.jpg',
  'IMG_4686.jpg',

  // Emu-plains
  'IMG_0540.jpg',
  'IMG_7654.jpg',

  // Kevin
  'IMG_4752.jpg',

  // Hallway
  'IMG_4845.jpg',
  'IMG_4958.jpg',

  // Tony
  'IMG_6560.jpg',
  'IMG_6559.jpg',

  // Cronulla
  'IMG_5038.jpg',
  'IMG_5039.jpg',

  // Ben. H
  'IMG_5081.jpg',
  'IMG_5084.jpg',
  'IMG_5098.jpg',
  
  'IMG_5425.jpg',

  // Island
  'IMG_5615.jpg',
  'IMG_5616.jpg',
  'IMG_5062.jpg',

  // Crowe
  'IMG_7759.jpg',
  'IMG_8359.jpg',
  'IMG_8360.jpg',

  // Tracy
  'IMG_8506.jpg',
  'IMG_6618.jpg',
  'IMG_8676.jpg',

  // Danielle
  'IMG_8600.jpg',
  'IMG_8602.jpg',

  // Bennet
  'IMG_6225.jpg',
  'IMG_6229.jpg',
  'IMG_8945.jpg',
  'IMG_8946.jpg',
  'IMG_8953.jpg',
  'IMG_8958.jpg',
];

// Get the gallery container
const galleryContainer = document.getElementById('box');
const column1 = document.getElementById('column1');
const column2 = document.getElementById('column2');
const column3 = document.getElementById('column3');

// Iterate through the photo names and create img elements
var counter = 0;
var x = 0;
for (const photoName of photoNames) {
  counter++;
  x++;

  const imgElement = document.createElement('img');
  imgElement.src = `images/${photoName}`;
  imgElement.classList.add('gallery-image');

  // First if conditional can be changed to change arrangement of bottom image row
  if (x == 61) {
    column3.appendChild(imgElement);
  } else if (x == 65) {
    column1.appendChild(imgElement);
  } else if (counter == 1) {
    column1.appendChild(imgElement);
  } else if (counter == 2) {
    column2.appendChild(imgElement);
  } else {
    column3.appendChild(imgElement);
  }

  if (counter >= 3) {
    counter = 0;
  }
}

// ---- Photo full screen functionality ----

// Get all elements with class 'gallery-image'
var galleryimages = document.querySelectorAll('.gallery-image');

// Add click event listener to each image
galleryimages.forEach(function (image) {
  image.addEventListener('click', function () {

    // Getting url name for selected image
    var url = image.src;
    var part = url.split('/');
    var imageName = part.pop();
    imgPath = ('images/' + imageName)

    // Create transparent overlay
    var div = document.createElement("div");
    div.classList.add("overlay");
    document.querySelector('.box').appendChild(div);

    // Create close button
    var btn = document.createElement("button");
    btn.innerHTML = "Close";
    btn.classList.add("closeBtn");
    document.querySelector('.overlay').appendChild(btn);

    // Create picture div
    var div = document.createElement("div");
    div.classList.add("hero-picture");
    document.querySelector('.overlay').appendChild(div);

    // Create img tag inside picture div
    var img = document.createElement("img");
    img.src = imgPath;
    document.querySelector('.hero-picture').appendChild(img);

    // Make close button remove created elements
    document.querySelector('.closeBtn').addEventListener('click', function () {
      var element = document.querySelector(".overlay");
      element.remove();
    });
  });
});