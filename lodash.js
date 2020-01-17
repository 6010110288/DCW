let _ = require('lodash')

let x = [2, 1, 7, 8]
let y = _.filter(x, it => it % 2 == 0)
y = _.map(y, it => it * it)

console.log(y)