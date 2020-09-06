let line = 2
let rows = ["43211234", "101"]
let all_times = []

for (let row of rows) {
    let num_array = [...row]
    let times = 0
    for (let i = 0; i < num_array.length; i++)
    la:{
        if (i<num_array.length-2)
        {
            if (num_array[i] === num_array[i+1]){
                times += 1
                let l = i-1;
                let r = i+2
                while (num_array[l] === num_array[r]){
                    times += 1
                    if (r < num_array.length - 1){
                        l--
                        r++
                    }else {
                        break la
                    }
                }
            }
        }
    }
    all_times.push(times)
}

console.log(all_times.join("\n"))
