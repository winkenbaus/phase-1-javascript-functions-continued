// Your code here
function saturdayFun(activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`);
}

const fn = mondayWork = function(destination = "go to the office"){
    return(`This Monday, I will ${destination}.`)
}
mondayWork("work from home")


function wrapAdjective(flair= "*"){
    return function(baseline ="special"){ 
    //let emphatic = "a hard worker"
    return(`You are ${flair}${baseline}${flair}!`)
    }
}