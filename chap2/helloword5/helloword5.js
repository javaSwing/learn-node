function say (personName) {
    console.log('hello ' + personName)
}

function eat (food) {
    console.log('我正在吃：' + food)
}

exports.eat = eat
exports.say = say