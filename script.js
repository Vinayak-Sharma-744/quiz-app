const cont0 = document.getElementById("container1")
const cont1 = document.getElementById("container2")
const cont2 = document.getElementById("container3")
const cont3 = document.getElementById("container4")
const cont4 = document.getElementById("container5")
const cont5 = document.getElementById("container6")
const cont6 = document.getElementById("done")
const cont7 = document.getElementById("high")

const ans1 = document.getElementById("ans1")
const ans2 = document.getElementById("ans2")
const ans3 = document.getElementById("ans3")
const ans4 = document.getElementById("ans4")
const ans5 = document.getElementById("ans5")

const q11 = document.getElementById("q11")
const q12 = document.getElementById("q12")
const q13 = document.getElementById("q13")
const q14 = document.getElementById("q14")

const q21 = document.getElementById("q21")
const q22 = document.getElementById("q22")
const q23 = document.getElementById("q23")
const q24 = document.getElementById("q24")

const q31 = document.getElementById("q31")
const q32 = document.getElementById("q32")
const q33 = document.getElementById("q33")
const q34 = document.getElementById("q34")

const q41 = document.getElementById("q41")
const q42 = document.getElementById("q42")
const q43 = document.getElementById("q43")
const q44 = document.getElementById("q44")

const q51 = document.getElementById("q51")
const q52 = document.getElementById("q52")
const q53 = document.getElementById("q53")
const q54 = document.getElementById("q54")

const input = document.getElementById("input")
const submit = document.getElementById("submit")
const back = document.getElementById("back")
const clear = document.getElementById("clear")
const leaderboard = document.getElementById("leaderboard")
const highList = document.querySelector('ul');
const time = document.getElementById("time")
const startBtn = document.getElementById("btn")

let points = 0
let users = 0
let flag = true




q11.addEventListener('click', wrong1)
q12.addEventListener('click', wrong1)
q13.addEventListener('click', correct1)
q14.addEventListener('click', wrong1)

q21.addEventListener('click', wrong2)
q22.addEventListener('click', wrong2)
q23.addEventListener('click', wrong2)
q24.addEventListener('click', correct2)

q31.addEventListener('click', wrong3)
q32.addEventListener('click', wrong3)
q33.addEventListener('click', correct3)
q34.addEventListener('click', wrong3)

q41.addEventListener('click', wrong4)
q42.addEventListener('click', wrong4)
q43.addEventListener('click', wrong4)
q44.addEventListener('click', correct4)

q51.addEventListener('click', correct5)
q52.addEventListener('click', wrong5)
q53.addEventListener('click', wrong5)
q54.addEventListener('click', wrong5)

//1
function wrong1() {
    console.log("wrong!")
    ans1.innerHTML = "Wrong Answer !"
    timer -= 10
    // if (timeLeft <= 50) {
    //     console.log("timer check")
    //     timeLeft = timeLeft-10
    // }

}

function correct1() {
    console.log("right!")
    ans1.innerHTML = "Correct Answer !"
    points = points + 10
    // clearans1()

}

//2
function wrong2() {
    console.log("wrong!")
    ans2.innerHTML = "Wrong Answer !"
    timer -= 10

}

function correct2() {
    console.log("right!")
    ans2.innerHTML = "Correct Answer !"
    points = points + 10
    // clearans2()

}

//3
function wrong3() {
    console.log("wrong!")
    ans3.innerHTML = "Wrong Answer !"
    // clearans3()
    timer -= 10

}

function correct3() {
    console.log("right!")
    ans3.innerHTML = "Correct Answer !"
    points = points + 10
    // clearans3()

}

//4
function wrong4() {
    console.log("wrong!")
    ans4.innerHTML = "Wrong Answer !"
    // clearans4()
    timer -= 10
}

function correct4() {
    console.log("right!")
    ans4.innerHTML = "Correct Answer !"
    points = points + 10
    // clearans4()

}

//5
function wrong5() {
    console.log("wrong!")
    ans5.innerHTML = "Wrong Answer !"
    // clearans5()
    timer -= 10
}

function correct5() {
    console.log("right!")
    ans5.innerHTML = "Correct Answer !"
    points = points + 10
    // clearans5()

}

//1

function nextFun1() {
    cont1.style.display = "none"
    cont2.style.display = "flex"
}

//2

function nextFun2() {
    cont2.style.display = "none"
    cont3.style.display = "flex"
}

//3

function nextFun3() {
    cont3.style.display = "none"
    cont4.style.display = "flex"
}

//4

function nextFun4() {
    cont4.style.display = "none"
    cont5.style.display = "flex"
}

//5

function nextFun5() {
    cont5.style.display = "none"
    cont6.style.display = "flex"
    timer = 0
}

submit.addEventListener('click', next)

function next() {
    cont6.style.display = "none"
    cont7.style.display = "flex"
}

function goBack() {
    cont7.style.display = "none"
    cont0.style.display = "block"
    points = 0;
    input.value = '';

    // console.log(flag)
    ans1.innerHTML = ''
    ans2.innerHTML = ''
    ans3.innerHTML = ''
    ans4.innerHTML = ''
    timer = 50
    clearInterval(intervalId)
}

function clearHighscores() {
    highList.innerHTML = ''
}


leaderboard.addEventListener('click', () => {
    console.log("working")
    if (cont0.style.display !== "none") {
        console.log("if working")
        cont0.style.display = "none"
        cont7.style.display = "flex"
    }
})

submit.addEventListener('click', () => {
    if (input.value.length > 0) {
        const li = document.createElement('li');
        let highAdd = document.createTextNode(`${users++}. ${input.value} -> ${points}`);
        li.append(highAdd);
        highList.append(li);
    }
})

startBtn.addEventListener('click', startBtnFun)
startBtn.addEventListener('click', startTime);

function startBtnFun() {
    cont0.style.display = "none"
    cont1.style.display = "flex"
}


// var timeLeft = 50
// function allAboutTimer() {
//     var timeleft = timeLeft
//     setInterval(function timerfun () {
//         if (timeleft == 0) {
//             clearInterval()
//         }
//         if (timeleft < 0) {
//             return
//         }
//         else {
//             time.innerHTML = timeleft;
//         }
//         timeleft -= 1;
//     }, 1000);

// }


function funcDone() {
    time.innerHTML = '0'
    cont0.style.display = "none"
    cont1.style.display = "none"
    cont2.style.display = "none"
    cont3.style.display = "none"
    cont4.style.display = "none"
    cont5.style.display = "none"
    cont6.style.display = "flex"
    clearInterval(intervalId);
}


let timer = 50;
let intervalId;

function startTime() {
    intervalId = setInterval(() => {
        updateTime()
    }, 1000);
}
function updateTime() {
    if (timer <= 0)
        funcDone();
    time.innerText = timer--;
}

const totalScore = document.getElementById("ScoreLine")



const btn5 = document.getElementById("btn5")

btn5.addEventListener('click', displayTotalScore)

function displayTotalScore() {
    // updateTime()
    totalScore.innerText = `Your final score is: ${points}`
}
// back.addEventListener('click', start)
// start();

// back.addEventListener('click', reset);
// function reset(){
//     clearTimeout(myVar)
// }