const rectangles = []

function Rectangle(x, y) {
    this.x = x
    this.y = y

    this. show = function() {
        fill(255)
        strokeWeight(5)
        stroke(5)
        rect(this.x, this.y, 50, 50)
    }
}

function setup(){
    const cellSize = 50
    gridSize = 750 


    createCanvas(gridSize, gridSize)
    strokeWeight(5)
    stroke(0)

    for(let a = 0; a < gridSize; a += 50){
        for(let b = 0; b < gridSize; b +=50){
            rectangles.push(new Rectangle(a, b))
        }
    }
}

function draw(){
    background(50)
    for (let b = 0; b < rectangles.length; b++){
        rectangles[b].show()
    }
}

