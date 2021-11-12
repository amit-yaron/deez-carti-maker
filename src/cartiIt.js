function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const genRndSymbols = () => {
    switch (getRandomInt(1, 4)) {
        case 1:
            return "*!^"
        case 2:
            return "+*@"
        case 3:
            return "*!+"
        case 4:
            return "^*("
        default:
            return "^*++"
    }
}

export default function cartiIt(msg) {
    var finalString = ""

    msg.split('').forEach(letter => {
        var rndBool = Math.random() < .5
        var rndBool2 = Math.random() < .75

        finalString += rndBool ? letter.toUpperCase() : letter.toLowerCase()

        if (letter === " ") {
            if (rndBool2)
                finalString += rndBool ? "🦋" : "🧛🏿‍♂️"
            finalString += genRndSymbols()
        }
    })

    finalString = finalString.replace(/\s/g, '');

    return finalString
}

