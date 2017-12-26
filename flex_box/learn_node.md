# FLex 弹性布局

> 以下文章主要参考了阮一峰老师的[文章](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool)

弹性布局是W3C在2009年提出的一种新方案，可以便捷、响应式的完成各种页面布局。目前已经得到所有浏览器的支持，而且各大厂商，知乎等都已经正式使用了 。

## 概念

Flex 就是 flexible box 的缩写，意为弹性布局，用来为盒子模型提供最大的灵活性。

任何一个容器都可以指定为Flex布局，行内元素也可以：`display: inline-flex`,并且设置为flex布局以后，子元素的float、clear、vertical-align属性将失效。

采用flex布局的元素，称为flex容器，他的所有子元素自动成为容器成员，称为flex项目。

容器默认存在两根主轴：main axis（水平主轴） 和 cross axis (垂直交叉轴),

## 主体基本属性

1. flex-direction : 决定主轴的方向

2. flex-wrap：      决定超出屏幕宽度时如何换行

3. flex-flow：      是 flex-wrap 和 flex-direction 的缩写形式

4. justify-content ：属性定义了项目的主轴的对其方式

5. align-items :    定义在交叉轴上如何对其

6. align-content :  定义多根轴线的对其方式，只有一根时不起作用

## 2.1 flex-direction 

可选值：

* row（默认值）：主轴为水平方向，起点在左端。
* row-reverse：主轴为水平方向，起点在右端。
* column：主轴为垂直方向，起点在上沿。
* column-reverse：主轴为垂直方向，起点在下沿。

## 2.2 flex-wrap 

可选值：

* nowrap 不换行
* wrap 换行
* wrap-reverse 换行，第一行在下方

## 2.3 flex-flow 

语法：

flex-flow: flex-diretion || flex-wrap;

## 2.4 justify-content 

可选值：

* flex-start 向开始靠齐
* flex-end 向结束靠齐
* center 居中
* space-between 两端对齐，项目之间的距离都相等
* space-around 每个项目两侧的间隔相等，项目之间的间隔比项目与边框的间隔大一倍

## 2.5 align-tiem 

可选值：

* flex-start 交叉轴上起点对齐
* flex-end 交叉轴上向终点对齐
* center 交叉轴的终点对齐
* baseline 项目中的第一行文字的基线对齐
* stretch 如果项目未设置高度活设为auto，将占满整个容器的高度

## 2.6 align-centent 

可选值：

* flex-start 与交叉轴的起点对齐
* flex-end 与交叉轴的终点对齐
* center 与交叉轴的中点对齐
* space-between 与交叉轴两端对齐，轴线之间的间隔平均分布
* space-around 轴线之间的间隔都相等
* stretch 轴线占满整个交叉轴

## 项目属性

1. order    定义项目的排列顺序，竖直越小，排列越靠前，默认为0；
2. flex-grow   定义项目的放大比例，默认为0，即使存在剩余空间，也不放大。
3. flex-shrink  定义项目的缩小比例，默认为1，即空间不足会缩小
4. flex-basis    定义了分配多余空间之前，项目占据了主轴空间的大小
5. flex 是上述4个属性的缩写
6. align-self  规定单个项目与其他项目不一样的对齐方式，可覆盖align-items属性