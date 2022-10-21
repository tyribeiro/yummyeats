let btn = document.getElementById("find-btn");
let overlay = document.getElementById("overlay");

btn.addEventListener('click', () => {
	overlay.style.display = "grid";

    /*attatch new custom class to overlay class */
    overlay.classList.add('animate-overlay');
});
