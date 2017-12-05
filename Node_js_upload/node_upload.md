# node.js 接收上传文件

> 主要参考文章[《node+express实现文件上传功能》](https://www.cnblogs.com/pingfan1990/p/4701355.html)

直接 `$ express project_name ` 生成项目文件，打开 router > index.js  
添加：
```
router.post('/upData', (req, res, next) => {
  var form = new formidable.IncomingForm();
  //设置编辑
  form.encoding = 'utf-8';
  //设置文件存储路径
  form.uploadDir = "./";
  //保留后缀
  form.keepExtensions = true;
  //设置单文件大小限制    
  form.maxFieldsSize = 2 * 1024 * 1024;
  //form.maxFields = 1000;  设置所以文件的大小总和

  form.parse(req, function (err, fields, files) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('received upload:\n\n');
    res.end(util.inspect({ fields: fields, files: files }));
  });
})
```
接着运行起来服务器，npm start ，然后安卓端请求数据后，就会在项目文件夹下生成上传的文件了，暂时项目名称是随机的，具体改名明天做
[参考资料](https://github.com/felixge/node-formidable)