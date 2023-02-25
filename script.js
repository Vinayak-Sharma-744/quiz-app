const cont0 = document.getElementById("container1")
const cont1 = document.getElementById("container2")
const cont2 = document.getElementById("container3")
const cont3 = document.getElementById("container4")
const cont4 = document.getElementById("container5")
const cont5 = document.getElementById("container6")
const ans = document.getElementById("ans")
const q11 = document.getElementById("q11")
const q12 = document.getElementById("q12")
const q13 = document.getElementById("q13")
const q14 = document.getElementById("q14")

function startBtnFun(){
    cont0.style.display = "none"
    cont1.style.display = "flex"
}


q11.addEventListener('click' , wrong)
q12.addEventListener('click' , wrong)
q13.addEventListener('click' , correct)
q14.addEventListener('click' , wrong)

function wrong(){
    console.log("wrong!")
    ans.innerHTML = "Wrong Answer !"
}

function correct(){
    console.log("right!")
    ans.innerHTML = "Correct Answer !"
}

// function check(){
//     if(cont1.style.display == "flex"){
//         for (let index = 0; index < options.length; index++) {
//             if (options[index] == '3. alerts') {
//                 console.log("check")
//                 ans.innerHTML = "Correct Answer !"
//             }
//             else{
//                 ans.innerHTML = "Wrong Answer !"
//             }
//         }
//         // cont1.style.display = "none"
//         // cont2.style.display = "flex"
//     }
// }
