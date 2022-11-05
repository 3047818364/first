window.onload = function(){
    var img = document.getElementsByTagName("img")
    // console.log(img)
for (let index = 0; index < img.length; index++) {
    var y = "rotateY(" +  index*(360/img.length) + "deg) translateZ(" + 500 +"px)"
    img[index].style.transform = y   
}
}
