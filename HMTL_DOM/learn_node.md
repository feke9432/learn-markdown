# HTML DOM 对象学习

## 1.什么是 DOM

DOM(Document Object Model -- 文章对象模型)，是用来呈现以及与任意HTML或XML交互的API文档。DOM是载入到浏览器中的树形文档模型，使用节点树的形式来表现文档，每个节点代表的文档结构部分，节点可以被创建，移动，修改，事件监听器可以被添加到节点上并在给定事件时发生。依赖DOM,页面视图能够便捷地修改添加事件。

w3s dom 结构图
![w3s dom 结构图](./dom_htmltree.jpg)

## 2.编程接口

### 2.1 获取节点api

1. getElementById()
> getElementById() 方法返回带有指定 ID 的元素  
> 例子： var idItem = document.getElementById('id');

2. getElementsByTagName()

> getElementsByTagName() 方法返回含有指定标签名的所有元素的节点列表  
> 例子：var liList = document.getElementsByTagName('li')

3. getElementsByClassName() ： __ie 9 以下不支持此接口__

> getElementsByClassName() 方法返回调用对象树下所有指定Class名称的子元素，任意元素可调用。  
> 例子：var itemList = doucment.getElementsByClassName('item')

4. getElementsByName() ： __ie 不支持此接口__

> getElementsByName() 方法返回调用对象树下所有指定名称的子元素，任意元素可调用。  
> 例子：var itemList = doucment.getElementsByName('item')

5. querySelector() : __ie 8 以下不支持此接口__

> querySelector() 方法返回调用对象树下所有符合选择器组的子元素，任意元素可调用。  
> 例子：var itemList = doucment.querySelector("div.user-panel.main input[name=login]")

6. querySelectorAll() : __ie 8 以下不支持此接口__

> querySelectorAll() 方法返回调用对象树下所有符合选择器组的子元素集合，任意元素可调用。  
> 例子：var itemList = doucment.querySelectorAll('idiv.user-panel.main ul li')

7. queryCommandEnabled() 

> queryCommandEnabled() 方法用来查询浏览器是否支持指定的富文本编辑指令。  
> 例子：var itemList = doucment.queryCommandEnabled('SelectAll')

### 2.2 添加节点 api

1. ParentNode.append() : __ie 不支持此接口__

> ParentNode.append() 方法用来给父节点添加子节点，可添加字符节点，无返回值
> 例子：var itemList = ParentNode.append()

2. ParentNode.appendChild(el) 

> ParentNode.appendChild(el) 方法用来给父节点添加子节点，只能添加 node 类型，返回值为 添加的子节点。 
> 例子：var itemList = ParentNode.appendChild(el)

3. ParentNode.prepend() : __ie 不支持此接口__

> ParentNode.prepend() 方法用来给父节点的第一个子节点前添加节点，可以是字符节点，无返回值

### 2.3 创建api

1. document.createAttribute()

> attribute = document.createAttribute(name) 方法用来创建一个属性值，创建后可使用 attribute.nodeValue = '属性值'，来赋值，使用 Element.setAttributeNode(attribute) 添加属性到元素上，该方法可用
Element.setAttribute(attribute, '属性值')代替

2. document.createDocumentFragment()

> 生成一个新的空白的文档片段，是一个DocumentFragment对象的引用，不是Dom树的一部分，存在于内存中，所以将元素插入文档片段时不会引起页面回流，可以起到性能优化的作用
> docfrag = document.createDocumentFragment();
> docfrag.appendChild(li);

3. document.createElement(TagName) 

> 返回一个新建的 tagName 的元素，如果tagName不能识别则反回HTMLUnknownElement,
> let element = document.createElement(tagName[, options]);

