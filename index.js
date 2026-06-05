let resultHome=0
let resultGuest=0
let home=document.getElementById("homenum")
let guest=document.getElementById("guestnum")
let winner=document.getElementById("winner")
function win(){
    if(parseInt(home.innerText) == parseInt(guest.textContent)){
        winner.textContent="DRAW"
    }
    else if(parseInt(home.innerText) > parseInt(guest.textContent)){
            winner.textContent="HOME WINS"
    }
    else{
        winner.textContent="GUEST WINS"
    }
    resultHome=0
    home.innerText=resultHome
    resultGuest=0
    guest.textContent=resultGuest
}

function check(){
    if(home.innerText>13 || guest.textContent>13){
        win()
    }
}

function home1(){
    resultHome+=1
    home.innerText=resultHome
    check()
}
function home2(){
    resultHome+=2
    home.textContent=resultHome
    check()
}
function home3(){
    resultHome+=3
    home.textContent=resultHome
    check()
}

function guest1(){
    resultGuest+=1
    guest.textContent=resultGuest
    check()
}
function guest2(){
    resultGuest+=2
    guest.textContent=resultGuest
    check()
}
function guest3(){
    resultGuest+=3
    guest.textContent=resultGuest
    check()
}