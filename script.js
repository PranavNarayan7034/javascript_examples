// Dom -- document object model

// 1)calling a tag with their id --- getelementid 

// var a= document.getElementById('myh1')

// a.innerHTML='hi javascript'
// a.style.color='blue'

//*********** change content while clicking button *********

// var a=document.getElementById('myh1')

// function change(){
//     a.innerHTML='learn javascript'
//     a.style.color='blue'
// }




// *********************************
var a=document.getElementById('mydiv')

function imageview(){
    a.style.display='block'
}


function imageclose(){
    a.style.display='none'
}



readmore and readless javascript


var a= document.getElementById('para2')
var b=document.getElementById('btn1')
var c=document.getElementById('btn2')


function readmore(){
    a.style.display='inline'
    b.style.display='none'
    c.style.display='inline'
}

function readless(){
    a.style.display='none'
    b.style.display='inline'
    c.style.display='none'
}
















