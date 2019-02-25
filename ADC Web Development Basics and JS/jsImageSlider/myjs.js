var im = document.getElementById("img"); // variable im hold the element having id img

var images = ["image1.png","image2.png","image3.png"]; // array of location of images
var index=0; // variable index will hold index of currently displayed image

function changeImage()  // function that will change the images one by one
{
  im.setAttribute("src", images[index]); // changing value of attribute src to image location
  index = index + 1; // incrementing index by one
  if(index >= images.length) // if index become 3 it will  be set to 0
  {
    index=0;
  }
}

setInterval(changeImage, 3000); // the setInterval() function will call the 
                                // changeimage() function after every 3000ms or 3 seconds