let worker = new Worker("./worker.js");
let form = document.getElementsByTagName("form")[0];
let output = document.getElementsByTagName("output")[0];
let terminateBtn = document.getElementById("terminate-btn");

worker.addEventListener("message", ev => {
    output.innerText = ev.data;
});

worker.addEventListener("error", ev => {
    console.log("worker error: " + ev.message);
})

form.addEventListener("submit", ev => {
    ev.preventDefault();
    let msg = form["message"].value;
    worker.postMessage(msg);
});

terminateBtn.addEventListener("click", _ =>{
    worker.terminate();
});
