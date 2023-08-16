// var butz = document.createElement("button")
// var txt =document.createTextNode("delete")
// butz.appendChild(txt)
// document.querySelector

// var num = [1,2,3,4,5]
// document.getElementById("d").innerHTML= num;

// var input = document.createElement("input")
// var txt =document.createTextNode("1,2,3,4,5")
// input.appendChild(txt)
// body.appendChild(input)

// function del(){
//  document.getElementById("dis").value =
//       document.getElementById("dis").value.slice(0, -1);
// }

var text = document.createElement('h2');
var textCont = document.createTextNode('X');
text.appendChild(textCont);
document.querySelector('body').appendChild(text);
text.style.display="none";

var spanning = document.getElementById('kk');
var content = document.getElementById('div');


spanning.onclick = function() {
    text.style.display="block";
    text.style.marginLeft="350px";
    text.style.marginTop="-70px";
    content.style.display="block";
    spanning.style.display='none';
    content.style.marginRight="50px"; 
    document.getElementById('navb').style.background='green'
}   


text.onclick = function() {
    text.style.display="none";
    spanning.style.display='block';
    content.style.display="none";
    text.style.background='green'
    document.getElementById('navb').style.background='maroon'
    
}










//  var txt =[]
// var see = document.createElement('input')
// document.querySelector("body").appendChild(see)

// var butz = document.createElement('button')
// var txt1 = document.createTextNode("add")
// butz.appendChild(txt1)
// document.querySelector('body').appendChild(butz)

// butz.onclick = function(){
    
//     var lid = document.createElement('p')
//     var txt2 = document.createTextNode(see.value)
//    lid.appendChild(txt2)
//    txt.push(see.value)
//     console.log(txt)
//     document.querySelector('body').appendChild(lid).innerHTML 
//  }
// var questions= [
//     {questionOne:"who is your guy"},
//     {questionTwo:"what is your name"},
//     {questionThree:"what is the name of your school"},
//     {questionFour:"what class are you"},
//     {questionFive:" "},

// ]

//  var see =document.getElementById('p')

//  see.innerHTML= questions[0].questionOne

//  document.getElementById('next2').style.display="none"
//  document.getElementById('next4').style.display='none'

// function but(){
//     see.innerHTML=questions[1].questionTwo
//  document.getElementById('next').style.display="none",
//  document.getElementById('next1').style.display="inline"
//  }
 
//  function but1(){
//     see.innerHTML=questions[2].questionThree
//     document.getElementById('next1').style.display="none"
//     document.getElementById('next2').style.display='inline'
//  }
//  function but2(){
//     see.innerHTML=questions[3].questionFour
//     document.getElementById('next2').style.display='none'
//     document.getElementById('next3').style.display="inline"
//  }
// function but3(){
//     see.innerHTML=questions[4].questionFive
//     document.getElementById('next3').style.display='none'
//     document.getElementById('next4').style.display='inline'
// }



// console.log(questions)

