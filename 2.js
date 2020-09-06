let str = `{"1":123,"2":234,"8":456}`
let json = JSON.parse(str)
let res_arr = []

for(let arr of Object.entries(json)){
    res_arr[parseInt(arr[0])-1] = arr[1]
}

for (let i=0;i<res_arr.length;i++){
    if (res_arr[i] === undefined){
        res_arr[i] = 0
    }
}
console.log("[" + res_arr.toString() + "]")