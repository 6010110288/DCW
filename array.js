let x = [2, 1, 7, 8]

let y = x.filter(it => it % 2 == 0)

console.log("filter = " + y)

y = x.map(it => it * it)

console.log("map = " + y)