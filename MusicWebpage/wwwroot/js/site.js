// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Animate the pink box
let box = document.getElementById("box");
let position = 0;

function moveBox() {
    if (position >= 300) {
        position = 0;
    } else {
        position++;
        box.style.left = position + "px";
    }
}

setInterval(moveBox, 10);
