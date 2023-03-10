const rectangles = []
hexColours = ["F09156", "605770", "BDADEA", "7D451B", "B9F18C"]
let positive = 25
let negative = -25
let inc = 5
let max = 50
let positive1 = positive - inc
let negative1 = negative + inc
let positive2 = positive - (inc*2)
let negative2 = negative + (inc*2)
let positive3 = positive - (inc*3)
let negative3 = negative + (inc*3)
let positive4 = positive - (inc*4)
let negative4 = negative + (inc*4)

String.prototype.convertToRgb = function() {
    let fromHexToRgb = this.match(/.{1,2}/g)
    let toRgb = [
        parseInt(fromHexToRgb[0], 16),
        parseInt(fromHexToRgb[1], 16),
        parseInt(fromHexToRgb[2], 16)
    ]
    return toRgb
}

function Rectangle(x, y) {
    rgbColours = [hexColours[0].convertToRgb(), hexColours[1].convertToRgb(), hexColours[2].convertToRgb(), hexColours[3].convertToRgb(), hexColours[4].convertToRgb()]
    console.log(rgbColours)
    this.show = function() {
        noStroke()
        fill(random(rgbColours))
        quad(x + positive, y, x, y + positive, x + negative, y, x, y + negative)
        fill(random(rgbColours))
        quad(x + positive1, y, x, y + positive1, x + negative1, y, x, y + negative1)
        fill(random(rgbColours))
        quad(x + positive2, y, x, y + positive2, x + negative2, y, x, y + negative2)
        fill(random(rgbColours))
        quad(x + positive3, y, x, y + positive3, x + negative3, y, x, y + negative3)
        fill(random(rgbColours))
        quad(x + positive4, y, x, y + positive4, x + negative4, y, x, y + negative4)
    }
}

function setup(){
    const cellSize = 25
    gridSize = 750 
    // noLoop()
    frameRate(1)

    createCanvas(gridSize + cellSize, gridSize + cellSize)
    strokeWeight(5)
    stroke(0)

    for(let a = 0; a < gridSize - inc; a += max){
        for(let b = 0; b < gridSize - inc; b += max){
            rectangles.push(new Rectangle(a, b))
        }
    }
}

function draw(){
    background(0)
    translate(positive, positive)
    for (let b = 0; b < rectangles.length; b++){
        rectangles[b].show()
    }
    push()
    translate(positive, positive)
    for (let b = 0; b < rectangles.length; b++){
        rectangles[b].show()
    }
    pop()
}