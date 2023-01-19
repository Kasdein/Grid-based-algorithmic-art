// let textures = []
// const hexToRgb = hex => 
//     hex
//         .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,
//             (m, r, g, b) =>
//             `#${r}${r}${g}${g}${b}${b}`)
//         .substring(1)
//         .match(/.{2}/g)
//         .map(x => parseInt(x, 16))

// const colors = `
// #D4C5E2
// #C9D7F8
// #A7E2E3
// #80CFA9
// #4C6663
// #E3C567
// #C8963E
// #573D1C
// #D9AE61
// #D1462F
// #A30015
// #BD2D87
// #D664BE
// #DF99F0
// #B191FF
// `
//     .split('\n')
//     .map(hex => hexToRgb(hex))

// function preload() {
//     let texturesNum = 9
//     for(let i = 3; i <= texturesNum; i++){
//         // let texture = loadImage('images/texture'+i+'.png') //concatenation
//         let t = loadImage(`images/texture${i}.png`) // backticks are 'template literals' and ${} is now as string interpolation
//         textures.push(t) // adds texture to textures array
//     }
// }
function setup() {
  let colours = ['#D4C5E2', '#C9D7F8', '#A7E2E3', '#80CFA9', '#4C6663', '#E3C567', '#C8963E', '#573D1C', '#D9AE61', '#D1462F', '#A30015', '#BD2D87', '#D664BE', '#DF99F0', '#B191FF']
  let rColour1 = random(colours)
  let rColour2 = random(colours)
  let rColour3 = random(colours)
  createCanvas(800, 800)
  angleMode(DEGREES)
  rectMode(CENTER)
  const ctx = drawingContext
  const x = width * 0.5
  const y = height * 0.5
  rotate(45)
  translate(x* 0.5, -y)
  const squareSideDotsCount = 30
  stroke(0)
  const makeLinearGradient = (
    ctx,
    x1,
    y1,
    x2,
    y2,
    colorStops,
    colors,
  ) => {
    const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
    colorStops.forEach((stop, i) => gradient.addColorStop(stop, colors[i]))
    ctx.fillStyle = gradient
    return gradient
}
  
  const squareVertices = []
  let startAngle = 45
  for (let i = 0; i < 4; i += 1) {
    squareVertices.push({
      x: 400 * cos(startAngle),
      y: 400 * sin(startAngle)
    })
    startAngle += 360 * 0.25
  }
     
  const square = []
  for (let i = 0; i < 4; i += 1) {
    for (let j = 0; j < squareSideDotsCount; j += 1) {  
      const x = lerp(
        squareVertices[i].x,
        squareVertices[(i + 1) % squareVertices.length].x,
        j / squareSideDotsCount
      )
      const y = lerp(
        squareVertices[i].y,
        squareVertices[(i + 1) % squareVertices.length].y,
        j / squareSideDotsCount
      )
      square.push({ x, y })
    }
  }
  
  push()
  translate(x, y)
   for (let i = 0; i < square.length; i += 1) {
     push()
     noStroke()
     if (i % 2 === 0) {
        fill(0)
      } else {
        fill(255)
      }
     beginShape()
     vertex(square[i].x, square[i].y)
     vertex(0, 0)
     endShape(CLOSE)
     pop()
   }
  
  const innerRectSide = 520
  const cellCount = 7
  const grid = []
  const pointCount = cellCount ** 2
  const cellSide = innerRectSide / cellCount
  const startPoint = -(cellSide * (cellCount - 1)) * 0.5
  for (let rowIndex = 0; rowIndex < cellCount; rowIndex += 1) {
        for (let colIndex = 0; colIndex < cellCount; colIndex += 1) {
            grid.push({
              x: startPoint + colIndex * cellSide,
              y: startPoint + rowIndex * cellSide,
            })
        }
    }
  
  for (let rowIndex = 0; rowIndex < cellCount; rowIndex += 1) {
        for (let colIndex = 0; colIndex < cellCount; colIndex += 1) {
            const x = grid[rowIndex * cellCount + colIndex].x
            const y = grid[rowIndex * cellCount + colIndex].y
            const halfWidth = cellSide * 0.5
            // rect(x, y, cellSide)
            if (rowIndex % 2 === 1 && colIndex % 2 === 1) {
                push()
                fill(255)
                rect(x, y, cellSide)
                pop()

                push()
                fill(rColour1)
                rect(x + 5, y + 5, 25, 25)
                pop()

                push()
                fill(rColour2)
                rect(x, y, 25, 25)
                pop()

                push()
                fill(255)
                rect(x, y, 2, 2)
                pop()
            } else {
                noStroke()
                push()
                makeLinearGradient(
                    ctx,
                    x - halfWidth,
                    y - halfWidth,
                    x + halfWidth,
                    y - halfWidth,
                    [0, 1],
                    ['rgb(255, 0, 0)', 'rgb(255, 255, 255'])
                triangle(
                    x - halfWidth,
                    y - halfWidth,
                    x + halfWidth,
                    y - halfWidth,
                    x + halfWidth,
                    y + halfWidth,
                )
                pop()
                
                push()
                fill(rColour3)
                triangle(
                    x - halfWidth,
                    y - halfWidth,
                    x + halfWidth,
                    y - halfWidth,
                    x + halfWidth,
                    y + halfWidth,                    
                )
                pop()
                
                push()
                fill(0)
                circle(x, y, 30)
                pop()
                
                push()
                fill(rColour1)
                circle(x + 5, y + 5, 5)
                pop()

                push()
                strokeWeight(2)
                stroke(rColour2)
                line(x - halfWidth, x + halfWidth, y)
                pop()

                push()
                strokeWeight(2)
                stroke(rColour3)
                line(x, y - halfWidth, y + halfWidth)
                pop()
            }
        }
  }
  pop()
    // xVariation = 10
    // yVariation = 10
    // const CELL_SIZE = 25
    // let sizes = [CELL_SIZE, CELL_SIZE * 2, CELL_SIZE * 3]
    // let colours = [color('#F9DBBD'),color('#FCA17D'), color('#DA627D'), color('#9A348E'), color('#0D0628'), color('#485696'), color('#E7E7E7'), color('#F9C784'), color('#FC7A1E'), color('#F24C00'), color('#B9FFB7'), color('#ABEDC6'), color('#98D9C2'), color('#F19A3E'), color('#403233'),]
    // noStroke()
    // while(y < width) {
    //     while(x < height){
    //         tint(random(colours))
    //         let t = random(textures)
    //         push()
    //         translate(x + CELL_SIZE*0.5, y + CELL_SIZE*0.5)
    //         rotate(45)
    //         image(t, -CELL_SIZE*0.5, -CELL_SIZE*0.5, CELL_SIZE*0.8, CELL_SIZE*0.8)
    //         pop()

    //         push()
    //         translate(x + CELL_SIZE*1.5, y + CELL_SIZE*1.5)
    //         // image(t, x+random(- xVariation, xVariation), y+random(- yVariation, yVariation), CELL_SIZE, CELL_SIZE)


    //         x += CELL_SIZE
    //     }

    //     y += CELL_SIZE
    //     x = 0
    // }
} 