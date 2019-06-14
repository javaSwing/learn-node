## CommonJS语法
### `exports`和`module.exports`的区别

1.  `exports`和`module.exports`是不能并存的，而且有了`module.exports`的导出对于exports导出的东西就会忽略
2. ，如果你想你的模块是一个特定的类型就用module.exports。如果你想的模块是一个典型的“实例化对象”就用exports。