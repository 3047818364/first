// 获取img列表
var imglist = document.getElementsByTagName('img')
// 获取ul
var uls = document.getElementById('imglist')
// 设置定时器的变量
var time;
// 设置ul的宽度
uls.style.width = imglist.length * 280 + "px"
// 获取外部标志盒子
var navDiv = document.getElementById('navDiv')
for (let index = 0; index < imglist.length - 1; index++) {
    // 创建外部标志----a标签
    let a = document.createElement("a")
    a.href = "#"
    a.innerHTML = index
    // 将创建的a标签添加到外部盒子
    navDiv.append(a)
}
// 设置图片的序号
var index = 0
// 获取标志集合
var alist = document.getElementsByTagName('a')
// 设置标志集合的位置
navDiv.style.left =  ( 280 -( alist.length * 16) )/2 + "px"
// 设置标志集合的颜色
alist[index].style.backgroundColor = "black"
// 设置点击标志的颜色并修改图片
for (let x = 0; x < alist.length; x++) {
    // 点击标志
    alist[x].onclick = function(){
        // 关闭定时器
    clearInterval(time)
    // 设置图片的序号
    index = x
    // 使用外部函数移动图片
    move(uls,'left',-280 * x,10,function () {
        // 执行自动移动图片函数
        cut()
    })
    // uls.style.left = - (x * 280) + "px"
    // 执行标志切换和改变颜色函数
    sele()
    }
}
// 设置标志颜色函数
function sele() {
    // 判断图片是否为最后一张图片
    if (index > alist.length -1) {
        // 如果是则图片序号为第一张
        index = 0
        // uls.style.left = 0 + "px"
        // console.log(uls.style.left)
        // clearInterval(time)
        // cut()
    }
    //设置标志颜色
    for (let x = 0; x < alist.length; x++) {
        alist[x].style.backgroundColor = "red"
    }
    alist[index].style.backgroundColor = "black"
}
// 设置自动切换图片函数
function cut() {
    // 创建一个定时器
    time = setInterval(() => {
    index++
    // 判断是否为最后一张图片
    // 如果不是
    if (index < (imglist.length-1)) {
        // console.log(index)
        // console.log(imglist.length-1)
        // index %=imglist.length
        // 切换图片
        move(uls,"left",-280*index,10)
        // 执行标志颜色函数
        sele()
        // 如果是
    } else {
        // 先切换到最后一张图片
        move(uls,"left",-280*index,10,function () {
            // 然后回到第一张图片
            uls.style.left = 0 +"px"
        })
        // 执行标志颜色函数
        sele()
    }
}, 1000);
}
cut()