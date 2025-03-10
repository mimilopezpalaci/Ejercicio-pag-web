/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
function changeColor() {
    // Array of colors
    const colors = ['#f1f1f1', '#d1e7f7', '#f0c4c4', '#e0f7e1', '#d8e2f3'];
    // Randomly select a color from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Change the background color of the page
    document.body.style.backgroundColor = randomColor;
}