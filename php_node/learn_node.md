# 记一次使用php解决问题

大概是这样的，原来使用`file_get_contents()`函数读取 HTML 文件echo（输出）到页面，但需求改变，需要读取php文件，并且php中有一些php代码需要执行，依旧使用`file_get_contents()`函数读取文件后文件内php代码没有执行，查文档后发现是这个函数只是把文件读取为字符串，字符串内的代码一视同仁都当做字符串。

于是更换为：

```
$html = require '1.php';
echo file_get_contents($html);
```

然后总是报错，还输出到页面上，仔细看代码发现是重复输出的问题，去掉`echo file_get_contents($html);`这一句就好了。

原来直接访问php文件就会执行php程序，但输出的内容是页面内最终留下的内容，比如上面 `require '1.php';` 就是把1.php的内容获取并执行到index.php里了，最后就会剩下这些内容，并且多次 echo 最后只会发一次内容字符。