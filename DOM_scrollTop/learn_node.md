# DOM操作 scrollTop 滑动问题

## 获取scrollTop

因为万恶的兼容性，我们一般以如下方式获取 scrollTop 值：

```
var scrollTop = document.documentElement.scrollTop || window.pageYOfset || document.body.scrollTop;
```

IE6/7/8： 
对于没有doctype声明的页面里可以使用  document.body.scrollTop 来获取 scrollTop高度 ； 
对于有doctype声明的页面则可以使用 document.documentElement.scrollTop； 

Safari: 
safari 比较特别，有自己获取scrollTop的函数 ： window.pageYOffset ； 

Firefox: 
火狐等等相对标准些的浏览器就省心多了，直接用 document.documentElement.scrollTop ；

除了上面这些，我们一般吧 pageYOfset 放在中间，因为在ie下 pageYOfset 返回undefined，这时候body.scrolltop会返回0，以免报错。

有了获取 scrollTop 的方法，立马就能干很多事情，比如很常见的滑动悬浮效果：

![知乎变动前](./1.png)

![知乎变动后](./2.png)

可以注意到滑动固定距离后顶部有一个小小的滑动效果，打开谷歌调试界面选择Elements可以看到知乎使用的就是固定header便签（fixed定位），滑动一段距离后首先给父层添加一个兄弟div占位块，再滑动一段后，就给父层添加`.is-hidden`通过css优先级使第一子类执行一个`transform: translateY(-100%);`，使用`transition: transform .3s,-webkit-transform .3s;`达到动画效果，第二子类也没有使用`display:none;`达到隐藏效果，而且和想象中不一样，没有给父容器固定高度，而是给第一子容器相对定位撑开高度，给第二子容器绝对定位脱离文档流，并且同样使用`transform: translateY(-100%);`滑动一个身位，父容器`overflow:hidden;`隐藏第二子类。。。（这三个句号是我觉得也许还有很多以我的目光看不到的知识点，请各位大佬一定告诉我）。

简约而不简单，尽量使用css动画这一点很棒，大量使用flex布局，然后我条件反射地打开360浏览器打开这个页面调整为“兼容模式”，然后就是激动人心的时刻！

![360知乎兼容性](./3.jpg)

我这里的360兼容模式是ie9内核，喜大普奔，大知乎放弃兼容ie9了！
