# 写五十音图

某日突然想起要继续学五十音图。。。大学好拿起放下好几次，之前闲坐在家又拿起，上班了又放下...

最近闲下来又拿起，于是想着写个五十音图处来，在写平假名时还耐着性子复制粘贴，到片假名时整个就烦了，于是打算用最近学习的 node.js 批量替换，百度了一个 [日语平假名和片假名一览表.txt](./日语平假名和片假名一览表.txt) 然后基本采用同步的方法写（懒。。———）

先把文档读取后 切一下（split）、过滤出日文字母（刨除英文字母）、去除 txt 的换行符号

得到平假名和片假名一一对应的数组后改已经写好的评价名表格，最后写入一个新文件，感谢 node.js 帮我判断并生成文件:)