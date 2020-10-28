function warnTheSheep(queue) {
    // your code here
    let counter = 0

    for (let i = queue.length-1; i >= 0; i--){
        counter++
        let messages
        if(queue[queue.length-1] === "wolf"){
            messages = "Pls go away and stop eating my sheep"
        }else if(queue[i] === "wolf"){
            messages = `Oi! Sheep number ${counter -1}! You are about to be eaten by a wolf!`
        } return messages 
    }  
}


// Test Function do not edit
function Test(fun, result) {
    console.log(fun === result)
}


// Test assertions
Test(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");
Test(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");