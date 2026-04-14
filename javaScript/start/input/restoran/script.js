let btn =document.querySelector('.qiymet')
let netice1 = document.querySelector('#netice')

btn.onclick = function(){

    let qiyme =yemek.value * 5
    netice.innerHTML = qiyme
}