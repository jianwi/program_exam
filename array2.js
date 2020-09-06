let a = `2,4,5
1,3,4,4,4,4,6,4`
let str1line = ""

let [str1, str2] = a.split("\n")

let a1 = str1.split(",")
let a2 = str2.split(",")
let max_length = a1.length
let a1_eq_a2 = true

if (a1.length !== a2.length) {
    max_length = a1.length > a2.length?a1.length:a2.length
    a1_eq_a2 = false
}

for (let i = 0; i < max_length; i++) {
    if (a1_eq_a2) {
        if (i === max_length - 1) {
            str1line += a1[i] + ',' + a2[i]
        } else {
            str1line += a1[i] + ',' + a2[i] + ','
        }
    } else if (a1.length < a2.length) {
        if (i < a1.length) {
            str1line += a1[i] + ',' + a2[i] + ','
        } else {
            if (i === max_length - 1) {
                str1line += a2[i]
            } else {
                str1line += a2[i] + ','
            }
        }
    }else {
        if (i < a2.length) {
            str1line += a1[i] + ',' + a2[i] + ','
        } else {
            if (i === max_length - 1) {
                str1line += a1[i]
            } else {
                str1line += a1[i] + ','
            }
        }
    }
}

console.log(str1line)