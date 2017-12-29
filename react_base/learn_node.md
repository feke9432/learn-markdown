# react 基础学习

很早就接触过react了，但一直也没有专心去看，大概知道一些虚拟dom，脏值监测，但也是雾里看花，不得其法，但最近不管是知乎，掘金，甚至是招聘信息，这个词出现的频率实在是多，今天终于还是耐不住好奇，打算实际体验一下react到底是何方神圣！

## 在项目中学习

我一直认为解决实际需求比干看文档有意思的多，想到学习一个东西我的第一反应就是直接上度娘搜简单项目入门教程：
> [从零开始搭建一个react项目](https://www.jianshu.com/p/324fd1c124ad)

## 项目基本配置

这个作者很直接，上来直接就是配置基本环境，实际也确实应该如此，毕竟现代社会早不是刀耕火种，也是大工厂自动化的年代了，再建一个HTML页面引入react已经不太合适了，作者直接告诉我们怎么用别人开发好的零件组装我们自己的机器。

> npm install --save react ： 一切的基础，react 大魔王！

> npm install --save react-dom ： react不直接操作dom，所以引入相关零件

> npm install --save-dev webpack ：模块打包工具

> npm install --save-dev webpack-dev-server : webpack 的小型express服务器，我们主要用他的热加载

> npm install --save-dev babel-core ：安装babel让我们有在任何项目中使用新特性的能力，把es6转成es5，  
> 接下来安装babel的各种依赖：
>> npm install --save babel-polyfill ：babel的填充器
>
>> npm install --save-dev babel-loader ：babel的webpack加载器
>
>> npm install --save-dev babel-plugin-transform-runtime ：外部引用助手和内置函数，自动填充代码而不会污染全局。
>
>> npm install --save-dev babel-preset-es2015 ：babel的翻译为2015的模块
>
>> npm install --save-dev babel-preset-react ：babel翻译babel的jsx语法的模块
> 
>> npm install --save-dev babel-preset-stage-2 ：为了能够使用更多es 新特性而安装的包

机器组装好以后还要设置便捷的开关，打开package.json然后添加下面的scripts：

```
"scripts": {
  "start": "webpack-dev-server --hot --inline --colors --content-base ./build",
  "build": "webpack --progress --colors"
}
```

