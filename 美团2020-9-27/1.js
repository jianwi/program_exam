// 服装店新进了a条领带，b条裤子，c个帽子，d件衬衫，现在要把这些搭配起来售卖。有三种搭配方式，一条领带和一件衬衫，一条裤子和一件衬衫，一个帽子和一件衬衫。卖出一套领带加衬衫可以得到e元，卖出一套裤子加衬衫可以得到f元，卖出一套帽子加衬衫可以得到g元。现在你需要输出最大的获利方式。
let num_str = "2 3 4 5 6 7 8"
let num_arr = num_str.split(" ")

// a条领带，b条裤子，c个帽子，d件衬衫，
// a+d = 6
// b+d = 7
// c+d = 8
// 取决于衬衫的个数

let t_shirt_nums = num_arr[3]
// 给a,b,c排序，取最大的一个 和 t-shirt 搭配
// 如果 t-shirt 有剩余，和第二个搭配

let goods = num_arr.slice(4, 7)
// goods.sort((l,r)=>r-l)
let goods_and_count = new Map()
for (let i = 0, j = 4; i < 4, j < 7; i++, j++) {
    goods_and_count.set(num_arr[j], num_arr[i])
}

console.log(goods_and_count)

// 价格排序
let prize = [...goods_and_count.keys()].sort((l, r) => r - l)
// console.log(prize)
let index = 0
let award = 0
while (t_shirt_nums > 0) {
    // 当前存在的“最大价格物质”的数量
    let current_max = goods_and_count.get(prize[index])
    console.log("当前最高价的数量",current_max)
    if (t_shirt_nums > current_max) {
        t_shirt_nums = t_shirt_nums - current_max
        // 价格计算
        award += current_max * prize[index]
        index++
    } else if (t_shirt_nums === current_max) {
        t_shirt_nums = 0
        award += current_max * prize[index]
    }else {
        // t-shirt数量 比当前最大值小的情况
        award += t_shirt_nums * prize[index]
        t_shirt_nums = 0
    }
}

console.log(award)