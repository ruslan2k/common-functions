const _ = require('lodash')
const assert = require('assert')

const { removeRandomElements } = require('./index')

const a = {
    src: [1],
    dest: [1]
}

const b = [1,2]
const bRnd = [[1],[2],[1,2]]

//const c = [1,2,3]
//const d = [1,2,3,4]
const x = Array(a, b)
for (const someArray of x) {
    console.log(someArray);
    const { src, dest } = someArray;
    const result = _.uniqBy([...removeRandomElements(src)], function(e){
        return JSON.stringify(e.sort())
    })
    console.log({src, dest, result});
}

//console.log([...removeRandomElements(b)])

//const b = _.uniqBy([...removeRandomElements(a)], function (e) {
//    return JSON.stringify(e.sort())
//});
//console.log('b', b)
