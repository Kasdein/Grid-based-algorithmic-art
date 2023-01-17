let textures = []

function preload() {
    let texturesNum = 9
    for(let i = 3; i <= texturesNum; i++){
        // let texture = loadImage('images/texture'+i+'.png') //concatenation
        let t = loadImage(`images/texture${i}.png`) // backticks are 'template literals' and ${} is now as string interpolation
        textures.push(t) // adds texture to textures array
    }
}
function setup() {
    xVariation = 10
    yVariation = 10
    // let widthVariation = 0
    // let heightVariation = 0
    const CELL_SIZE = 25
    let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3]
    let colours = [color('#F9DBBD'),color('#FCA17D'), color('#DA627D'), color('#9A348E'), color('#0D0628'), color('#485696'), color('#E7E7E7'), color('#F9C784'), color('#FC7A1E'), color('#F24C00'), color('#B9FFB7'), color('#ABEDC6'), color('#98D9C2'), color('#F19A3E'), color('#403233'),]
    createCanvas(800, 800)
    background(200, 200, 200)
    // let currentWidth = random(sizes)
    // let currentHeight = random(sizes)

    let x = 0
    let y = 0
    noStroke()
    while(y < width) {
        while(x < height){
            let t = random(textures)
            image(t, x+random(- xVariation, xVariation), y+random(- yVariation, yVariation), CELL_SIZE, CELL_SIZE)
            tint(random(colours))
            // CELL_SIZE + random(-widthVariation, widthVariation), CELL_SIZE + random(-heightVariation, heightVariation)
            // currentWidth = random(sizes)
            // let availableWidth = width - x
            // while(currentWidth > availableWidth){
            //     currentWidth -= CELL_SIZE
            // }
            // x += CELL_SIZE
            x += CELL_SIZE
        }
        // y += CELL_SIZE
        y += CELL_SIZE

        // let availableHeight = height - y
        currentHeight = random(sizes)
        // while(currentHeight > availableHeight){
        //     currentHeight -= CELL_SIZE
        // }
        x = 0
    }
}