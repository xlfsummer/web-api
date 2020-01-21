let hotArea = document.getElementById("hot-area");
let preview = document.getElementById("preview");

hotArea.addEventListener("dragover", ev => {
    if(Array.from(ev.dataTransfer.items).some(i => [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/bmp"
    ].includes(i.type))){
        hotArea.style.borderColor = "green"
        ev.preventDefault();
    }
    else{
        hotArea.style.borderColor = "red";
        ev.dataTransfer.dropEffect = "move";
    }
})

hotArea.addEventListener("dragenter", ev => {

})

hotArea.addEventListener("dragleave", ev => {
    hotArea.style.borderColor = "gray";
})

hotArea.addEventListener("drop", ev => {
    hotArea.style.borderColor = "gray";

    let data = ev.dataTransfer;
    let file = data.files[0];

    let img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.height = 200;
    preview.appendChild(img);
    ev.preventDefault(); // 否则 chrome 会打开图片
});
