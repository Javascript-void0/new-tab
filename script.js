// STATS

setInterval(setTime, 1000)

function setTime() {
    now = new Date()
    totalMinutes = (now.getHours() * 60) + (now.getMinutes())
    percent = totalMinutes / 1440
    barCount = 10
    filledBars = Math.floor(barCount * percent)
    emptyBars = generateBars(barCount - filledBars)
    filledBars = generateBars(filledBars)

    document.getElementById('time').innerHTML = `
        <br>time: ${now.toLocaleTimeString()}
        <br>date: ${now.toLocaleDateString('en-US')}
        <br>%day: <span class="bar-fill">${filledBars}</span><span class="bar-empty">${emptyBars}</span> (${Math.round(percent * 100)}%)
    `
}

function generateBars(num) {
    bars = ''
    for (i = 0; i < num; i++) {
        bars += '/'
    }
    return bars
}

// ANIMATION

setInterval(animate, 200)

animation = [
    '          (\\/)      ',
    'ading...  (._.)   Lo',
    '          / > >     '
    ]

function animate() {
        
    finalFrame = ''
    aniBunny = document.getElementById('ascii-bunny')
    for (i = 0; i < 3; i++) {
        finalFrame += '<br>' + animation[i].replaceAll(' ', '&nbsp') + '\n'
        last = animation[i].slice(-1)
        rest = animation[i].slice(0, animation[i].length - 1)
        animation[i] = last + rest
    }
    aniBunny.innerHTML = finalFrame
}

// ANIMATION 2

setInterval(animate2, 180)

frameNum = 0
animation2 = [
    [
        "         ",
        " _      __",
        "|(     /_(",
        "`.\\V)/.' ",
        "  `\"-'   ",
        "         ",
        "         "
    ],
    [
        "         ",
        "         ",
        "         ",
        "   V)_   ",
        "  /\"- \\  ",
        "  |( |(  ",
        "  \\( \\(  "
    ],
    [
        "         ",
        "         ",
        "         ",
        "  .V)-.  ",
        " / \"-\\.\\ ",
        " \\(   )/ ",
        "         "
    ],
    [
        "   _   __",
        "  |(  /_(",
        "  \\(  |\\(",
        "   V)-`/ ",
        "   \"-'   ",
        "         ",
        "         "
    ],
    [
        "         ",
        " _      __",
        "|(     /_(",
        "`.\\V)/.' ",
        "  `\"-'   ",
        "         ",
        "         "
    ],
    [
        "         ",
        "         ",
        "         ",
        "   V)_   ",
        "  /\"- \\  ",
        "  |( |(  ",
        "  \\( \\(  "
    ],
    [
        "         ",
        "         ",
        "         ",
        "  .V)-.  ",
        " /  -\\.\\ ",
        " \\(   )/ ",
        "         "
    ],
    [
        "   _   __",
        "  |(  /_(",
        "  \\(  |\\(",
        "   V)-`/ ",
        "   \"-'   ",
        "         ",
        "         "
    ]
]

function animate2() {
    frame = animation2[frameNum]
    for (i = 0; i < frame.length; i++) {
        frame[i] = frame[i].replaceAll(' ', '&nbsp;')
    }
    ele = document.getElementById('ascii-bat')
    ele.innerHTML = frame.join("<br>")
    frameNum++
    if (frameNum > 7) {
        frameNum = 0
    }
}

// RESIZE

const charWidth = 8.595

setInterval(function() {
    rightSideWidth = document.getElementById('content').offsetWidth - document.getElementById('content-left').offsetWidth
    charFit = Math.floor(rightSideWidth / charWidth) - 3
    titles = document.getElementsByClassName('link-titles')
    for (title of titles) {
        while (title.textContent.length < charFit) {
            title.textContent = title.textContent + '-'
        }
        while (title.textContent.length > charFit) {
            str = title.textContent
            title.textContent = str.substring(0, str.length - 1)
        }
    }
}, 10);