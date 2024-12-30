const images = [
    "https://i.ibb.co/5vsFb9h/1.jpg",
    "https://i.ibb.co/HqhkKt7/2.jpg",
    "https://i.ibb.co/ZNYyQdS/3.jpg"
];
let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("phoneImage").src = images[currentIndex];
}
