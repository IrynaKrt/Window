const timer = (id, deadline) => {
    const getTimeRemaining = (endtime) => {
        const t =Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor((t/(1000*60*60*24))),
              hours = Math.floor((t/(1000*60*60)%24)),
              minutes = Math.floor(((t/1000/60)%60)),
              seconds = Math.floor((t/1000)%60);
        
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    const getZero = (num) => {
        if(num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    };

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
              days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds'),
              timerInterval = setInterval(upDateClock, 1000);
              
        upDateClock();

        function upDateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if(t.total<=0){
                days.innerHTML = '00';
                hours.innerHTML = '00';
                minutes.innerHTML = '00';
                seconds.innerHTML = '00';
            clearInterval(timerInterval);
            }
        }
    };
    setClock(id, deadline);
};

export default timer;