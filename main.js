let btn = document.querySelector('form button')
let user1 = document.querySelector('input')
let user2 = document.querySelector('#user2')
let div = document.querySelector('div')
div.style.display = 'none'
let val = 1;
let abilties = []
for(let i = 0 ; i <= 6 ; i +=3)
    abilties.push([i, i+1 , i+2])
for(let i = 0 ; i <= 2 ; i ++)
    abilties.push([i, i+3 , i+6])
abilties.push([0, 4, 8])
abilties.push([2, 4, 6])
console.log(abilties)
for(let i = 1 ; i <= 9 ; i++){
    let button = document.createElement('button')
    div.appendChild(button)
}
//=============================================================
 let buttons = document.querySelectorAll('div button')
function returnWinner(){
   for(arr of abilties){
    if(buttons[arr[0]].innerHTML === buttons[arr[1]].innerHTML && buttons[arr[1]].innerHTML ===  buttons[arr[2]].innerHTML){
        if(buttons[arr[0]].innerHTML){
            return buttons[arr[0]].innerHTML
        }
    }
}
return ''
}

function notEmpty(){
    for(button of buttons)
        if(button.innerHTML === '')
            return false
    return true
}
function updateSpan(){
    document.querySelector('span').innerHTML = val === 1 ? user1.value : user2.value
}
function reset(winner = ''){
         setTimeout(()=>{
                    if(winner)
                             document.querySelector('.winResult').classList.remove('active')
                    buttons.forEach(but =>{
                    but.innerHTML = ''
                    but.classList.remove('disabled')
                    val = 1;
                    updateSpan()
                }
           )
                } , 3500)
               
}

updateSpan()
buttons.forEach(button =>{
    button.onclick = ()=>{
        button.innerHTML = val === 1 ? 'X' : 'O'
        val = 1 - val;
        button.classList.add('disabled')
        let winner = returnWinner() 
        
            if(winner){
                buttons.forEach(but =>but.classList.add('disabled'))
                document.querySelector('.winResult').classList.add('active')
                console.log(document.querySelector('.winResult'))
                reset(winner)    
            } 
            if(notEmpty()){ reset()}
            updateSpan()
    }
})

btn.onclick = ()=>{
    if(user1.value!== '' && user2.value !== ''){
        updateSpan()
        div.style.display = 'flex'
        btn.parentElement.style.display = 'none'
    }
}
console.log(abilties[6], abilties[7])