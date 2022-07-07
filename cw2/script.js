
const gamePlane = document.querySelector(".gamePlane")
gamePlane.style.cssText =`
    border:2px dashed red; 
    height:100vh;
    position:relative`

function makeWall(x, y, w, h){
    const wall = document.createElement("div")
    wall.style.cssText =`
    position: absolute;
    background-color: pink;
    width:${w}%;
    height:${h}%;
    left:${x}%;
    top:${y}%;
    `
    gamePlane.append(wall)
}

const map = [
    [10,10,5,5],
    [20,20,5,5],
    [30,30,5,5]
]

for(const wall of map){
    makeWall(...wall)
}



// format(let i=0; i< map.length, i++){
//     // console.log(map.[i])
//     wakeWall(map[i])
// }





