function double(x) {
    return x * 2
}

function* removeRandomElements(a) {
    const l = a.length
    if (l !== 0 || l === 1) {
        yield a
    }

    for (let i = 0; i < l; i++) { // i - index of elements to delete
        const aCopy = [...a]
        delete aCopy[i]
        const newA = aCopy.filter((x) => x)
        if (newA.length !== 0) {
            yield newA
        }
        for (let y of removeRandomElements(newA)) {
            yield y
        }
    }
}

module.exports = {
    double,
    removeRandomElements
}