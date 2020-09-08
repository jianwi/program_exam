function Solution(S) {
    let current_num = S[0]
    // 剩余长度
    let left_length = S.length-1
    if(current_num === 0) return Infinity
    let last_end = 1
    let times = 0

    while (left_length > 0)
    {
        // 当前范围的 数组
        let step_arr = S.slice(last_end,current_num + last_end)
        // 求数组中 数字 加上 index 最大的值
        let obj = {}
        for (let i = 0; i < step_arr.lengtjh; i++) {
            if (step_arr[i] === undefined) continue
            if (step_arr[i] === 0) continue
            obj[step_arr[i] + i] = step_arr[i]
        }
        // console.log(obj)
        let max_num = Math.max(...Object.keys(obj))
        // 最大数的 index
        let max_index = step_arr.indexOf(obj[max_num])
        if(max_num < 0) return Infinity
        // 最大值的最后一个 index

        last_end = max_index  + last_end
        current_num = max_num
        left_length = left_length - max_index - max_num
        times += 1
    }

    return times
}
// 看谁的范围大，取加上index最大的，如果相同，取最后一个位置
function step()
{

}

console.log(Solution([2,0,0,2,3, 1, 1, 4]))