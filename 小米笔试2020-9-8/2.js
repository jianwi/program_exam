function Solution(a, b) {
    a = a * 1000
    b = b * 1000
    let res = a*b
    return res/1e6
}

console.log(Solution(0.9, 0.001))