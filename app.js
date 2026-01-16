console.log("Hello, testing");

const thumbnailsContainer = document.querySelector("#thumbnails");

const images = [
  {
    src: "./Images/modern minimal bedroom.jpg",
    alt: "Bedroom with minimal furnishing and modern interior",
  },
  {
    src: "./Images/white orange bedroom.jpg",
    alt: "Bedroom with white and orange interior",
  },
  {
    src: "./Images/grey bedroom.jpg",
    alt: "Bedroom with grey interior",
  },
  {
    src: "./Images/beige blue bedroom.jpg",
    alt: "Bedroom with blue interior",
  },
];

function createThumbnails() {
  for (let i = 0; i < images.length; i++) {
    const imgElement = document.createElement("img");

    imgElement.src = images[i].src;
    imgElement.alt = images[i].alt;

    imgElement.addEventListener("click", function () {
      console.log(images[i]);
      createBigImage(images[i])
      
    });

    thumbnailsContainer.append(imgElement);
  }
}
createThumbnails();

function createBigImage(imageData){
    bigDisplay.innerHTML= ""
    const bigImage= document.createElement("img")

    bigImage.src= imageData.src
    bigImage.alt= imageData.alt

    bigDisplay.append(bigImage)
}
