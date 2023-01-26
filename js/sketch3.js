const rectangles = []
function Rectangle(x, y) {

    this. show = function() {
        noStroke()
        fill(255)
        quad(x + 25, y, x, y + 25, x - 25, y, x, y - 25)
        fill(0)
        quad(x + 20, y, x, y + 20, x - 20, y, x, y - 20)
        fill(255)
        quad(x + 15, y, x, y + 15, x - 15, y, x, y - 15)
        fill(0)
        quad(x + 10, y, x, y + 10, x - 10, y, x, y - 10)
        fill(255)
        quad(x + 5, y, x, y + 5, x - 5, y, x, y - 5)
    }
}

function setup(){
    const cellSize = 50
    gridSize = 750 


    createCanvas(gridSize + cellSize*0.5, gridSize + cellSize*0.5)
    strokeWeight(5)
    stroke(0)

    for(let a = 0; a < gridSize -50; a += 50){
        for(let b = 0; b < gridSize -50; b +=50){
            rectangles.push(new Rectangle(a, b))
        }
    }
}

function draw(){
    background(50)
    translate(25, 25)
    for (let b = 0; b < rectangles.length; b++){
        rectangles[b].show()
    }
    push()
    translate(25, 25)
    for (let b = 0; b < rectangles.length; b++){
        rectangles[b].show()
    }
    pop()
}

// const quads = []

// function Diamond(x1, y1, x2, y2, x3, y3, x4, y4) {
//     this.x1 = x1
//     this.y1 = y1
//     this.x2 = x2
//     this.y2 = y2
//     this.x3 = x3
//     this.y3 = y3
//     this.x4 = x4
//     this.y4 = y4

//     this. show = function() {
//         fill(255)
//         strokeWeight(5)
//         stroke(5)
//         quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4, 50, 50)
//         rect()
//     }
// }

// function setup(){
//     const cellSize = 50
//     gridSize = 750 


//     createCanvas(gridSize, gridSize)
//     strokeWeight(5)
//     stroke(0)

//     for(let a = 0; a < gridSize; a += 50){
//         for(let b = 0; b < gridSize; b +=50){
//             quads.push(new Diamond(a, b + 25, a - 25, b + 25, a + 25, b -25, a - 25, b - 25))
//         }
//     }
// }

// function draw(){
//     background(50)
//     for (let b = 0; b < quad.length; b++){
//         quads[b].show()
//     }
// }