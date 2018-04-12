/**
 * Created at 2018/4/12 17:48
 * Author esinger (Weibo: http://weibo.com/esinger Wechat: esinger)
 * Copyright pinfankeji.com
 */


function rgbaToRgb(r, g, b, a) {
    r = Math.round((255 - r) * (1 - a))
    g = Math.round((255 - g) * (1 - a))
    b = Math.round((255 - b) * (1 - a))

    return decToHex(r) + decToHex(g) + decToHex(b)
}

function decToHex(n) {
    n = n.toString(16)
    return n.length == 1 ? '0' + n : n
}