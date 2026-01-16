console.log("Hello, testing");

const thumbnailsContainer = document.querySelector("#thumbnails");
const bigDisplay = document.querySelector("#bigDisplay");

const prevBtn = document.querySelector("#Prev");
const nextBtn = document.querySelector("#Nxt");

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

let currentIndex = 0;


function createBigImage(imageData) {
  bigDisplay.innerHTML = "";

  const bigImage = document.createElement("img");
  bigImage.src = imageData.src;
  bigImage.alt = imageData.alt;

  bigDisplay.append(bigImage);
}

function showImageByIndex(index) {
  currentIndex = index;
  createBigImage(images[currentIndex]);
}

function createThumbnails() {
  for (let i = 0; i < images.length; i++) {
    const imgElement = document.createElement("img");
    imgElement.src = images[i].src;
    imgElement.alt = images[i].alt;

    imgElement.addEventListener("click", function () {
      showImageByIndex(i);
    });

    thumbnailsContainer.append(imgElement);
  }
}
createThumbnails();


prevBtn.addEventListener("click", function () {
  let newIndex = currentIndex - 1;

  if (newIndex < 0) {
    newIndex = images.length - 1;
  }

  showImageByIndex(newIndex);
});

nextBtn.addEventListener("click", function () {
  let newIndex = currentIndex + 1;

  if (newIndex >= images.length) {
    newIndex = 0;
  }
    showImageByIndex(newIndex);
});
showImageByIndex(0);


document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft"){
        let newIndex = currentIndex -1;

        if (newIndex<0){
            newIndex = images.length -1;
        }
        showImageByIndex(newIndex);
    }
    if (event.key=== "ArrowRight"){
        let newIndex = currentIndex +1;

    if (newIndex >= images.length) {
        newIndex = 0;
    }
showImageByIndex(newIndex);
}
    
});
