

let  skillOne=document.querySelector("#skillOne"); 
let skillTwo=document.querySelector("#skillTwo"); 
let skillThree=document.querySelector("#skillThree"); 

let levelOne=document.querySelector("#levelOne");
let levelTwo=document.querySelector("#levelTwo");
let levelThree=document.querySelector("#levelThree");

let btn=document.querySelector("#btn");

let skillOnedisplay=document.querySelector("#skillOnedisplay");
let skillTwodisplay=document.querySelector("#skillTwodisplay");
let skillThreedisplay=document.querySelector("#skillThreedisplay");


function showData(){

let valueOne=skillOne.value.trim();
let valueTwo=skillTwo.value.trim();
let valueThree=skillThree.value.trim();

skillOnedisplay.textContent=valueOne;
skillTwodisplay.textContent=valueTwo;
skillThreedisplay.textContent=valueThree;

level()

}



function level(){

    let levelOneValue=levelOne.value.trim();
let levelTwoValue=levelTwo.value.trim();
let levelThreeValue=levelThree.value.trim();


    let centerX=150;
    let centerY=150;

    let newXTop=centerX+(150-centerX)*levelOneValue/10;
    let newYTop=centerY+(60-centerY)*levelOneValue/10;

let newXBottomRight=centerX+(80-centerX)*levelTwoValue/10;
let newYBottomRight=centerY+(220-centerY)*levelTwoValue/10;

let newXBottomLeft=centerX+(220-centerX)*levelThreeValue/10;
let newYBottomLeft=centerY+(220-centerY)*levelThreeValue/10;



let polygon=document.querySelector("polygon")
polygon.setAttribute("points", `${newXTop},${newYTop} ${newXBottomRight},${newYBottomRight} ${newXBottomLeft},${newYBottomLeft}`);

document.querySelector("#circleOne").setAttribute("cx","150px")
document.querySelector("#circleOne").setAttribute("cy","150px")
document.querySelector("#circleOne").setAttribute("r","2px")
document.querySelector("#circleOne").setAttribute("fill","black")



document.querySelector("#circleTwo").setAttribute("cx","150px")
document.querySelector("#circleTwo").setAttribute("cy","60px")
document.querySelector("#circleTwo").setAttribute("r","2px")
document.querySelector("#circleTwo").setAttribute("fill","red")

document.querySelector("#circleThree").setAttribute("cx","80px")
document.querySelector("#circleThree").setAttribute("cy","220px")
document.querySelector("#circleThree").setAttribute("r","2px")
document.querySelector("#circleThree").setAttribute("fill","green")

document.querySelector("#circleFour").setAttribute("cx","220px")
document.querySelector("#circleFour").setAttribute("cy","220px")
document.querySelector("#circleFour").setAttribute("r","2px")
document.querySelector("#circleFour").setAttribute("fill","brown")

}


btn.addEventListener("click",()=>{

    let valueOne=skillOne.value.trim();
let valueTwo=skillTwo.value.trim();
let valueThree=skillThree.value.trim();

let levelOneValue=levelOne.value.trim();
let levelTwoValue=levelTwo.value.trim();
let levelThreeValue=levelThree.value.trim();



    if(valueOne===""|| valueTwo===""|| valueThree==="" )
    {
     alert(`plese enter your skill`);
     return;

    }else if(levelOneValue==="" || levelTwoValue==="" || levelThreeValue==="")
    {
        alert(`please enter your level on skill`);
        return;

    }else{
        showData()
    }

    


})