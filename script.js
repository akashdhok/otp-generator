
function otp()
{
let str = "1234567890"
let store = ''
    for(let i = 0 ; i<6 ; i++)
{
    let random = Math.random();
    let ans = random * str.length;
    let afterFloor = Math.floor(ans)
    let char = str.charAt(afterFloor);
    store = store + char

}
let a = document.querySelector("#generator")
a.innerHTML = store

}




// console.log(store)
// const generator = ()=>{
//     let otp;
//     otp = Math.floor(Math.random()*900000)
//     return otp;
// }

// console.log("otp : " , generator())

