
debugger;
importScripts("./worker-lib.js");

self.addEventListener("message", function(ev){
    self.postMessage(util.reverseStr(ev.data));
    // throw "test error";
});
