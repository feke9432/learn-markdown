# 安卓学习笔记

和一般人不同，我一直认为最适合我的学习方式就是在实际项目中学习，可惜大多数时间是没有机会参与实际项目的，但我们初中语文老师说：

> 有困难要上，没有困难创造困难也要上！

所以虽然现在没有项目给我，那我就自己创造需求去做，下面就是一些心得。

# 1. 很傻的计算器

昨天百度了一个大牛的[入门项目教程](http://blog.csdn.net/anddlecn/article/details/51461965?locationNum=9&fps=1)，今天终于把项目简单写出来了。。。

1. 首先就是安装环境。

由于安卓的底层开发语言就是 java ，所以首先安装 java 环境，在官网下载 jdk 后安装在你想要的位置（请记住这个位置），然后配置环境变量，检查  
计算机 > 属性 > 高级系统属性 > 环境变量 > 系统变量 >  
检查是否有 JAVA_HOME 这一变量，有检查是否和安装路径相同，不同则建立变量并设置值为安装路径  
之后新建 classpath 变量赋值为： `.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar`  
最后在 path 变量值得最前面添加：`%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;`

之后就可以 ctrl + r 打开 cmd 输入 javac ，如果打印出下面的图就就说明成功了：
![](./cmd.png)

之后在 android studio 官网下载最新版软件，跟着点，在是否加入 path 的选项上加 √ ，之后一马平川的安装就好。

2. 新建项目

这时候会下载大量的依赖包，主要是安卓版本依赖包啥的，可能需要较长时间，下次就不会了。

新建项目时选择空白模板，然后打开  
app > res > layout > active_main.xml(或者其他名字，这里暂时只有一个页面一个文件)

删除旧内容后选择竖排布局 `<LinearLayout></LinearLayout>`,熟悉的标签式布局，用各种属性调整页面布局，文件最上方的标签`<?xml version="1.0" encoding="utf-8"?>`，这个我一眼就看出来是声明版本号，声明文档格式为‘utf-8’，然后按照教程老老实实一步一步布局下来，大体成型后添加按钮点击事件`android:onClick="onClick"`,又是熟悉的语法,之后到  
app > java > com.anddle.你的项目名 > MainActivity
![](./onclick.png)
中添加事件，在类 MainActivity 中添加公用返回值为空的事件 onClick ,传入一个参数（View view）,这里以以后的参数注意 Alt + Enter 引入引用，onClick 函数教程中采用了 switch case 判断用户点击的按钮的 id 的方式执行事件。这里遇到一个愚蠢的问题，之前遇到不管点哪个按钮都弹出错误的提示，判断是 switch 直接执行最后一个事件，然后发现没有给 case 里的语句块添加 break; 弹出的过。。。
