let ms = 0;
let s = 0;
let m = 0;

let timer;

const stopWatchEl = document.querySelector('.time');

function start(){
    if(!timer){
        timer = setInterval(run, 10);
    };
};

function run(){
    stopWatchEl.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
    ms++;

    if(ms === 100){
        ms = 0;
        s++;
    };

    if(s === 60){
        s = 0;
        m++;
    }
};

function pause(){
    clearInterval(timer);
    timer = false;
}

function stop(){
    clearInterval(timer);
    timer = false;
    ms = 0;
    s = 0;
    m = 0;
    stopWatchEl.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}