
const d = document;

export function alarm(sound, btnAlarm, btnStopAlarm) {
    const $audio= d.createElement("audio");
    d.addEventListener("click", (e) => {

        //Button that Starts Alarm
        if (e.target.matches(btnAlarm) || e.target.matches(`${btnAlarm} *`)) {
            d.querySelector(sound).play(); 
            d.querySelector(btnAlarm).disabled = true; 
            d.querySelector(`${btnAlarm} i`).style['pointer-events'] = 'none';       
        }

        //Button that Stops Alarm
        if (e.target.matches(btnStopAlarm) || e.target.matches(`${btnStopAlarm} *`)) {
            d.querySelector(sound).pause();   
            d.querySelector(btnAlarm).disabled = false;      
        }
    });
}

export function clock(clock, btnPlay, btnStop) {
    
    let time;
    
    d.addEventListener("click", (e) => {

        //Button Play
        if (e.target.matches(btnPlay) || e.target.matches(`${btnPlay} *`)) {
            startTime();
            d.querySelector(btnPlay).disabled = true;
            d.querySelector(`${btnPlay} i`).style['pointer-events'] = 'none';            
        }

        //Button Stop
        if (e.target.matches(btnStop) || e.target.matches(`${btnStop} *`)) {
            stopTime();
            d.querySelector(btnPlay).disabled = false;
        }
    });

    //Start Time
    function startTime() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        d.querySelector(clock).innerHTML = h + ":" + m + ":" + s;
        time = setTimeout(startTime, 1000);
    }

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        } // add zero in front of numbers < 10
        return i;
    }

    //Stop Time
    function stopTime() {
        clearTimeout(time);
    }
}
