# webpack-demo

## 起步

`npm init -y`: 生成 `package.json`文件

`npm install webpack webpack-cli -D`: 安装依赖， `webpack-cli`使我们可以在命令行执行webpack命令


## 加载资源文件

### css

css-loader、style-loader

### image/字体

file-loader

### 数据资源

webpack内置支持打包JSON文件

csv/tsv: csv-loader

xml: xml-loader


## 管理输出

### html-webpack-plugin

webpack的index.html不能自动更新引入的入口文件名称，`html-webpack-plugin`插件用于解决这个问题，可以向 index.html 动态添加 bundle


### clean-webpack-plugin

每次重新打包构建前清理无用文件


