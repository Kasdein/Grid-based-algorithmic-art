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
  let colours1 = ['#A4036F', '#FFBE0B', '#28262C']
  let colours2 = ['#A4036F', '#FB5607', '#998FC7']
  let colours3 = ['#16DB93', '#FF006E', '#D4C2FC']
  let colours4 = ['#EFEA5A', '#8338EC', '#F9F5FF']
  let colours5 = ['#F29E4C', '#3A86FF', '#F5E6E8']

  let rColour1 = random(colours1)
  let rColour2 = random(colours2)
  let rColour3 = random(colours3)
  let rColour4 = random(colours4)
  let rColour5 = random(colours5)

  createCanvas(800, 800)
  angleMode(DEGREES)
  rectMode(CENTER)
  const x = width * 0.5
  const y = height * 0.5
  rotate(45)
  translate(x * 1.4, y * 0.1)
  // translate(x, y)
  
  const innerRectSide = 520
  const cellCount = 7
  const grid = []
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
                noStroke()

                push()
                fill(rColour3)
                triangle(
                    x + halfWidth,
                    y + halfWidth,
                    x - halfWidth,
                    y + halfWidth,
                    x - halfWidth,
                    y - halfWidth,                    
                )
                pop()


                push()
                fill(rColour2)
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
                fill(rColour2)
                rect(x + 25, y + 25, 25, 25)
                pop()

                push()
                fill(rColour5)
                rect(x - 25, y + 25, 25, 25)
                pop()

                push()
                fill(rColour1)
                rect(x + 25, y - 25, 25, 25)
                pop()

                push()
                fill(rColour3)
                rect(x - 25, y - 25, 25, 25)
                pop()

                push()
                fill(rColour4)
                rect(x, y, 25, 25)
                pop()

                push()
                fill(rColour1)
                rect(x, y, 2, 2)
                pop()
            } else {
                noStroke()
                
                push()
                fill(rColour3)
                triangle(
                    x + halfWidth,
                    y + halfWidth,
                    x - halfWidth,
                    y + halfWidth,
                    x - halfWidth,
                    y - halfWidth,                    
                )
                pop()


                push()
                fill(rColour2)
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
                fill(rColour2)
                rect(x + 25, y + 25, 25, 25)
                pop()

                push()
                fill(rColour5)
                rect(x - 25, y + 25, 25, 25)
                pop()

                push()
                fill(rColour1)
                rect(x + 25, y - 25, 25, 25)
                pop()

                push()
                fill(rColour3)
                rect(x - 25, y - 25, 25, 25)
                pop()

                push()
                fill(rColour4)
                rect(x, y, 25, 25)
                pop()

                push()
                fill(rColour1)
                rect(x, y, 2, 2)
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