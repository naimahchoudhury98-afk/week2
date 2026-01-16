console.log("Hello, testing")
const thumbnailsContainer = document.querySelector('.thumbnails')

const images = [
   { src: "./Images/modern minimal bedroom.jpg",
    alt: "Bedroom with minimal furnishing and modern interior"
},
   { src:"./Images/white orange bedroom.jpg",
    alt: "Bedroom with white and orange interior"
}, 
   { src: "./Images/grey bedroom.jpg",
    alt: "Bedroom with grey interior"
},
   { src: "./Images/beige blue bedroom.jpg",
    alt: "Bedroom with blue interior"
}    
]

//create a function

function createThumbnail (){
    images.foreach(function (image){
        const imageElement = document.createElement('img')
    })
}

//create, set it, append