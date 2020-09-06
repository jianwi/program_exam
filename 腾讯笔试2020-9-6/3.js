let line = 6
let nums = "1 2 3 4 5 6"
let res = []

let num_arr = nums.split(" ")
num_arr.sort((l,n)=>l-n)

for(let i=0;i<line;i++) {
    let temp = [...num_arr]
    temp.splice(i,1)
    res.push(temp[line/2-1])
}

console.log(res)