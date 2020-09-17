//  现在有一个 fun 函数，给它定义一个 beforeFun 函数，让在执行 fun 之前调用 beforeFun

before_fun = arg=>{
    return arg * 2
}
function fun(arg){
    return arg + 4
}

fun.beforeFun = function(fn)
{
    return arg => {
        return fun(fn(arg))
    }
}

//  先计算beforFun ，后计算fun
console.log(fun.beforeFun(before_fun)(2))

// 括号后面写括号，肯定返回了个函数。。。