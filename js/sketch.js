x = 0
y = 0
increment = 20

function setup(){
    const CELL_SIZE = 50
    let xVariation = 0
    let yVariation = 0
    let widthVariation = 0
    let heightVariation = 0
    let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3]
    let currentWidth = random(sizes)
    let currentHeight = random(sizes)
    let colours = [color('#6051c0'),color('#fef007'), color('##1e1818'), color('#dbdee5'), color('#dd342f'), color('#f0fbf7')]
    createCanvas(800, 800)
    background(0)
    strokeWeight(10)
    stroke(55)

    while(y < height){
        while(x < width){
            fill(random(colours))
            //adds jitter
            // rect(x+random(-xVariation, xVariation), y+random(-yVariation, yVariation), CELL_SIZE)
            // CELL_SIZE + random(-widthVariation, widthVariation), 
            // CELL_SIZE + random(-heightVariation, heightVariation)
            rect(x, y, currentWidth, currentHeight)
            x+= currentWidth
            currentWidth = random(sizes)
        }
        y+= currentHeight
        currentHeight = random(sizes)
        x=0
    }
}

function draw(){

}