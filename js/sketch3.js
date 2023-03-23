const rectangles = []
hexColours = ["F09156", "605770", "BDADEA", "7D451B", "B9F18C"]
let positive = 25
let negative = -25
let inc = 5
let max = 50
let positiveList = []
let negativeList = []

String.prototype.convertToRgb = function () {
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
    this.show = function () {

        noStroke()
        for (i = 0; i <= 4; i++) {
            fill(random(rgbColours))
            quad(x + positiveList[1 + i], y, x, y + positiveList[1 + i], x + negativeList[1 + i], y, x, y + negativeList[1 + i])
        }

        // for (i = 0; i <= 4; i++) {
        //     fill(random(rgbColours))
        //     quad(x + positiveList[0 + i], y, x, y + positiveList[0 + i], x + negativeList[0 + i], y, x, y + negativeList[0 + i])
        // }
    }
}

function setup() {
    for (i = 0; i <= 4; i++) {
        positiveList.push(positive - (inc * i))
        negativeList.push(negative + (inc * i))
    }
    const cellSize = 25
    gridSize = 750
    noLoop()
    // frameRate(1)

    createCanvas(gridSize + cellSize, gridSize + cellSize)
    strokeWeight(5)
    stroke(0)

    for (let a = 0; a < gridSize - inc; a += max) {
        for (let b = 0; b < gridSize - inc; b += max) {
            rectangles.push(new Rectangle(a, b))
        }
    }
}

function draw() {
    background(0)
    translate(positive, positive)
    for (let b = 0; b < rectangles.length; b++) {
        rectangles[b].show()
    }
    push()
    translate(positive, positive)
    for (let b = 0; b < rectangles.length; b++) {
        rectangles[b].show()
    }
    pop()
}