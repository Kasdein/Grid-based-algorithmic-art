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
    angleMode(DEGREES)
    xVariation = 10
    yVariation = 10
    const CELL_SIZE = 25
    let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3]
    let colours = [color('#F9DBBD'),color('#FCA17D'), color('#DA627D'), color('#9A348E'), color('#0D0628'), color('#485696'), color('#E7E7E7'), color('#F9C784'), color('#FC7A1E'), color('#F24C00'), color('#B9FFB7'), color('#ABEDC6'), color('#98D9C2'), color('#F19A3E'), color('#403233'),]
    createCanvas(800, 800)
    background(200, 200, 200)
    let x = 0
    let y = 0
    noStroke()
    while(y < width) {
        while(x < height){
            translate(400, 400)
            rotate(90)
            translate(0, 0)
            let t = random(textures)
            // image(t, x+random(- xVariation, xVariation), y+random(- yVariation, yVariation), CELL_SIZE, CELL_SIZE)
            image(t, x, y, CELL_SIZE, CELL_SIZE)
            tint(random(colours))
            x += CELL_SIZE
        }
        translate(400, 400)
        rotate(125)
        translate(0, 0)
        y += CELL_SIZE
        x = 0
    }
}