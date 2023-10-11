const boxes = document.querySelectorAll(".box"),
img = document.querySelector(".img");
boxes.forEach((box) => {
    box.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
    box.addEventListener("drop", () => {
        box.appendChild(img);
    });
});
