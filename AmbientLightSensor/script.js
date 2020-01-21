let output = document.getElementsByTagName("output")[0];
let print = msg => output.textContent = msg;

window.onerror = e => print(e)

let als = new AmbientLightSensor({
    frequency: 20
});

als.addEventListener('activate', () => print('Ready to measure EV.'));
als.addEventListener('error', event => print(`Error: ${event.error.name}`));
als.addEventListener('reading', () => {
    // Defaut ISO value.
    const ISO = 100;
    // Incident-light calibration constant.
    const C = 250;

    let EV = Math.round(Math.log2((als.illuminance * ISO) / C));
    print(`Exposure Value (EV) is: ${EV}`);
});

als.start();
