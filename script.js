//Дата
let date = document.querySelector('#date')
let d = new Date();
date.innerHTML = `<h1>${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}<h1>`

//Годинник
let clock = document.querySelector('#clock')
setInterval(() => {
    let newDate = new Date();
    let hh = newDate.getHours()
    let mm = newDate.getMinutes()
    let ss = newDate.getSeconds()
    if (hh < 10) {
        hh = "0" + hh
    }
    if (mm < 10) {
        mm = "0" + mm
    }
    if (ss < 10) {
        ss = "0" + ss
    }
    clock.innerHTML = `<h1>${hh}:${mm}:${ss}</h1>`
})

//Секундомір

let start = x => document.querySelector('.start');
let stop = document.querySelector('.stop');
let reset = document.querySelector('.reset');
let loop = document.querySelector('.loop');

let right = document.querySelector('.right');

let sec = document.querySelector('.secs');
let min = document.querySelector('.mins');
let hours = document.querySelector('.hours');
let arr1 = [1, 2, 3]


start('.start').addEventListener('click', function () {
    stopInterval = setInterval(function () {
        startClock1()
    }, 1000)
})
function startClock1() {
    sec.innerHTML++;
    if (sec.innerHTML < 10) {
        sec.innerHTML = '0' + sec.innerHTML;
    }
    if (sec.innerHTML > 59) {
        sec.innerHTML = 0
        min.innerHTML++;
        if (min.innerHTML < 10) {
            min.innerHTML = '0' + min.innerHTML;
        }
    }
    if (min.innerHTML > 59) {
        min.innerHTML = 0
        hours.innerHTML++;
        if (hours.innerHTML < 10) {
            hours.innerHTML = '0' + hours.innerHTML;
        }
    }
}
function resetTimer() {
    sec.innerHTML = '0' + 0
    min.innerHTML = '0' + 0;
    hours.innerHTML = '0' + 0;
    clearInterval(stopInterval);
    document.querySelector('.startCopy2').style.display = 'none'
    document.querySelector('.start').style.display = 'block'
}

function stopTimer() {
    clearInterval(stopInterval);
    document.querySelector('.startCopy2').style.display = 'block'
    document.querySelector('.start').style.display = 'none'
    arr1.splice(0, 3, hours.innerHTML, min.innerHTML, sec.innerHTML)
    console.log(arr1)
}
function startCopy2() {
    hours.innerHTML = arr1[0]
    min.innerHTML = arr1[1]
    sec.innerHTML = arr1[2]
    stopInterval = setInterval(function () {
        startClock1()
    }, 1000)
}


function createTimeSection() {
    let loopTime = document.createElement('div')
    loopTime.classList.add('loopSection');
    loopBlock.appendChild(loopTime);
    arr1.splice(0, 3, hours.innerHTML, min.innerHTML, sec.innerHTML)
    loopTime.innerHTML = arr1[0] + ':' + arr1[1] + ':' + arr1[2];
}

function createTimeBlock() {

    loopBlock = document.createElement('div')
    loopBlock.classList.add('loopBlock');
    loopBlock.style.display = 'flex';
    loopBlock.style.justifyContent = 'center';
    right.appendChild(loopBlock);

    createTimeSection(hours);

}

function newLoop() {
    createTimeBlock('');

}



//Таймер
//Лівий блок
let num = document.querySelector('.number');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');

let count = 25
plus.addEventListener('click', function () {
    if (document.onclick = plus) {
        count++;
        num.innerHTML = count
        // console.log(count);
    }
})
minus.addEventListener('click', function () {
    if (document.onclick = minus) {
        count--;
        num.innerHTML = count
        // console.log(count);
    }
})

//Правий блок
let start2 = x => document.querySelector('.start2');
let startCopy = x => document.querySelector('.startCopy');
let stop2 = x => document.querySelector('.stop2');
let reset2 = x => document.querySelector('.reset2');
let seconds = document.querySelector('.secs2');
let minutes = document.querySelector('.mins2');
let timer = document.querySelector('.timer');


let stopInterval
let arr = [1, 2]
start2('.start2').addEventListener('click', function () {
    document.querySelector('.mins2').innerHTML = document.querySelector('.number').innerHTML - 1
    document.querySelector('.secs2').innerHTML = 60;
    startClock()
    stopInterval = setInterval(function () {
        startClock()
    }, 1000)
})


function startClock() {
    seconds.innerHTML--;
    if (seconds.innerHTML < 10) {
        seconds.innerHTML = '0' + seconds.innerHTML;
    }
    if (seconds.innerHTML == 0) {
        seconds.innerHTML = 59
        minutes.innerHTML--;
    }
    if (minutes.innerHTML < 0) {
        seconds.innerHTML = '0' + 0
        minutes.innerHTML = '0' + 0;
        clearInterval(stopInterval)

    }

}
function resetTimer2() {
    seconds.innerHTML = '0' + 0
    minutes.innerHTML = '0' + 0;
    clearInterval(stopInterval);
    document.querySelector('.startCopy').style.display = 'none'
    document.querySelector('.start2').style.display = 'block'
}

function stopTimer2() {
    clearInterval(stopInterval);
    document.querySelector('.startCopy').style.display = 'block'
    document.querySelector('.start2').style.display = 'none'
    arr.splice(0, 2, minutes.innerHTML, seconds.innerHTML)
    console.log(arr)
}
function startCopy1() {
    minutes.innerHTML = arr[0]
    seconds.innerHTML = arr[1]
    stopInterval = setInterval(function () {
        startClock()
    }, 1000)
}




