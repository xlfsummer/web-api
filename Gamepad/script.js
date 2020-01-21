let connectBtn = document.getElementById("connect-btn");
let connectOutput = document.getElementById("connect-output");
/** @type {HTMLTableElement} */
let gamepadInfoTable = document.getElementById("gamepad-info");


let gamepad
connectBtn.addEventListener("click", _ => {
    let gamepads = navigator.getGamepads();
    if(gamepads.length == 0){
        connectOutput.innerText = "Not connect";
        throw new Error("Game pad not connected");
    }
    connectOutput.innerText = "Connect";
    [gamepad] = gamepads;
    let fr = assembleTable(gamepad);
    gamepadInfoTable.innerHTML = "";
    gamepadInfoTable.appendChild(fr);
})

/** @param {Gamepad} gamepad*/
function assembleTable(gamepad){
    let fr = document.createDocumentFragment();
    for(var key in gamepad){
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = key;
        tr.appendChild(td1);
        let td2 = document.createElement("td");
        td2.innerText = gamepad[key];
        tr.appendChild(td2);
        fr.appendChild(tr);
    }
    return fr;
}


window.addEventListener("gamepadconnected", ev =>{
    debugger;
})
