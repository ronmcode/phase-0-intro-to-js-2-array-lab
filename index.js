// Write your solution here!
const cats= [ "Milo", "Otis", "Garfield",]

function destructivelyAppendCat(Ralph){
    cats.push(Ralph)
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob)
 }
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    const copyOfCats= [...cats, name]
    return copyOfCats
}
function prependCat(name){
    const copyOfCats1= [name, ...cats]
    return copyOfCats1
}
function removeLastCat(){
    const copyOfCats2= cats.slice(0,cats.length-1)
    return copyOfCats2
}
function removeFirstCat(){
    const copyOfCats3= cats.slice(1)
    return copyOfCats3
}





