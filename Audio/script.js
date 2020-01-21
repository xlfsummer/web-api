// @ts-check

let playBtn = document.getElementById("play");

playBtn.onclick = function(){
    let audioCtx = new AudioContext();
    /** 振荡器 */
    let oscillatorNode = audioCtx.createOscillator();
    
    oscillatorNode.type = "sine";
    oscillatorNode.frequency.value = 800;
    
    let gainNode = audioCtx.createGain();

    // 当前时间设置音量为1
    gainNode.gain.setValueAtTime(1, audioCtx.currentTime);

    // 音调从当前时间开始播放
    oscillatorNode.start(audioCtx.currentTime);

    // 1秒内声音慢慢降低，是个不错的停止声音的方法
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 2);

    oscillatorNode.stop(audioCtx.currentTime + 2);

    oscillatorNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);
};
