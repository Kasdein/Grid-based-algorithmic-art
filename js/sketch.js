    //variables
    let x = 0
    let y = 0
    let theta = 0
    let inc = 0.025
    let offset = 0 //the ammount offset from beginning of wave
    let amplitude
    let frequency
    let maxAngle


function setup() {
    createCanvas(windowWidth, windowHeight)

    // amplitude = windowHeight*0.25
    // frequency = windowWidth*0.001


    // amplitude = windowHeight * 0.042
    // frequency = windowWidth * 32


    amplitude = windowHeight * 0.1
    frequency = windowWidth * 0.8
    maxAngle = (windowWidth/frequency) * TAU





    // x = width / 1/3
    // y = height
}

function draw() {   


    //Animated waves
    fill(0, 153, 0)
    background(0)
    noStroke()
    let length = 5

    while(theta < maxAngle + offset) {
        // amplitude = sin(theta - offset) * (windowHeight/2)
        // amplitude = ((theta - offset)/maxAngle) * (windowHeight/2)
        for (i = length; i > 0; i --) {
            y = sin(theta - (i * 0.05)) * amplitude
            fill (255 - (255/length * i), 100, 100)
            ellipse (x, y + height * 0.5, 12)
        }
        for (i = length; i > 0; i--){
            y = cos(theta - (i * 0.05)) * amplitude
            fill(100, 200, 255 - (255/length * i))
            ellipse(x, y + height/2, 12)
        }
        theta += 0.1
        x = ((theta - offset)/maxAngle) * windowWidth
    }
    offset += inc
    theta = offset
    //while 2
    // while(theta < maxAngle + offset) {
    // //creates a sine wave
    // // sine 2
    //     y = sin(theta) * amplitude
    //     fill(204, 255, 255)
    //     ellipse(x, y + height * 0.5, 25)
    //     theta += 0.05
    //     x = ((theta - offset)/maxAngle * windowWidth)   
    // //sine 2
    //     y = sin(theta) * amplitude
    //     fill (255, 204, 153)
    //     ellipse(x, y + height * 0.5, 25)
    //     theta += 0.05
    //     x = ((theta - offset)/maxAngle * windowWidth)

    // //creates a cos wave
    // // cos 1
    //     y = cos(theta) * amplitude
    //     ellipse(x, y + height * 0.5, 25)
    //     theta += 0.05
    //     x = ((theta - offset)/maxAngle * windowWidth)
    // //cos 2
    //     y = cos(theta) * amplitude
    //     fill(204, 255, 255)
    //     ellipse(x, y + height * 0.5, 25)
    //     theta += 0.05
    //     x = ((theta - offset)/maxAngle * windowWidth)
    // }
    // offset += inc
    // theta = offset

    //Random Animated balloon 
    // background(250)

    // stroke(25)
    // fill(100)
    // ellipse(x, y, 25, 25)

    // x = x + random(-15, 15)
    // y = y - 2.5

    // if (y < 0) {
    //     y = height
    // }
}
