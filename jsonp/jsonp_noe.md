# jsonp 学习笔记

## 什么是 jsonp ？
一说跨域你想到什么？肯定是大名鼎鼎的 jsonp ，那什么是 jsonp ，通俗的说
jsonp 就是通过 script 标签的 src 属性可以跨过同源策略限制，请求其他域
的文件（数据），而传输数据时使用了通用的 json 格式，于是取名 jsonp

## jsonp 干什么用的？
自然是跨域取数据用的。。。

## jsonp 的简单实现？

痛快贴代码：
```
function jsonp (opts) {
    var jsonpCb = opts.jsonpCB || 'jsonpCallBack';
    var url = opts.url ? opts.url + '?jsonpCallBack=' + jsonpCb : console.error('%cwe need a url for data!', 'font-size: 50px;');
    var script = document.createElement('script');
    script.setAttribute('src', url);
    window[jsonpCb] = function (data) {
        delete window[jsonpCb];
        opts.cb(data);
    }
    document.getElementsByTagName('head')[0].appendChild(script);
}
jsonp({
    url: '/qqstr',
    cb: function (qqstr) {
        var lis = document.getElementsByClassName('qqstr');
        for (var i = 0; i < lis.length; i++) {
            lis[i].innerHTML = qqstr;
        }
    }
});
```
