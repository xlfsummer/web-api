let form = document.getElementsByTagName("form")[0];
let canvas = document.getElementsByTagName("canvas")[0];
let cxt = canvas.getContext("2d");

form.addEventListener("submit", async ev => {
    ev.preventDefault();

    /** @type {HTMLInputElement} */
    let input = form["picture"];
    let fileList = input.files;
    let image = fileList[0];
    let bitmap = await window.createImageBitmap(image, {
        colorSpaceConversion
    });

    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    cxt.drawImage(bitmap, 0, 0);
})
